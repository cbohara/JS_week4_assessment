/*

In the comments list the two cases in which a function can we called a Higher Order Function.
1. A higher order function returns a function as its output
2. A higher order function accepts a function as an argument

Then, create an example of a Higher Order Function and an associated callback.
*/

var numbers = [1, 4, 9];

// The map() method creates a new array with the results of calling a provided function on every element in this array.
var timesTwo = numbers.map(function(val) {
	return val * 2;
});

//numbers is still [1, 4, 9]
// timesTwo is [2, 8, 18]


