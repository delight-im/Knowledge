# Git

## Installation

### Setting up your identity

Before creating any commits in Git, you should first set your identity in the configuration. This is important because this information will be immutably written into every single commit. Apart from that, note that this information is public.

```
$ git config --global user.name "<YOUR_NAME>"
$ git config --global user.email "<YOUR_EMAIL_ADDRESS>"
```

### Remembering (caching) passwords for HTTPS

When cloning repositories over HTTPS, you authenticate via usernames and passwords, compared to SSH keys for usage over SSH. If you want to let Git remember passwords, run one of the following commands:

```
# On Windows
$ git config --global credential.helper wincred

# On Ubuntu
$ sudo apt-get install libgnome-keyring-dev
$ cd /usr/share/doc/git/contrib/credential/gnome-keyring
$ sudo make
$ git config --global credential.helper /usr/share/doc/git/contrib/credential/gnome-keyring/git-credential-gnome-keyring

# On Mac OS X
$ git config --global credential.helper osxkeychain
```

### Handling line endings correctly on Windows

You'll probably want Git to convert line endings to the native Windows line endings (CRLF) on checkout and convert back to simple LF when pushing changes. Define this behavior in the configuration like this:

```
$ git config --global core.autocrlf true
```

### Using your favorite editor for Git (e.g. when composing a commit message)

```
# e.g. for “gedit” on Ubuntu
$ git config --global core.editor "gedit --wait"
```

### Checking your settings

Run the following command to see all your settings and check if they are correct:

```
$ git config --list
```

## Aliases

### Receiving updates

```bash
# git down
git config --global alias.down '!git pull --rebase --autostash; git submodule update --init --recursive'
```

### Sending updates

```bash
# git up
git config --global alias.up '!git push; git push --tags'
```

### Undo staging of one or more files

```bash
# git unstage <FILES>
git config --global alias.unstage 'reset HEAD --'
```

### Tagging releases according to Semantic Versioning (SemVer)

```bash
# git release-major
git config --global alias.release-major '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; major=$((major+1)); minor=0; patch=0; next='v'$major'.'$minor'.'$patch; git tag -a $next -m ""; echo "Previous release:"; echo -n "  "; echo $latest; echo "New release:"; echo -n "  "; echo $next'

# git release-minor
git config --global alias.release-minor '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; minor=$((minor+1)); patch=0; next='v'$major'.'$minor'.'$patch; git tag -a $next -m ""; echo "Previous release:"; echo -n "  "; echo $latest; echo "New release:"; echo -n "  "; echo $next'

# git release-patch
git config --global alias.release-patch '!latest=$(git describe --abbrev=0 --tags 2>/dev/null); latest=${latest:-v0.0.0}; set -- $(echo $latest | sed -e s/v// -e "s/\./ /g"); major=$1; minor=$2; patch=$3; patch=$((patch+1)); next='v'$major'.'$minor'.'$patch; git tag -a $next -m ""; echo "Previous release:"; echo -n "  "; echo $latest; echo "New release:"; echo -n "  "; echo $next'
```

### Ignoring redundant `git` binary names in commands

```bash
# git git status, git git commit, etc.
git config --global alias.git '!cd "$GIT_PREFIX" && git'
```

## Usage

### Update a forked repository (sync with the original again)

 1. The first time only, execute the following command to add the forked repository ("upstream") as a remote, otherwise skip it:

    ```
    $ git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>
    ```

 1. Whenever you want to get updates from the forked repository (and push them to your own remote):

    ```
    $ git pull upstream <BRANCH_NAME>
    $ git push origin
    ```

### Reset a repository to the forked repository's state (e.g. after denied pull request)

 1. The first time only, execute the following command to add the forked repository ("upstream") as a remote, otherwise skip it:

    ```
    $ git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>
    ```

 1. Whenever you want to reset the repository's state:

    ```
    $ git remote update
    $ git reset --hard upstream/<BRANCH_NAME>
    $ git push origin +<BRANCH_NAME>
    ```

### Show all ignored files for a repository

```
$ git clean -ndX
# or
$ git status --ignored
```

### Get a list of all remotes for a repository

```
$ git remote -v
```

### Remove all newly ignored files (which had not been ignored before)

When you've added a file to `.gitignore` that was previously in the repository already, you may run the following commands to remove the file from the repository, in addition to it being added to `.gitignore`:

```
$ git rm -r --cached .
$ git add .
```

### Changing the URL of a repository's remote

```
$ git remote set-url <REMOTE_NAME> <NEW_REMOTE_URL>
```

### Discard unstaged changes

In order to discard *all* unstaged changes, run this command:

```
$ git checkout -- .
```

If you want to discard changes for a specific path only, supply a specific path instead of `.`:

