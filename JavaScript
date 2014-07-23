JavaScript
=================

## Better for-loop
Why is this a better for loop? `l` is in the scope of the for-loop and thus we don't need to continously refer to a variable (`arr.length`) that is outside scope. 
```javascript
for ( var i = 0, l = arr.length; i < l; i++ ) {
  //Do something...
}
```
If order of the loop doesn't matter, decrement the operator [Source](http://www.jslint.com/lint.html#inc).

```javascript
for ( var i = arr.length - 1; i > -1; i -= 1 ) {
  //Do something...
}
```
*Seeing from some performance results, this may not be the best way to do it. Update soon. *  

### The Optimized While loop
A simillar and sometimes better way of looping is by using the Optimized While Loop. [Source](http://jsperf.com/for-loop-vs-optimized-for-loop/17)  

```javascript
var i = arr.length;

while (i--) {
  //Do something...
}
```
