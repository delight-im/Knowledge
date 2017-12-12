# Composer (PHP)

## What is Composer?

 * Composer is a dependency manager for PHP.
 * Almost every PHP application depends on some external libraries in one way or another. These libraries or packages are often produced by third parties.
 * Composer helps you install and maintain those libraries with ease.
 * Declaring what external packages your application depends on is also an important part of documentation.
 * After learning the few commands that you'll need, Composer will start saving you a lot of time and hassle instantly.
 * If you know "npm" or "Yarn" from Node.js, "Bower" or "Yarn" from JavaScript, "RubyGems" or "Bundler" from Ruby, or perhaps just "APT" from Debian or "Homebrew" from macOS, that's more or less what Composer is to PHP.
 * Composer is multi-platform software and works equally well on Linux, macOS and Windows.

## Why should I use Composer?

| Task | Without Composer | With Composer |
| --- | --- | --- |
| Download a third-party library or your own external module | (1) Try to find a trustworthy source for the package on the web. (2) Download an archive (e.g. ZIP) of the package that contains the source code, ideally over HTTPS. (3) Optionally, verify checksums of the downloaded archive against information on the web. (4) Extract the source code from the archive. | `$ composer require some-vendor/some-package` |
| Move the library or module into the project of your own application | (1) Find a good place in your project where you could put all your external dependencies. (2) Create a meaningful directory structure in that place. (3) Move the downloaded source code to the location you've just chosen. | All packages are automatically stored in the `vendor` directory at the root of your project. |
| Make the components (e.g. classes) of the library or module available in the source code of your own application | (1) Insert a `require` statement in your application that includes the main component that you want to use. (2) Consider whether you really want `require`, or if you rather want `include`, `require_once` or `include_once` instead. (3) Read the error and warning messages telling you that the included component needs other parts of the library or module as well. (4) Figure out which other components to include to make the errors and warnings go away. (5) Sort out the various inclusions to bring them into the correct order, resolving conflicts along the way. (6) Make sure that the list of inclusions is in some path of your application logic that is always executed when the library or module is required. (7) Consider how you can optimize the performance and memory footprint of your application, given that you have now started including many components from the library or module that are not really used for every request or page. | `require __DIR__ . '/vendor/autoload.php';` |
| Update a library or module to a new *patch* version (e.g. from `x.x.6` to `x.x.7`) or *minor* version (e.g. from `x.4.x` to `x.5.x`), e.g. for bug fixes or new features | Repeat the steps of locating the new version of the library on the web, downloading it securely, and replacing the old version in the project of your application. Review whether the update is really safe to install, being backwards-compatible and thus *not* introducing any breaking changes. | `$ composer update some-vendor/some-package` |
| Update a library or module to a new *major* version (e.g. from `2.x.x` to `3.x.x`), e.g. for new features or bug fixes | Repeat the steps of locating the new version of the library on the web, downloading it securely, and replacing the old version in the project of your application. | `$ composer require some-vendor/some-package` |
| Check which libraries or modules have security updates, bug fixes or new features available | (1) Create a list of all libraries or modules that you have imported manually into your project. (2) Locate the official project sites for each of these libraries or modules on the web. (3) On the respective project sites, check for information about new versions. | `$ composer outdated` |
| Create a list of all licenses of the libraries and modules used in your application | (1) Create a list of all libraries or modules that you have imported manually into your project. (2) Locate the official project sites for each of these libraries or modules on the web. (3) On the respective project sites, check for license information. | `$ composer licenses` |
| Keep an exact and reproducible version of the library or module under version control | Keep dozens, perhaps hundreds or thousands of files in your version control which do not actually belong to your project. Update them as needed, which involves checking in many additions, modifications and deletions. | Keep the single file `composer.json` in version control, which just lists the exact name and version of each package. |

## How do I install Composer on my workstation?

