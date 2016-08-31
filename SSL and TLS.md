# SSL and TLS

## Automatic and free certificates via "Let's Encrypt"

### Ubuntu

 * Download the "Let's Encrypt" client:

   ```
   $ sudo apt-get install python-letsencrypt-apache
   ```

 * Get a new SSL certificate by running

   ```
   $ sudo letsencrypt --apache -d example.com -d www.example.com
   ```

   where you replace `example.com` with your domain name and optionally add even more subdomains after `-d` options.

 * Check if your site is available via HTTPS now and perhaps also [check your configuration using an online tool](https://www.ssllabs.com/ssltest/)

 * [Set up a cron job](https://github.com/delight-im/Knowledge/blob/master/Ubuntu.md) in the `root` user's crontab to attempt automatic renewal of the certificate once a day (at `04:15` or any other time you prefer):

   ```
   15 4 * * * export PATH=/usr/sbin:/usr/bin:/sbin:/bin && letsencrypt renew > /path/to/log-file.log 2>&1
   ```
