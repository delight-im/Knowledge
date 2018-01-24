# Apache HTTP Server

## Security

 * First, open the server's main configuration. On Ubuntu, for example, the following command does that:

   ```
   $ sudo nano /etc/apache2/apache2.conf
   ```

   Now find the section that configures the `/var/www/` directory. That section will start with the opening tag `<Directory /var/www/>`.

   Make sure that there's only *one* line starting with `Options` and edit that line so that it reads as follows:

   ```
   Options -Indexes -FollowSymLinks +SymLinksIfOwnerMatch -Includes -ExecCGI
   ```

   This ensures that the server does not show full directory listings when a visitor to your website navigates to a folder without an index page. Further, the server does not follow certain symbolic links (to other users' files) that an attacker might try to create in your application's directory, while still allowing for the use of `mod_rewrite` with `RewriteRule`. Server-side includes using `.shtml` files or the like will be disabled. And finally, execution of CGI scripts using `mod_cgi` will be disabled (which you can leave out if you need CGI support).

   Next, define custom error documents or error messages globally by inserting the following lines somewhere in the configuration file, this new block of lines as a whole surrounded by blank lines:

   ```
   # Define custom error documents or messages
   ErrorDocument 400 "(400) Bad Request"
   ErrorDocument 401 "(401) Unauthorized"
   ErrorDocument 403 "(403) Forbidden"
   ErrorDocument 404 "(404) Not Found"
   ErrorDocument 410 "(410) Gone"
   ErrorDocument 500 "(500) Internal Server Error"
   ErrorDocument 503 "(503) Service Unavailable"
   ```

   You may change the message texts, use relative paths to documents on your server (which must start with a `/`), or even define external URLs.

   Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

   Restart Apache HTTP Server for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```

 * As a next step, open the server's dedicated security configuration. On Ubuntu, for example, the following command does that:

   ```
   $ sudo nano /etc/apache2/conf-available/security.conf
   ```

   Change `ServerTokens` to `Prod` in order to reduce the server information broadcasted in HTTP headers, error documents, etc. from the more detailed form (e.g. `Apache/2.3.4 (Ubuntu)`) to a minimal form (`Apache`).

   Change `ServerSignature` to `Off` in order to remove the server and hostname information from all sever-generated pages, e.g. error documents.

   Prevent Cross-site tracing (XST) by disabling `HTTP TRACE`. To do so, make sure that `TraceEnable` is set to `Off`.

   Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

   Restart Apache HTTP Server for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```

 * Finally, open the SSL/TLS configuration. On Ubuntu, for example, the following command does that:

   ```
   $ sudo nano /etc/apache2/mods-available/ssl.conf
   ```

   Disable support for vulnerable SSL versions. To do so, make sure that the line starting with `SSLProtocol` either says `SSLProtocol all -SSLv2 -SSLv3` or  `SSLProtocol all -SSLv3`.

   Press `Ctrl+X` to leave. If you applied any changes, then type `Y` and press `Enter` to save.

   Restart Apache HTTP Server for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```

## Installation

### On Ubuntu

 * Run the following command:

   ```
   $ sudo apt-get install apache2
   ```

 * Verify that you can see the "Apache2 Default Page" telling you that "It works!" when navigating to your server's public IP address using a web browser on another machine.

 * Enable usage of `.htaccess` files for additional configuration directives and better portability:

   ```
   $ sudo nano /etc/apache2/apache2.conf
   ```

   In the section that describes `<Directory /var/www/>`, change `AllowOverride None` to `AllowOverride All`.

   Somewhere else in the same file, make sure that `AccessFileName` is set to `.htaccess` as follows:

   ```
   AccessFileName .htaccess
   ```

   Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave. Then restart Apache for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```

 * [Create a dedicated user in Ubuntu](Ubuntu%20Server.md) that you will use for day-to-day SSH (and SFTP) access

## Setting up Virtual Hosts

 * As a first step, determine your initial set of individual sites that you want to serve. (You will still be able to add more sites later on.) Every domain, subdomain or other site that should get its own application directory will be a “virtual host”.

   **Important:** To that set of hosts, add another one with a name that comes first in alphabetical order, compared to all the other hosts. For example, use a (fictitious) subdomain `000` of your primary domain, e.g. `000.example.com`. That additional host will serve as a default host and will automatically catch any undefined or invalid host requested by users (or attackers). Moreover, it will protect against HTTP header (`Host` request header) injection. If you set up SSL/TLS for any other host later, you must set up SSL/TLS for this default host as well.

 * For each of the individual sites that you want to serve, create a dedicated folder below the `/var/www/` directory:

   ```
   $ sudo mkdir -p /var/www/{my-domain}/public
   $ sudo chown -R {sftp-user}:{sftp-user} /var/www/{my-domain}
   $ sudo chmod -R 755 /var/www/{my-domain}
   ```

   Replace `{my-domain}` with the domain name of each site, e.g. `example.com`, and `{sftp-user}` with the name of your SFTP user (or any other regular user) that should own the folder.

 * Perhaps add some demo pages by creating simple HTML files in each `public` directory.

 * Create the site-specific configuration files:

   ```
   $ sudo cp /etc/apache2/sites-available/000-default.conf /etc/apache2/sites-available/{my-domain}.conf
   $ sudo nano /etc/apache2/sites-available/{my-domain}.conf
   ```

   Change `ServerAdmin` to a proper email address that you can receive messages at. That mailbox may be hosted *anywhere*, e.g. also with a third-party provider.

   Change `DocumentRoot` so that it points to the `public` directory that you created for the particular site before.

   Add a new line saying `ServerName {my-domain}`. This defines the site's primary domain name. Based on this domain name, this site will be selected.

   Add a new line saying `ServerAlias www.{my-domain}` or give any other *secondary* domain names that should point to the same site.

   The file may now look like this:

   ```
   <VirtualHost *:80>
       ServerName example.com
       ServerAlias www.example.com
       ServerAdmin admin@example.com
       DocumentRoot /var/www/example.com/public

       ErrorLog ${APACHE_LOG_DIR}/error.log
       CustomLog ${APACHE_LOG_DIR}/access.log combined
   </VirtualHost>
   ```

   Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

 * Finally, activate the new site (and disable Apache’s template file):

   ```
   $ sudo a2ensite {my-domain}.conf
   $ sudo a2dissite 000-default.conf
   $ sudo service apache2 reload
   ```

 * You may now use the `hosts` file on your personal computer or development machine to test the setup with a *temporary* domain entry.

 * In order to publish the site, point the specified domain `{my-domain}` to the server by updating its DNS configuration.

 * Whenever you make changes to these `*.conf` files later, you have to refresh the server again via the following command:

   ```
   $ sudo service apache2 reload
   ```
