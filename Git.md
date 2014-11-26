# Git

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
