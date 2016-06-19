# PHP

 * "PHP has one data structure to rule them all. The *array* is a complex, flexible, master-of-none, hybrid data structure, combining the behaviour of a *list* and a *linked map*. But we use it for everything, because PHP is pragmatic: [...] An array gets the job done, even though you wouldn't study it in a Computer Science course." (Rudi Theunissen)

## Security

 * If you don't know where to find your `php.ini` configuration file, create a PHP file with the content `<?php phpinfo();` and view it in your browser. The entry `Loaded Configuration File` should show you the correct file path, e.g. `/etc/php/7.0/apache2/php.ini`.

 * Open your PHP configuration by running the following command with the path to the `php.ini` that you found:

   ```
   $ sudo nano /etc/php/7.0/apache2/php.ini
   ```

 * Make sure that the following keys have the values listed next to them. In addition to that, the respective lines must not be commented out, of course. These directives represent reasonable default values for maximum security and compatibility:

   ```
   expose_php = Off
   allow_url_include = Off
   error_reporting = E_ALL
   display_errors = Off
   display_startup_errors = Off
   log_errors = On
   track_errors = Off
   html_errors = Off
   max_execution_time = 30
   max_input_time = 30
   post_max_size = 8M
   mail.add_x_header = Off
   short_open_tag = Off
   variables_order = "GPCS"
   request_order = "GP"
   session.use_cookies = 1
   session.use_only_cookies = 1
   session.cookie_httponly = 1
   session.use_trans_sid = 0
   session.auto_start = 0
   session.name = SESSID
   ```

 * If you don't need to open external files and URLs from your server, consider setting the value for the following directive as well:

   ```
   allow_url_fopen = Off
   ```

 * Another directive that should be modified is the `memory_limit` for each script. Try a lower value such as `32M` first and only increase the limit when needed. When your application stops working correctly due to the memory limit, double it until you have a sufficient value.

   ```
   memory_limit = 32M
   ```

 * If users don't need to be able to upload files in your application, set

   ```
   file_uploads = Off
   ```

   to disable file uploads completly for security reasons.

   Otherwise, if you need file upload capabilities, set the following values and relax the limits only when required:

   ```
   file_uploads = On
   max_file_uploads = 4
   upload_max_filesize = 2M
   ```

   You may also have to adjust your values for `max_execution_time`, `max_input_time` and `post_max_size` if you need large file uploads or heavy file processing.

 * Press `Ctrl+X`, then type `Y` and press `Enter` to save and leave.

 * Finally, restart the web server:

   ```
   $ sudo service apache2 restart
   ```
