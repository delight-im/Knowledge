# Unix

 * `fork()` is a system call that is used for process creation. The calling process first creates a copy of itself (i.e. the child process) which may be followed by a call to `exec()`.
 * `fork()` may fail and returns `-1` in that case.
 * When calling `kill()`, first check if your `pid` is valid. If you treat `-1` as a valid `pid`, you're going to kill *all* processes "for which the calling process has permission to send signals, except for process 1 (init)".

## Bash

 * If you see the error message `/bin/sh^M: bad interpreter`, your file has DOS line endings (CRLF) and must thus be converted to Unix line endings (LF) first.
