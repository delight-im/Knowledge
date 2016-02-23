# PHP

 * Check email addresses for validity with `filter_var('john@example.org', FILTER_VALIDATE_EMAIL)` which returns a `bool`.
 * Always use the prepared statements from `PDO` or `mysqli` on user input before putting it in database queries — or remember to escape *everything* manually with `mysql_real_escape_string(...)`, `intval(...)` or similar functions, *every single time*.
 * Popular PHP frameworks include Symfony, Laravel, Zend Framework and Yii. You should choose one of these — even if you like another one better — because there's more talent available for employers, more jobs for employees and generally better support by third parties.
 * "PHP has one data structure to rule them all. The *array* is a complex, flexible, master-of-none, hybrid data structure, combining the behaviour of a *list* and a *linked map*. But we use it for everything, because PHP is pragmatic: [...] An array gets the job done, even though you wouldn't study it in a Computer Science course." (Rudi Theunissen)
