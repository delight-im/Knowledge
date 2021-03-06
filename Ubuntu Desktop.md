# Ubuntu Desktop

## Security

### General

 * Always have some up-to-date backup of your data. If possible, it should be encrypted. Apart from that, consider storing it off-site.
 * Use a password manager to store all your passphrases digitally in encrypted form.
 * Rather than choosing easily remembered but weak passphrases, consider writing down your passphrases on paper and storing them in a safe place.
 * Whenever leaving your device (for a longer time), either shut it down or at least hibernate it. Never just suspend it or leave it running.

### Hardware

 * Use hardware that supports UEFI and Secure Boot.
 * Buy a computer that comes with a TPM chip, if possible.
 * Get a device without FireWire, PCMCIA, PC Card, ExpressCard or Thunderbolt.

### Boot

 * Enable UEFI boot mode as opposed to legacy BIOS mode.
 * Enable Secure Boot in your UEFI settings if you can go without unsigned third-party drivers.
 * Set up an administrator passphrase that is required in order to enter the UEFI configuration.
 * Possibly, set up a user passphrase in UEFI as well, which is required to boot the device.
 * Disable booting from floppy, CD-ROM or network in your UEFI settings. Whenever you need one of these devices, e.g. to install the operating system, enable it temporarily.

### Operating system

 * Only use distributions that still get *regular* and *timely* security updates from the vendor.
 * Get a distribution that comes with SELinux, AppArmor, etc.
 * Make sure your distribution has native support for full disk encryption.
 * Only use a distribution that has support for UEFI and Secure Boot. Ideally, you shouldn't have to import keys for Secure Boot yourself.
 * Set up software-based full disk encryption during setup of your operating system, e.g. using LUKS. Make sure to choose a strong passphrase.
 * If you have a larger budget, consider getting a drive with hardware-based full disk encryption.
 * Choose a strong passphrase for the `root` user, if asked for this. In most cases, it may be the same as your password for full disk encryption.
 * Set up an unprivileged account as your primary account for daily usage. Set up a strong passphrase for this account. This account should, however, be part of the administrator group so that you may elevate privileges using `sudo` at any time.
 * Enable automatic security updates after installation.
 * Make sure that the `sshd` daemon is disabled by default after installation:

   ```bash
   $ sudo systemctl disable sshd.service
   $ sudo systemctl stop sshd.service
   ```

 * Make sure that the `ufw` firewall is installed:

   ```bash
   $ sudo apt-get update
   $ sudo apt-get install ufw
   ```

 * Enable the `ufw` firewall and block all incoming connections by default:

   ```bash
   $ sudo ufw enable
   $ sudo ufw status verbose
   ```

## Usage

### Creating shortcuts

 * Press `Ctrl` and `Shift`, drag the file or folder to its target location and drop it to create a new shortcut at that target location.

### Opening SSH tunnels to a remote server

```bash
$ ssh -p <SSH_PORT> -L <LOCAL_SOURCE_PORT>:localhost:<REMOTE_TARGET_PORT> user@server
# Example: ssh -p 22 -L 3306:localhost:3306 john@127.0.0.1
```

### Adding exFAT support to the system

```bash
$ sudo apt-get update
$ sudo apt-get install exfat-utils exfat-fuse
```

### Adding 7z support to the system

```bash
$ sudo apt-get update
$ sudo apt-get install p7zip-full
```

### Finding duplicate files

```bash
$ sudo apt-get update
$ sudo apt-get install fdupes
$ man fdupes
```

### Backups

#### Using archives

##### Discarding file ownership and permissions

```bash
# Create backup of <DIRECTORY> in <ARCHIVE>.tar.gz
$ sudo tar --create --gzip --no-same-owner --no-same-permissions --file <ARCHIVE>.tar.gz <DIRECTORY>

# Restore backup from <ARCHIVE>.tar.gz into <DIRECTORY>
$ mkdir <DIRECTORY>
$ tar --extract --gzip --no-same-owner --no-same-permissions --file <ARCHIVE>.tar.gz -C <DIRECTORY> --strip-components=1
```

##### Preserving file ownership and permissions

```bash
# Create backup of <DIRECTORY> in <ARCHIVE>.tar.gz
$ sudo tar --create --gzip --same-owner --same-permissions --file <ARCHIVE>.tar.gz <DIRECTORY>

# Restore backup from <ARCHIVE>.tar.gz into <DIRECTORY>
$ mkdir <DIRECTORY>
$ sudo tar --extract --gzip --same-owner --same-permissions --file <ARCHIVE>.tar.gz -C <DIRECTORY> --strip-components=1
```

