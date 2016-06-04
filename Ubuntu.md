# Ubuntu

## Installation

 * Set a proper timezone:

   ```
   $ sudo dpkg-reconfigure tzdata
   ```

   Select your region and city with the arrow keys and continue by pressing `Enter` each time.

## Security

### Users and groups

 * Provided that password authentication is enabled for the `root` user, the first thing you should do is change that phrase to some new and really strong password. To do that, open the terminal and run

   ```
   $ sudo passwd root
   ```

   which will ask you for the new `root` password. Type or paste the new password and then press `Enter`. Repeat this for the verification. If you access the `root` account remotely via SSH only, consider using an extremely long password, e.g. with 128 characters or more, and storing that password in a password manager on the remote machine.

 * If you can only login as `root` so far, add a new user other than `root` as the next step. Open the terminal and run

   ```
   $ adduser {my-username}
   ```

   where you replace `{my-username}` with the desired name for your account. Type or paste the desired password and confirm with `Enter`. Then repeat this for the verification. Again, if you're going to access this new account remotely via SSH only, consider using an extremely long password, e.g. with 128 characters or more, and storing that password in a password manager on the remote machine.

   When asked for additional user information, just leave the fields empty by pressing `Enter` each time. When asked whether all information is correct, type `Y` and press `Enter` to confirm.

   Add the new user to the `sudo` group by running

   ```
   $ gpasswd -a {my-username} sudo
   ```

   where you replace `{my-username}` with the new username again.

   From now on, you should always sign in as `{my-username}` instead of `root` and prefix commands on the terminal with `sudo` if you need more privileges.

 * Allow `su` command to be used by administrators only:

   ```
   $ sudo dpkg-statoverride --update --add root sudo 4750 /bin/su
   ```

### SSH

 * Do you have the SSH server `sshd` installed and enabled? In that case, the SSH configuration must be adjusted for enhanced security. Open a terminal and run

   ```
   $ sudo nano /etc/ssh/sshd_config
   ```

   Change the port that the server will listen on for SSH connections. You may want to use a port number between `1` and `1022` as `{my-ssh-port}`, one that has [*not* been officially registered with the IANA](https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers) yet:

   ```
   Port {my-ssh-port}
   ```

   This does not actually improve security but prevents masses of automated scripts and bots from making login attempts on the default SSH port. Remember to specify the changed port when connecting via SSH the next time.

   Limit the maximum duration of unauthenticated SSH sessions, i.e. the time before the server will disconnect if no successful login has been detected. To do so, change the value for `LoginGraceTime`, which is specified in seconds:

   ```
   LoginGraceTime 20
   ```

   Prevent *anybody* from logging in as `root` over SSH, now that you have a separate user in the `sudo` group. For this modification, edit the value of `PermitRootLogin`:

   ```
   PermitRootLogin no
   ```

   Somewhere below, but *before* any line that starts with `Match`, add the following settings by inserting new lines.

   Restrict SSH logins to a specified set of users that have strong authentication credentials set and can be trusted:

   ```
   AllowUsers {my-username}
   ```

   Replace `{my-username}` with the intended username. If you want to specify more than one user, separate the single usernames with spaces.

   Hide the version name of the distribution from the initial SSH handshake:

   ```
   DebianBanner no
   ```

   This does not actually improve security but prevents some minor information leakage in this place.

   Limit the number of authentication attempts per connection:

   ```
   MaxAuthTries 2
   ```

   Reduce the permitted number of multiplexed sessions per connection:

   ```
   MaxSessions 2
   ```

   Finally, press `Ctrl+X`, then type `Y` and press `Enter` to save and leave. Then restart SSH for the changes to take effect:

   ```
   $ sudo service ssh restart
   ```

### Updates

 * Install updates for packages:

   ```
   $ sudo apt-get update
   $ sudo apt-get upgrade
   $ sudo apt-get dist-upgrade
   $ sudo apt-get autoremove
   ```

   You should repeat this regularly.

### IPv6

 * Disable IPv6 support unless you need it already *and* have firewall rules set up for it:

   ```
   $ sudo nano /etc/sysctl.conf
   ```

   At the very end, insert the following three lines:

   ```
   net.ipv6.conf.all.disable_ipv6 = 1
   net.ipv6.conf.default.disable_ipv6 = 1
   net.ipv6.conf.lo.disable_ipv6 = 1
   ```

   Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

   Now reload all settings from `sysctl.conf` by running

   ```
   $ sudo sysctl -p
   ```

   and then verify that IPv6 has successfully been disabled by running

   ```
   $ cat /proc/sys/net/ipv6/conf/all/disable_ipv6
   ```

   which should return `1`.

### Firewall

 * Install UFW in case it's not already installed:

   ```
   $ sudo apt-get install ufw
   ```

 * Accept incoming SSH connections and throttle those connections:

   ```
   $ sudo ufw allow {my-ssh-port}/tcp
   $ sudo ufw limit {my-ssh-port}/tcp
   ```

   Remember to replace `{my-ssh-port}` with your port number from the SSH configuration again.

 * If you want to run a public web server, accept HTTP and HTTPS traffic as well:

   ```
   $ sudo ufw allow 80/tcp
   $ sudo ufw allow 443/tcp
   ```

 * Finally, activate the firewall:

   ```
   $ sudo ufw enable
   ```

   Type `y` and press `Enter` for the changes to take effect.