```
$ git checkout -- "<PATH_TO_DISCARD_CHANGES_FOR>"
```

### Undo a commit that has already been published (safe)

```
$ git checkout HEAD~1 .
$ git commit -m "Undo some commit"
$ git push <REMOTE_NAME> <BRANCH_NAME>
```

### Undo a commit that has already been published (dangerous)

```
$ git reset --hard HEAD~1
$ git push -f <REMOTE_NAME> <BRANCH_NAME>
```

### Undo a local commit (that has not been published yet)

If you want to keep the changes in your working copy:

```
# Keeping the changes in the working copy
$ git reset --soft HEAD~1
# or
# Simply discarding the changes altogether
$ git reset --hard HEAD~1
```

### Show changes that have been made to the working copy

```
# Show unstaged changes only
$ git diff
# or
# Show staged changes only
$ git diff --staged
# or
# Show both unstaged and staged changes
$ git diff HEAD
```

### Delete a branch

```
# Locally
$ git branch -d <BRANCH_NAME>
# or
# On the remote
$ git push <REMOTE_NAME> :<BRANCH_NAME>
```

### Adding not only a title but also a description to a commit

Just add another `-m` parameter to the `git commit` command:

```
$ git commit -m "<TITLE>" -m "<DESCRIPTION>"
```

### Remove all untracked files and directories from a repository

To show a preview of what will be deleted:

```
# Preview only
$ git clean -ndf
# or
# Actually execute
$ git clean -df
```

### Show the log in a short version

```
$ git log --pretty=oneline --abbrev-commit
```

### Create a branch

```
# Create but stay in current branch
$ git branch <NEW_BRANCH_NAME>
# or
# Create and switch to new branch
$ git checkout -b <NEW_BRANCH_NAME>
```

### Switch to another branch

```
$ git checkout <OTHER_BRANCH_NAME>
```

### Tagging releases

You can mark specific points in your repository's history by adding tags. Usually, you'd want to do this for releases, but you can use tags for other purposes as well.

In order to tag the current point in history, just execute the following two commands. `<TAG_NAME>` is the unique name for this new tag. When tagging releases, you should use the version number and prepend it with a `v`, e.g. `v1.0.4`. For the `<DESCRIPTION>`, you *may* enter a description of the changes.

```
$ git tag -a "<TAG_NAME>" -m "<DESCRIPTION>"
$ git push <REMOTE_NAME> --tags
```

### Importing commits, pull requests and other changes via patch files

 1. Get the patch file for the commit, pull request or other change that you want to import into your repository. For GitHub pull requests, you can easily get the patch file by appending `.patch` to the URL of the pull request and following the redirect:

    ```
    $ curl -L https://github.com/<USER>/<REPO>/pull/<ID>.patch
    ```

 1. Pipe the content of the patch file to `git apply`:

    ```
    $ curl -L https://github.com/<USER>/<REPO>/pull/<ID>.patch | git apply
    ```

 1. Optionally, make additional changes to the imported code

 1. Commit the code via `git commit` while mentioning the original author of the imported patch:

    ```
    $ git commit --author "<ORIGINAL_AUTHOR_NAME> <<ORIGINAL_AUTHOR_EMAIL>>" -m "<YOUR_COMMIT_MESSAGE>"
    ```

### Copying a branch

```
# Create a local copy of the old branch under the new name
$ git checkout -b <NEW_BRANCH_NAME> <OLD_BRANCH_NAME>
# Push the new copy of the branch to the remote
$ git push -u <REMOTE_NAME> <NEW_BRANCH_NAME>
```

### Moving a branch

```
# Create a local copy of the old branch under the new name
$ git checkout -b <NEW_BRANCH_NAME> <OLD_BRANCH_NAME>
# Push the new copy of the branch to the remote
$ git push -u <REMOTE_NAME> <NEW_BRANCH_NAME>
# Delete the old branch locally
$ git branch -d <OLD_BRANCH_NAME>
# Delete the old branch on the remote
$ git push origin :<OLD_BRANCH_NAME>
```

### Clearing a branch and resetting it to empty state

```
# Create a new local branch without parents
$ git checkout --orphan <NEW_BRANCH_NAME>
# Delete all (non-hidden) files in the new branch
$ rm -rf ./*
# Put your new files into the new branch
# ...
# Stage all new files
$ git add .
# Create the initial commit
$ git commit -m "Initial commit"
# Push the new branch to the remote
$ git push -uf <REMOTE_NAME> <NEW_BRANCH_NAME>
```

### Counting commits on a branch

```
# Total count
$ git rev-list --count <BRANCH_NAME>
# Example: git rev-list --count master

# or

# Count per author
$ git shortlog -s -n
```
