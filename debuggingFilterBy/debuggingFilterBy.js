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


// Your comments here:

function filterBy(collection, predicate){
	var result = [];
	
	loopThrough(colection, predicate);

	return 
};




function loopThrough(collection, callback){
	for (var i = 0; i < collection.length; i++){
		callback();
	};	
};


/*

Extra Credit:

Expand filterBy's functionality to work with arrays AND objects.

Build a test case of your own to make sure it works.

*/

