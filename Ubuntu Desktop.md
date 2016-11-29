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

   ```
   $ sudo systemctl disable sshd.service
   $ sudo systemctl stop sshd.service
   ```

 * Make sure that the `ufw` firewall is installed:

   ```
   $ sudo apt-get update
   $ sudo apt-get install ufw
   ```

 * Enable the `ufw` firewall and block all incoming connections by default:

   ```
   $ sudo ufw enable
   $ sudo ufw status verbose
   ```

## Usage

### Creating shortcuts

 * Press `Ctrl` and `Shift`, drag the file or folder to its target location and drop it to create a new shortcut at that target location.
