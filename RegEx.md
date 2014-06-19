# RegEx

 * Instead of `.*` (greedy), you should almost always use `.*?` (lazy) to reduce the amount of backtracking needed.
 * If you want to escape a string for use as a literal pattern, just wrap it inside `\Q` and `\E`. In Java, you can call `Pattern.quote(...)`.
 * In most languages, look-behinds and look-aheads must have an obvious length, i.e. `+` and `*` are off-limits.
 * Most metacharacters (e.g. `.` and `*`) lose their special meaning when inside a character class. Thus you don't have to escape them anymore. The only characters you have to escape there are `[`, `]`, `-` and `^`. Even better, you don't have to escape `-` when at the very beginning or end of the character class, and `^` must only be escaped when it comes first in the class.
