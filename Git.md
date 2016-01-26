# Git

## Windows

### Setting up your identity

Before creating any commits in Git, you should first set your identity in the configuration. This is important because this information will be immutably written into every single commit. Apart from that, note that this information is public.

```
git config --global user.name "<YOUR_NAME>"
git config --global user.email <YOUR_EMAIL_ADDRESS>
```

Example:

```
git config --global user.name "John Doe"
git config --global user.email john.doe@example.org
```

### Remembering (caching) passwords for HTTPS

When cloning repositories over HTTPS, you authenticate via usernames and passwords, compared to SSH keys for usage over SSH. If you want to let Git remember passwords, run the following command:

`git config --global credential.helper wincred`

### Handling line endings correctly

You'll probably want Git to convert line endings to the native Windows line endings (CRLF) on checkout and convert back to simple LF when pushing changes. Define this in the configuration like this:

`git config --global core.autocrlf true`

### Checking your settings

Run the following command to see all your settings and check if they are correct:

`git config --list`

## Update a forked repository (sync with the original again)

 1. The first time only, execute the following command to add the forked repository ("upstream") as a remote, otherwise skip it
 2. `git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>`
 3. Whenever you want to get updates from the forked repository (and push them to your own repository on GitHub):
 4. `git pull upstream master`
 5. `git push origin`

## Reset a repository to the forked repository's state (e.g. after denied pull request)

 1. The first time only, execute the following command to add the forked repository ("upstream") as a remote, otherwise skip it
 2. `git remote add upstream <GIT_URL_OF_ORIGINAL_REPOSITORY>`
 3. Whenever you want to reset the repository's state:
 4. `git remote update`
 5. `git reset --hard upstream/master`
 6. `git push origin +master`

## Show all ignored files for a repository

`git clean -ndX`

## Get a list of all remotes for a repository

`git remote -v`

## Remove all newly ignored files (which had not been ignored before)

When you've added a file to `.gitignore` that was previously in the repository already, you may run the following commands to remove the file from the repository, in addition to it being added to `.gitignore`:

 1. `git rm -r --cached .`
 2. `git add .`

## Undo some commits and roll back to an old commit

 1. `git checkout <COMMIT_HASH> .`
 2. `git commit -m 'Undo some commits'`
 3. `git push origin master`

## Change a repository's origin URL

`git remote set-url origin <NEW_ORIGIN_URL>`

## Discard unstaged changes

In order to discard *all* unstaged changes, run this command:

`git checkout -- .`

If you want to discard changes for a specific path only, call this:

`git checkout <PATH_TO_DISCARD_CHANGES_FOR>`

## Undo a commit that has already been published

`git push -f origin HEAD~1:master`

## Undo a local commit (that has not been published yet)

If you want to keep the changes in your working copy:

`git reset --soft HEAD~1`

If you want to undo all changes in your working copy as well:

`git reset --hard HEAD~1`

## Show changes that have been made to the working copy

If you want to show unstaged (not committed yet) changes only:

`git diff`

If you want to show staged (committed) changes only:

`git diff --staged`

If you want to show all changes, no matter if staged or unstaged:

`git diff HEAD`

## Delete a branch

To delete a local branch:

`git branch -d <LOCAL_BRANCH>`

To delete a remote branch:

`git push origin :<REMOTE_BRANCH>`

## Adding not only a title but also a description to a commit

Just add another `-m <TEXT>` parameter to the commit command:

`git commit -m '<TITLE>' -m '<DESCRIPTION>'`

## Remove all untracked files and directories from a repository

To show a preview of what will be deleted:

`git clean -ndf`

In order to perform the actual deletion, just remove the leading `n` in the `-ndf` option.

## Show the log in a short version

`git log --pretty=oneline --abbrev-commit`

## Create a branch

In order to create a new branch but stay in the current branch:

`git branch <BRANCH_NAME>`

In order to create a new branch and automatically switch to that new branch:

`git checkout -b <BRANCH_NAME>`

## Switch to another branch

`git checkout <BRANCH_NAME>`

## Tagging releases

You can mark specific points in your repository's history by adding tags. Usually, you'd want to do this for releases, but you can use tags for other purposes as well.

In order to tag the current point in history, just execute the following two commands. `<TAG_NAME>` is the unique name for this new tag. When tagging releases, you should use the version number and prepend it with a `v`, e.g. `v1.0.4`. For the `<DESCRIPTION>`, you may type in a changelog.

```
git tag -a <TAG_NAME> -m "<DESCRIPTION>"
git push origin --tags
```

## Importing commits, pull requests and other changes via patch files

 1. Get the patch file for the commit, pull request or other change that you want to import into your repository. For GitHub pull requests, you can easily get the patch file by appending `.patch` to the URL of the pull request and following the redirect.
 2. Pipe the content of the patch file to `git apply`. Example: `curl -L https://github.com/<USER>/<REPO>/pull/<ID>.patch | git apply`
 3. Optionally, make additional changes to the imported code.
 4. Commit the code via `git commit` while mentioning the original author of the imported patch with the option `--author "<NAME> <<EMAIL>>"`.
