# Software development

 * Use a version control system like Git, Mercurial or Subversion to manage your source code, track changes and simplify collaboration.
 * When using a version control system, make a single commit for every bug fix or added feature. Do not hoard changes and commit them in batch.
 * Use an IDE that suits your programming language, e.g. IntelliJ IDEA (Java), PhpStorm (PHP), Eclipse (Android) or Android Studio (Android).
 * Commercial programming is solving problems you didn't choose, working on existing code you didn't write — in less time than you would like.
 * Write short functions, with no more than 30-40 statements, if possible. Split up complex functions into smaller ones.
 * Never write a `switch` statement without a `default` branch.
 * Minimize the amount of state used in your programs. Stateless programs are the easiest to debug.
 * "In fact, I'm a huge proponent of designing your code around the data, rather than the other way around, and I think it's one of the reasons git has been fairly successful [...]. I will, in fact, claim that the difference between a bad programmer and a good one is whether he considers his code or his data structures more important. Bad programmers worry about the code. Good programmers worry about data structures and their relationships." (Linus Torvalds / 2006-06-27 / Message to the Git mailing list)
 * "Show me your flowchart and conceal your tables, and I shall continue to be mystified. Show me your tables, and I won't usually need your flowchart; it'll be obvious." (Fred Brooks / 1995 / The Mythical Man-Month / Chapter 9)
 * Readability is the most important characteristic of a codebase.
 * Beginners should start with a scripting languages as their first programming language, e.g. Python or JavaScript. These have a higher level of abstraction and let the learner understand the bigger picture instead of having to worry about all the details right from the start.
 * "Fools ignore complexity. Pragmatists suffer it. Some can avoid it. Geniuses remove it." (Alan J. Perlis)
 * "Treat new technology with healthy scepticism. Be wary about pushing that cool new [library] into production. Wait until something is commonly used, has lots of bugfixes and is generally proven beyond doubt to be mature." (Jimmy Breck-McKye)
 * "Prefer dedicated libraries to monolithic frameworks. When you choose a framework, you make a large, long term committment. You sign up to learn about the framework's various inner workings and strange behaviours. You also sign up to a period of ineffectiveness whilst you're getting to grips with things. If the framework turns out to be the wrong bet, you lose a lot. But if you pick and choose from libraries, you can afford to replace one part of your front end stack whilst retaining the rest." (Jimmy Breck-McKye)
 * GPS is described to have an accuracy of less than 100m, but usually it is even between 2m and 30m.
 * You should let your method names start with a verb in most cases. Examples for arbitrary return types (or none at all) are: `getXxx()`, `setXxx()`, `createXxx()`, `calculateXxx()`, `changeXxx()`, `deleteXxx()`, `removeXxx()`, `startXxx()`, `stopXxx()`, `retrieveXxx()`, `convertXxx()` or `cancelXxx()`. Examples for methods returning `boolean` are `isXxx()` and `hasXxx`. Notable exceptions are conversions, where you'd often want to use `toXxx()` or `XxxToYyy()`, and methods where nouns are commonly used, such as `length()` or `size()`.
 * Many open source projects that are part of the foundation of modern operating systems and the internet are maintained by a single developer or by a very small team and receive only few donations. Such projects include GnuPG by Werner Koch, the Bash shell by Chet Ramey, NTP by Harlan Stenn and OpenSSL.

## Charsets and Encodings

 * Unicode is a character set (charset) and has lots of possible encodings, such as UTF-8, UTF-16 and UTF-32. In practice, the two terms are used interchangeably.
 * The Basic Multilingual Plane (BMP) contains characters for almost all modern languages. It comprises the first 65,536 Unicode code points, i.e. `0` to `0xFFFF`. Other symbols, e.g. the popular emoji, are not part of the BMP.
 * UTF-8 is a variable-width encoding that uses 1 to 4 bytes to represent a Unicode character. Its great strength is backwards-compatibility to ASCII. Since UTF-8 is equivalent to ASCII in the first 128 code points uses only 1 byte for those symbols, every ASCII file is also a valid UTF-8 file. String manipulations are more difficult because every symbol might be represented by either 1, 2, 3 or 4 bytes. UTF-8 is the predominant encoding for the World Wide Web and Internet protocols.
 * UTF-16 is a variable-width encoding that uses either 2 or 4 bytes for all Unicode symbols. It's incompatible with ASCII but optimized for the BMP, where it's fixed-width and uses 2 bytes for every character. For all characters outside of the BMP, UTF-16 uses a pair of 2-byte codes. UTF-16 is the predominant encoding for internal representations of characters, such as in Windows, Java, JavaScript etc.
 * UTF-32 is a fixed-width encoding that uses exactly 4 bytes to represent a Unicode symbol. This makes it bloated but fast to operate on. It's incompatible with ASCII.
 * UCS-2 is the predecessor to UTF-16 and provides a fixed-width encoding for the BMP symbols in a 16-bit code unit. For the BMP, i.e. `0` to `0xFFFF`, it is equivalent to UTF-16.

## Effort estimations

 * Effort estimations in software development are really hard and usually turn out to be over-optimistic.
 * You can make good estimations only if you can split up your project into small tasks that are known and have been done many times before, i.e. standard tasks. But such tasks are rare in software development because you can re-use and automate things -- and thus you only have those standard tasks if you've failed to re-use and automate.
 * In most cases, you have noisy input, high variability in individual tasks and a high degree of uncertainty.
 * You need effort estimations whenever you want to communicate with other departments, clients or other companies.
 * Read "Software Estimation: Demystifying the Black Art" by Steve McConnell.
 * People are not good at absolute measurements but they're good at comparing things.
 * You have to consider design, implementation and testing.
 * "Work expands so as to fill the time available for its completion." (Parkinson's law)

## Reliability

 * 100% uptime or availability does not exist.
 * You'll usually want to promise as many "9s" of uptime as possible, e.g. the "five 9s" (99.999%).

## Data representation

### Plain text

 * The content is a pure sequence of character codes and thus readable as textual material without much processing.
 * Plain text represents characters only, not their appearance.
 * Represented through an encoding, e.g. ASCII or UTF-8.
 * Largely portable and immune to computer architecture incompatibilities.
 * Content can be read and modified with countless generic text editors and utilities.

#### Line breaks

 * Also called "newlines", "line endings" or "end of line" ("EOL").
 * Encoded as a control character or a sequence thereof.
 * Control characters vary across operating systems. This means that documents must be converted between newline representations for exchange.
 * By analogy with old typewriters and printers, the two concepts "line feed" ("LF") and "carriage return" ("CR") have been established.
 * A line feed advances the paper to the next line.
 * A carriage return positions the device at the beginning of the line by sliding the carriage.
 * Unix and Unix-like systems encode newlines as LF (`\n`).
 * Old versions of Mac OS encode newlines as CR (`\r`).
 * Microsoft Windows encodes newlines as CR+LF (`\r\n`).

### Formatted text

 * Formatted text is also called "rich text".
 * Formatted text does not only contain the actual text information but also styling information such as colors, font sizes, tables, hyperlinks, etc.
 * In order to read formatted text, you need special software. Usually, this is the program that you wrote the text with. But it can be any other compatible software as well.
 * Software that writes formatted text may save the styling information either as textual markup (e.g. Markdown, RTF) or as binary data (e.g. PDF, Microsoft Word).

### Binary

 * Parts of the content must be interpreted as binary objects, i.e. they must be decoded to be readable. This is common for photos, videos, music, etc.
