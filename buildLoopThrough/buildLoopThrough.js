var arr = [1, 2, 3, 4, 5];
var print = function(val){
	console.log(val);
};

// Build a loopthrough function that will loop through an array and invoke a callback on each element
var loopThrough = function(arr, callback){
	// loop through array
	for(var i = 0; i < arr.length; i++){
		// invoke callback on each element
		callback(arr[i]);
	}
};

loopThrough(arr, print);
//1
//2
//3
//4
//5