### Linux

 1. Open the [official download page](https://getcomposer.org/download/) and execute the four commands shown at the top. This needs the `php` executable somewhere in your `PATH`. Otherwise, prepend the full path to that executable on your machine.
 1. Run the following command to make Composer available globally as `composer`:

    ```bash
    $ sudo mv composer.phar /usr/local/bin/composer
    ```

**Note:** If you manage multiple PHP versions on your system, make sure to provide the path to the executable for the desired PHP version to Composer. Otherwise, Composer will be forced to make wrong assumptions about your configuration and may install wrong packages.

### macOS

See “Linux” above

### Windows

 1. Download the [official installer](https://getcomposer.org/Composer-Setup.exe).
 1. Run the installer.

**Note:** If you manage multiple PHP versions on your system, make sure to provide the path to the executable for the desired PHP version to Composer. Otherwise, Composer will be forced to make wrong assumptions about your configuration and may install wrong packages.

## Do I need to install Composer on my web server?

No. The dependencies will always be managed locally (i.e. on your workstation) and then just transferred to the server when uploading your application, along with all the other source files of your application.

## I have a project with an existing `composer.json` file. How do I install the libraries or modules listed in that file?

 1. Open the root directory of the project where the `composer.json` file is located.
 1. Execute the following command on the command line:

    ```bash
    $ composer install
    ```

## How do I add a new library or module to my application?

 1. Open the root directory of the project where the `composer.json` file is located.
 1. Find out the package name of the library or module that you want to install, e.g. `some-vendor/some-package`.
 1. Execute the following command on the command line:

    ```bash
    $ composer require some-vendor/some-package
    ```

## I have installed some libraries or modules with Composer. How do I make them available in my application?

Somewhere in your PHP files, usually at the top, *before* the parts where you want to make use of the components, place this line *once*:

```php
require __DIR__ . '/vendor/autoload.php';
```

This imports *all* libraries and modules that are needed, but *only* those that are actually required for the specific page or request. All that happens automatically.

## How do I update libraries or modules within my application?

 1. Open the root directory of the project where the `composer.json` file is located.
 1. Find out the package name of the library or module that you want to update, e.g. `some-vendor/some-package`.
 1. Execute the following command on the command line:

    ```bash
    $ composer update some-vendor/some-package
    ```

If you want to update *all* libraries or modules *at once*, just drop the parameter:

```bash
$ composer update
```

Both commands update the libraries or modules with regard to the version constraints listed in the `composer.json` file. By default, that means patch version updates (e.g. from version `x.x.6` to `x.x.7`) and minor version updates (e.g. from version `x.4.x` to `x.5.x`) are allowed while major version upgrades (e.g. from version `2.x.x` to `3.x.x`) are excluded. These major version upgrades may introduce breaking changes which are not backwards-compatible. If you want to change the version constraints, e.g. to perform a major version upgrade, you can do so by simply adding the specific package again with Composer, which will overwrite the old package:

```bash
$ composer require some-vendor/some-package
```

## How do I remove libraries or modules from my application?

 1. Open the root directory of the project where the `composer.json` file is located.
 1. Find out the package name of the library or module that you want to remove, e.g. `some-vendor/some-package`.
 1. Execute the following command on the command line:

    ```bash
    $ composer remove some-vendor/some-package
    ```

## How can I list all the libraries or modules that can be updated?

 1. Open the root directory of the project where the `composer.json` file is located.
 1. Execute the following command on the command line:

    ```bash
    $ composer outdated
    ```

Sometimes, you'll want to *exclude* upgrades to new *major* versions (e.g. from version `2.x.x` to `3.x.x`). These major version upgrades may introduce breaking changes which are not backwards-compatible. To exclude those upgrades, run the following command instead:

```bash
$ composer outdated --minor-only
```

## How do I update Composer itself to a new version?

### Linux

```bash
$ sudo -H composer self-update
```

### macOS

See "Linux" above

### Windows

```
$ composer self-update
```

## I really can't use Composer for some reason. How do I import the required dependencies manually?

 1. Open the `composer.json` file of the project, which is usually located in the project's root directory.
 1. Find the contents inside the `"require": {}` section.
 1. For every package listed there, use the package name from the list to search for the library or module on [Packagist](https://packagist.org/).
 1. If you have found the library or module on Packagist, follow the link to the respective project site there.
 1. Download the correct version of the library or module, as found in the the `"require": {}` section earlier, from the project site.
 1. Put the downloaded source files somewhere in your project's directory.
 1. Make all required components available in your application via `require` statements. You may have to try different orders and include further components required by those you actually want.
