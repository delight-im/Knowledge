# JavaScript

 * Initialize all variables at the beginning of a function, and list them in alphabetical order. Use only one `var` keyword and give an extra line to each variable.
 * Always use `===` and `!==` instead of `==` and `!=`.
 * When using `for ... in` loops, always filter the contents with `hasOwnProperty` first.
 * For anonymous functions, add a space between the `function` keyword and the parentheses, e.g. `this.someFunc = function () { ... };`
 * Use `unshift(...)` to *add* an element to the beginning of an array. Use `shift()` to *remove and return* the first element from there.
 * Use `push(...)` to *add* an element to the end of an array. Use `pop()` to *remove and return* the first element from there.
 * There are (at least) two ways to cause a redirect: If you want to simulate someone clicking a link, use `window.location.href = "..."`. If you want to simulate a HTTP redirect, use `window.location.replace("...")`.
 * Any `Number` is internally stored as a 64-bit floating point (double), according to the IEEE-754 standard.
 * The range for integers is `-9007199254740991` (`-(2^53 - 1)`) to `9007199254740991` (`2^53 - 1`), or `Number.MIN_SAFE_INTEGER` to `Number.MAX_SAFE_INTEGER.`
 * The range for numbers in general is approximately `5e-324` to `1.79E+308`, or `Number.MIN_VALUE` to `Number.MAX_VALUE`.

# "Static classes" in JavaScript for namespaced utilities

If you want to create a "static class" in JavaScript, so that you can call functions like `MyClass.format(param)`, proceed as follows:

```
// create an object for our namespace only if there is none yet
if (typeof MyClass !== "object") {
	MyClass = {};
}
// add the methods in a closure to prevent the creation of global variables
(function () {
	// create the function on our object only if there is none yet
	if (typeof MyClass.format !== "function") {
		MyClass.format = function (param) {
			// do something
		};
	}
})();
```
