var arrayToList = function(arrayToConvert) {
    // Return an object
    return arrayToConvert.length ? 
    {
        // with value equal to the front element of the list
        value: arrayToConvert.shift(),
        // and the rest of the elements as the rest of the list
        rest: arrayToList(arrayToConvert)
    } : 
    // or null if it's an empty array
    null;
};

var listToArray = function(listToConvert) {
    // Return an array
    return listToConvert !== null ?
        // with the first element equal to the value of the list item,
        // concatinating with an array conversion of the rest of the list
        [listToConvert.value].concat(listToArray(listToConvert.rest)) :
        // or an empty one if null
        [];
};

var prepend = function(value, list) {
    // Return a list
    return {
        // with the value equal to the given value
        value: value,
        // and the rest of the list equal to the given list
        rest: list
    };
};

var nth = function(list, n) {
    // If we're at the front
    return n <= 0 ?
        // return the value.
        list.value :
        // Otherwise, go check the rest and go deeper
        nth(list.rest, n - 1);
};

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20