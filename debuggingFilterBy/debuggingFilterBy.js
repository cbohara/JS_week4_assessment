/*

Below I have built a filterBy function that uses loopThrough instead of a for-loop. Unfortunately it is broken!

filterBy takes a collection, and a predicate and returns an array filled with the values that pass the predicate.

Debug my filterBy function so that it works with these two inputs:

var isEven = function(val){
	return val % 2 === 0;
};

var nums = [1, 2, 3, 4, 5];

filterBy(nums, isEven) --> [1, 3];
*/

var isEven = function(val){
	return val % 2 === 0;
};

var nums = [1, 2, 3, 4, 5];

// Build a test case of your own to make sure filterBy can successfully filter through an object as well as an array
var car1 = {
	make: "Subaru",
	model: "Legacy",
	year: 2003
};

var car2 = {
	make: "Honda",
	model: "Civic",
	year: 2015
};

var isSubaru = function(val){
	return val === "Subaru";
};

// Your comments here:

// loopThrough will loop through a collection and invoke a callback on each element. this function needs to exist above filterBy in our code. otherwise the compiler will not be able to invoke filterBy.
function loopThrough(collection, callback){
	// check and execute if collection is an array
	if(Array.isArray(collection)){
		// loop through array
		for (var i = 0; i < collection.length; i++){
			// invoke callback on each element
			callback(collection[i]);
		}
	}
	// otherwise proceed if collection is an object
	else {
		// loop through object
		for(var key in collection){
			// invoke callback on each element
			callback(collection[key]);
		}
	}	
};

// filterBy takes a collection, and a predicate and returns an array filled with the values that pass the predicate
function filterBy(collection, predicate){
	// create empty array to hold values that pass the predicate 
	var result = [];
	// invoke loopThrough and only pass values that pass the predicate into the result array
	loopThrough(collection, function(val) {
		// if value is true, push into result array
		if(predicate(val)) {
			result.push(val);
		}
	});
	// return result array
	return result;
};

filterBy(nums, isEven);
// [1, 3];

// if the car object passes the predicate, testing if the car is a Subaru, then the car object will be pushed into the result array
filterBy(car1, isSubaru);

// if the car object does not pass the predicate, the result array will be empty
filterBy(car2, isSubaru);

/*

Extra Credit:

Expand filterBy's functionality to work with arrays AND objects.

Build a test case of your own to make sure it works.

*/

