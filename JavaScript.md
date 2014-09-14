# JavaScript

 * Initialize all variables at the beginning of a function, and list them in alphabetical order. Use only one `var` keyword and give an extra line to each variable.
 * Always use `===` and `!==` instead of `==` and `!=`.
 * When using `for ... in` loops, always filter the contents with `hasOwnProperty` first.
 * For anonymous functions, add a space between the `function` keyword and the parentheses, e.g. `this.someFunc = function () { ... };`

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
