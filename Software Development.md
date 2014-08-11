# Software Development

 * Use a version control system like Git, Mercurial or Subversion to manage your source code, track changes and simplify collaboration.
 * When using a version control system, make a single commit for every bug fix or added feature. Do not hoard changes and commit them in batch.
 * Use an IDE that suits your programming language, e.g. IntelliJ IDEA (Java), PhpStorm (PHP), Eclipse (Android) or Android Studio (Android).
 * Commercial programming is solving problems you didn't choose, working on existing code you didn't write — in less time than you would like.
 * Write short functions, with no more than 30-40 statements, if possible. Split up complex functions into smaller ones.
 * Never write a `switch` statement without a `default` branch.
 * Minimize the amount of state used in your programs. Stateless programs are the easiest to debug.

## Charsets and Encodings

 * Unicode is a character set (charset) and has lots of possible encodings, such as UTF-8, UTF-16 and UTF-32. In practice, the two terms are used interchangeably.
 * The Basic Multilingual Plane (BMP) contains characters for almost all modern languages. It comprises the first 65,536 Unicode code points, i.e. `0` to `0xFFFF`. Other symbols, e.g. the popular emoji, are not part of the BMP.
 * UTF-8 is a variable-width encoding that uses 1 to 4 bytes to represent a Unicode character. Its great strength is backwards-compatibility to ASCII. Since UTF-8 is equivalent to ASCII in the first 128 code points uses only 1 byte for those symbols, every ASCII file is also a valid UTF-8 file. String manipulations are more difficult because every symbol might be represented by either 1, 2, 3 or 4 bytes. UTF-8 is the predominant encoding for the World Wide Web and Internet protocols.
 * UTF-16 is a variable-width encoding that uses either 2 or 4 bytes for all Unicode symbols. It's incompatible with ASCII but optimized for the BMP, where it's fixed-width and uses 2 bytes for every character. For all characters outside of the BMP, UTF-16 uses a pair of 2-byte codes. UTF-16 is the predominant encoding for internal representations of characters, such as in Windows, Java, JavaScript etc.
 * UTF-32 is a fixed-width encoding that uses exactly 4 bytes to represent a Unicode symbol. This makes it bloated but fast to operate on. It's incompatible with ASCII.
 * UCS-2 is the predecessor to UTF-16 and provides a fixed-width encoding for the BMP symbols in a 16-bit code unit. For the BMP, i.e. `0` to `0xFFFF`, it is equivalent to UTF-16.
