# PHP

 * Check email addresses for validity with `filter_var('john@example.org', FILTER_VALIDATE_EMAIL)` which returns a boolean
 * Always use `mysql_real_escape_string(...)` or `intval(...)` on user input in database queries — or the prepared statements of `PDO` and `mysqli`.
