var deepEqual = function(obj1, obj2) {
	// Return false if they are of different types
    if (typeof obj1 !== typeof obj2)
    	return false;

    // Return their equality value if they are not an object
    if (typeof obj1 !== "object")
    	return obj1 === obj2;

    // If the object is null, return true if the other object is also null
    if (obj1 === null)
    	return obj2 === null;

    // Iterate through properties
	for (prop in obj1) {
		// go recursively if the property is an object
		if (typeof obj1[prop] === "object" && !deepEqual(obj1[prop], obj2[prop])) return false;
		// otherwise, return false in any mismatch
		else if (obj1[prop] !== obj2[prop]) return false;
	}

	// If it got here, they are equal objects
	return true;
};

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true