### Disabling saving of Bash history to file system

Open `.bashrc` in your home folder (`~`) and change the value for `HISTFILESIZE` to `0`.

### Uninstalling bundled or pre-installed applications (“bloatware”)

```bash
# Email, RSS and newsgroup client with integrated spam filter
sudo apt-get purge thunderbird && sudo apt-get autoremove

# Music player and organizer
sudo apt-get purge rhythmbox && sudo apt-get autoremove

# Tool to take pictures and videos from your webcam
sudo apt-get purge cheese && sudo apt-get autoremove

# Mahjongg (classic Eastern tile game)
sudo apt-get purge gnome-mahjongg && sudo apt-get autoremove

# Minesweeper (popular puzzle game)
sudo apt-get purge gnome-mines && sudo apt-get autoremove

# Sudoku (popular puzzle game)
sudo apt-get purge gnome-sudoku && sudo apt-get autoremove

# Control Center account plugin for single sign-on with Facebook
sudo apt-get purge account-plugin-facebook && sudo apt-get autoremove

# Control Center account plugin for single sign-on with Flickr
sudo apt-get purge account-plugin-flickr && sudo apt-get autoremove

# Control Center account plugin for single sign-on with Google
sudo apt-get purge account-plugin-google && sudo apt-get autoremove

# Control Center extension for single sign-on
sudo apt-get purge unity-control-center-signon && sudo apt-get autoremove
```

### Mounting TrueCrypt volumes

 1. Run the following command to open the encrypted TrueCrypt partition or container:

    ```bash
    $ sudo cryptsetup open --type tcrypt <DRIVE_PATH> <CUSTOM_UNIQUE_NAME>
    # Example: sudo cryptsetup open --type tcrypt /dev/sdb1 my-truecrypt-drive
    ```

 1. Enter your `sudo` password if asked for this

 1. Enter the passphrase for the TrueCrypt volume

 1. Ubuntu will automatically mount the new volume

 1. Work with the volume ...

 1. If you're done, unmount the volume again using Ubuntu's GUI

 1. Finally close the encrypted TrueCrypt partition or container again:

    ```bash
    $ sudo cryptsetup close <CUSTOM_UNIQUE_NAME>
    # Example: sudo cryptsetup close my-truecrypt-drive
    ```

### Using optical character recognition (OCR) to convert images to searchable PDF documents

```bash
$ sudo apt-get install tesseract-ocr tesseract-ocr-eng
# and (for other languages, e.g. French)
$ sudo apt-get install tesseract-ocr-fra

# Single image: image.png to image.pdf
$ tesseract image.png image -l eng+fra pdf

# Multiple images: *.png to images.pdf
$ ls *.png | tesseract - images -l eng+fra pdf
```

### Resizing a batch of images to the same size

```bash
# WIDTH=1920
# HEIGHT=1080
# BACKGROUND=white
$ mogrify -auto-orient -resize "${WIDTH}x${HEIGHT}" -gravity center -background "${BACKGROUND}" -extent "${WIDTH}x${HEIGHT}" *.jpg
```

### Combining images to a slideshow

```bash
# SECONDS_PER_IMAGE=10
# INPUT_FILES=*.jpg
# OUTPUT_FPS=25
# OUTPUT_FILENAME=output.mp4
$ ffmpeg -framerate "1/${SECONDS_PER_IMAGE}" -pattern_type glob -i "${INPUT_FILES}" -r "${OUTPUT_FPS}" -c:v libx264 -pix_fmt yuv420p "${OUTPUT_FILENAME}"
```

### Downloading audio content from YouTube as an MP3 file

```bash
$ youtube-dl --extract-audio --audio-format mp3 --audio-quality 0 <VIDEO_URL>
```

### Creating copies of multiple files while adding a new suffix to each filename

```bash
$ sed -i<SUFFIX_TO_ADD> '' <FILES_TO_COPY>
# Example: sed -i.bak '' *
```

### Replacing substrings in the names of multiple files

```bash
$ rename 's/<OLD_SUBSTRING_ESCAPED>/<NEW_SUBSTRING>/' <FILES_TO_RENAME>
# Example: rename 's/\.jpg\.bak/.original.jpg/' *
```
