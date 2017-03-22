# MySQL

## Security

 * For each (web) application that needs access to a database, create a separate, application-specific user in MySQL, restricted to host `localhost` and protected by a strong password. That user should have minimal privileges, i.e. perhaps no administrative privileges at all but only table-specific read/write privileges, such as `SELECT`, `INSERT`, `UPDATE`, `DELETE` and `LOCK TABLES`.
 * Restrict access to your MySQL instance to `localhost`, i.e. don't expose it to the public. Your firewall may keep port `3306` closed as well.

 * Use an SSH tunnel (e.g. via the terminal on Linux or macOS or via PuTTy on Windows) from local port `3306` or `33060` (to avoid conflicts) to remote port `3306`.

   On Linux, for example, execute the following command in a terminal:

   ```
   $ ssh -p <SSH_PORT> -L <LOCAL_MYSQL_PORT>:localhost:<REMOTE_MYSQL_PORT> user@server
   # Example: ssh -p 22 -L 3306:localhost:3306 john@127.0.0.1
   ```

   This way, you can safely connect to your database on `localhost` on the specified port using *locally* installed tools such as "MySQL Workbench" or "phpMyAdmin".

 * Don't install web-based administration tools such as "phpMyAdmin" on the *remote* server.

## Installation

### On Ubuntu

 * Run the following commands to install the package:

   ```
   $ sudo apt-get update
   $ sudo apt-get install mysql-server
   ```

   Enter a strong password for the MySQL `root` user when asked during installation, e.g. one of 32 characters, and confirm it afterwards.

 * Run the following command to apply more secure defaults and to remove users and tables intended only for testing:

   ```
   $ sudo mysql_secure_installation
   ```

   Reply to all questions as you wish, but generally that should be `y` for every question, except when asked whether you want to change the root password again.

 * Now log in to MySQL as `root`:

   ```
   $ mysql -u root -p
   ```

   When asked, enter the password for `root` that you set up before. If the password was correct, there should now be a `mysql` prompt.

 * Type the following to list all user accounts currently available:

   ```
   SELECT User, Host, HEX(authentication_string), plugin FROM mysql.user;
   ```

   There shouldn't be any user left that has no name or no password. If there is, either remove that user or set a password.

 * Now initialize MySQL's data directory:

   ```
   $ sudo mysqld --initialize
   ```

   You may see the following response, however, which means that this task has already been taken care of for you:

   ```
   --initialize specified but the data directory has files in it. Aborting.
   ```

 * Finally, check if MySQL is running correctly:

   ```
   $ sudo service mysql status
   ```

   You should see the following response:

   ```
   Active: active (running)
   ```

## Backups

For the filenames of your backups, you may want to use `"$(date -u +"%Y%m%dT%H%M%SZ").sql"` on Linux or something similar on other platforms, which uses the current UTC time in ISO 8601 format, safe for filenames on most operating systems.

### Exporting data

```
$ mysqldump --add-locks --complete-insert --create-options --default-character-set=utf8mb4 --disable-keys --extended-insert --lock-tables --order-by-primary --password --protocol=tcp --quick --quote-names --set-charset --skip-add-drop-table --skip-comments --skip-triggers --tz-utc --host=127.0.0.1 --port=3306 --user="my-username" --result-file="my-output-filename.sql" "my-database-name"
```

 1. Make sure that your MySQL user has at least the `SELECT` and `LOCK TABLES` privileges on all tables that you want to export.
 1. Change the value of the `--user` option to the name of your MySQL user.
 1. Change the value of the `--result-file` option to the filename that you wish your output file to have.
 1. Change the value of the main argument to the name of the database that you want to export.
 1. Optionally, adjust the value of the `--host` and `--port` options in order to connect to another machine or on a different port.
 1. Optionally, if you wish to export the table *structure* only, add the `--no-data` option.
 1. Optionally, if you wish to export the table *data* only, add the `--no-create-info` option.
 1. Optionally, if you wish to export certain tables only, simply append the table names to the end of the command, separated by spaces.
 1. Execute the (modified) command, either on the database server or on a remote machine (e.g. using an SSH tunnel).
 1. After executing the command, you will be prompted for your MySQL user's database password.
 1. Find your export file in the current working directory, with the name specified using `--result-file`.

## Geographic coordinates

### Storing data

Save your geographic coordinates (latitude and longitude) in a `Point` column and add a `SPATIAL` index on that column. Insert values into that column as `Point(lat_dec, lon_dec)`, e.g. `Point(52.518611111111, 13.408333333333)`.

### Querying with a distance search

In order to get all rows with a `Point` in `point_column` that are within `$radius` kilometers of `($lat, $lon)`, use the following condition:

```
WHERE
    MBRContains(
        LineString(
            Point(
                $lat - $radius / 111.133,
                $lon - $radius / 111.320 / COS(RADIANS($lat))
            ),
            Point(
                $lat + $radius / 111.133,
                $lon + $radius / 111.320 / COS(RADIANS($lat))
            )
        ),
        point_column
    )
```

### Selecting distances

In order to calculate an approximation of the distance between the `Point` in `point_column` and `($lat, $lon)`, use the following expression:

```
SELECT
    SQRT(POW((X(point_column) - $lat) * 111.133, 2) + POW((Y(point_column) - $lon) * 111.320 * COS(RADIANS($lat)), 2)) AS distance
```
