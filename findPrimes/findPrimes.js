/*
findPrimes takes a collection of numbers and returns only the numbers that are Prime.

Import (copy) your loopThrough and filterBy function to this file and use them to create the function 'findPrimes'.

*/
// loopThrough will loop through a collection and invoke a callback on each element
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

// test array
var somePrimes = [7, 22, 9, 13, 71, 39];

// prime numbers must be natural values greater than 1 that have no positive divisors other than 1 and itself
// predicate test will return true if number is prime, false if number is not prime
var isPrime = function(val){
    if(val < 2){
    	return false;
    } 
    for (var i = 2; i < val; i++) {
    	if(val % i === 0){
    		return false;   
    	}
    }
    return true;
};

// findPrimes takes a collection of numbers and returns only the numbers that are prime
var findPrimes = function(collection){
	// invoke filterBy function to determine if number in collection is prime
	// will return result array from filterBy to findPrimes
	return filterBy(collection, isPrime);
};

var onlyPrimes = findPrimes(somePrimes);
console.log(onlyPrimes);
// [7, 13, 71]

// largest value loops through an array and returns the largest value
var largestValue = function(collection){
	// initialize value to use as comparison against each array value
	var max = 0;
	// invoke loopThrough function to loop through the array. the callback function will determine the largest value in the array.
	loopThrough(collection, function(val){
		// compare each value in array to max value
		if(val > max){
			// if value in array is greater than the max value, replace max value with array value
			max = val;
		}
	});	
	// return max value in the array
	return max;
};

// largestPrime takes an array of numbers and returns the largest prime number.
var largestPrime = function(collection){
	// invoke findPrimes function to filter through array and return only the numbers that are prime
	var primeArray = findPrimes(collection);
	// largestValue function will loop through the prime array to determine the largest value within the array
	return largestValue(primeArray);
};

var maxPrime = largestPrime(somePrimes);
console.log(maxPrime);
// 71

