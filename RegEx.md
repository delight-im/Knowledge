# RegEx

 * Instead of `.*` (greedy), you should almost always use `.*?` (lazy) to reduce the amount of backtracking needed.
 * If you want to escape a string for use as a literal pattern, just wrap it inside `\Q` and `\E`. In Java, you can call `Pattern.quote(...)`.
 * In most languages, look-behinds and look-aheads must have an obvious length, i.e. `+` and `*` are off-limits.
 * Most metacharacters (e.g. `.` and `*`) lose their special meaning when inside a character class. Thus you don't have to escape them anymore. The only characters you have to escape there are `[`, `]`, `-` and `^`. Even better, you don't have to escape `-` when at the very beginning or end of the character class, and `^` must only be escaped when it comes first in the class.

## Lookarounds

 * Lookarounds are atomic groups, i.e. they are non-capturing.
 * Wrapped in parentheses and starting with a question mark, lookarounds have the basic form `(?...)` that is not complete yet.
 * Lookaheads add a `=` if they "want" a certain group to follow (positive) or a `!` if they "don't want" a certain group to follow.
 * Lookbehinds work like lookaheads, but they add an additional `<` after the question mark and let you check what **precedes**, not follows.
 * The positive lookahead `a(?=b)` does only match `a` characters that are followed by a `b`.
 * The negative lookahead `a(?!b)` matches all `a` characters that are **not** followed by a `b`.
 * The positive lookbehind `(?<=b)a` does only match `a` characters that are preceded by a `b`.
 * The negative lookbehind `(?<!b)a` matches all `a` characters that are **not** preceded by a `b`.

## JavaScript

 * If you want to match all characters including newlines, you have to use the negative empty selection (`[^]`) instead of the dot (`.`).
 * JavaScript doesn't know lookbehinds, neither positive `(?<=)` nor negative `(?<!)`.
