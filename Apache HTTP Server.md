# Apache HTTP Server

## Security

### Main configuration

 * First, open the main security configuration. On Ubuntu, for example, the following command does that:

   ```
   $ sudo nano /etc/apache2/conf-available/security.conf
   ```

 * Change `ServerTokens` to `Prod` in order to reduce the server information broadcasted in HTTP headers, error documents, etc. from the more detailed form (e.g. `Apache/2.3.4 (Ubuntu)`) to a minimal form (`Apache`).

 * Change `ServerSignature` to `Off` in order to remove the server and hostname information from all sever-generated pages, e.g. error documents.

 * Prevent Cross-site tracing (XST) by disabling `HTTP TRACE`. To do so, make sure that `TraceEnable` is set to `Off`.

 * Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

   Restart Apache HTTP Server for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```

### SSL/TLS

 * First, open the SSL/TLS configuration. On Ubuntu, for example, the following command does that:

   ```
   $ sudo nano /etc/apache2/mods-available/ssl.conf
   ```

 * Disable support for vulnerable SSL versions. To do so, make sure that the line starting with `SSLProtocol` either says `SSLProtocol all -SSLv2 -SSLv3` or  `SSLProtocol all -SSLv3`.

 * Press `Ctrl+X` to leave. If you applied any changes, then type `Y` and press `Enter` to save.

   Restart Apache HTTP Server for the changes to take effect:

   ```
   $ sudo service apache2 restart
   ```
