# Heroku

## Sign in

 1. Right-click into working copy's directory or on desktop if there is no project directory yet
 2. Select `Git Bash` from the context menu
 3. `heroku login`
 4. Type your username and hit `Enter`
 5. Type your password and hit `Enter`

## Set up your SSH keys

This must only be done once in order to set up Heroku on a new computer.

 1. `cd ~/.ssh`
 2. `ssh-keygen -t rsa -C "<YOUR_EMAIL_ADDRESS>"`
 3. For the location just press `Enter` which will create `id_rsa` (private key) and `id_rsa.pub` (public key)
 4. `heroku keys:add`
 5. When asked for the index of the key to choose, enter the number that is shown for `id_rsa.pub`

## Create a new app/repository

 1. Create a new app in Heroku's web interface
 2. `cd ~/Desktop`
 3. `git clone git@heroku.com:<APPNAME>.git -o heroku`
 4. You have now cloned into the repository `<APPNAME>` which has caused a folder named `<APPNAME>` to be created in your current directory
 5. `cd <APPNAME>`
 6. You are now in the local folder for your project
 7. `git remote add heroku git@heroku.com:<APPNAME>.git`
 8. Add some files to the local folder
 9. `git add .`
 10. `git commit -m 'initial commit'`
 11. `git push heroku master`

## Get a new working copy of your app/repository

If you want to get a new working copy of your app on your computer, you just have to clone into the repository again.

 1. `git clone git@heroku.com:<APPNAME>.git -o heroku`
 2. `cd <APPNAME>`

## Publish changes to your app/repository

You don't need to sign in to heroku via `heroku login` when you want to publish changes to your app. Normal Git usage is sufficient when the repository has been set up already.

 1. `git commit -m '<DESCRIPTION_OF_CHANGES>'`
 2. `git push heroku master`

## Show basic app information

`heroku info`