# Android Keystores and APK Signing

## Requirements

 * Java Development Kit (JDK) with `keytool`
 * the command line interface

## Guidelines

 * Use the RSA algorithm for the key algorithm (`-keyalg`)
 * Use 2048+ bits for the key size (`-keysize`)
 * Use 25+ years (convert to days) for the validity (`-validity`)
 * Use a unique keystore per app
 * Use strong passwords

## How-to

 1. Open the command line interface
 2. Add the `keytool` location to your path or prepend it to the following command
 3. Run `keytool -genkey -v -keystore <APP_NAME>.keystore -alias <APP_NAME> -dname "CN=<COMPANY_NAME>,OU=IT,O=<COMPANY_NAME>,L=Unknown,ST=Unknown,C=<COUNTRY_CODE>" -keyalg RSA -keysize 2048 -validity 13149` where you replace `<APP_NAME>` with the name of your app (`[a-z]{1,8}`), `<COMPANY_NAME>` with the name of your company and `<COUNTRY_CODE>` with your country code (ISO-3166 alpha-2)
 4. Enter your new store password ("outer password")
 5. Enter your new key password ("inner password")

## Where do I find the `keytool`?

 * Windows: `<PATH_TO_JDK>\bin\keytool.exe`

## Why do I need a secure key?

> If a third party should manage to take your key without your knowledge or permission, that person could sign and distribute applications that maliciously replace your authentic applications or corrupt them. Such a person could also sign and distribute applications under your identity that attack other applications or the system itself, or corrupt or steal user data. Your reputation as a developer entity depends on your securing your private key properly, at all times, until the key is expired.

Source: http://developer.android.com/tools/publishing/app-signing.html

## What if I lose the key?

> Your private key is required for signing all future versions of your application. If you lose or misplace your key, you will not be able to publish updates to your existing application. You cannot regenerate a previously generated key.

Source: http://developer.android.com/tools/publishing/app-signing.html