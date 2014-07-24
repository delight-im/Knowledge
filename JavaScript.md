JavaScript
=================
** Table of Contents **
- [Style Guide](#style-guide)  
- [Performance Tips](#performance-tips)
- [Code Snippets](#code-snippets)

# Style Guide
## White Space/Padding
The forever debate, here is my solution, readable and clear, it reduces time spent (for me) processing the code in my head.

# Performance Tips
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

# Code Snippets
## Emulating Classes
Until ES 6 comes out this is the best we got.
```javascript
//encapsulation within a self invoking function
var Passenger = (function () {

  //this becomes the constructor
  function Passenger (name, flight) {
    this.name = name;
    this.flight = flight;
  }
  
  //add a few non-static methods
  Passenger.prototype.getFlight = function () {
    return this.flight;
  }
  
  Passenger.prototype.setFlight = function (flight) {
    if (this.flight !== flight) {
      this.flight = flight;
      return true;
    }
    return false;
  }

  //return our new object
  return Passenger;
})();


//creation:
var dude = new Passenger('dude', 1234);
dude.getFlight() //returns 1234
```
