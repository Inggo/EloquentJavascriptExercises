var reverseArray = function(oldArray) {
  // Create new array
  var newArray = [];
  // While there are elements on the old array,
  while(oldArray.length)
    // pop and unshift to the new array
    newArray.unshift(oldArray.pop());
  // Return the new array
  return newArray();
};

var reverseArrayInPlace = function(originalArray) {
  for(i = 0; i < originalArray.length / 2; i++) {
    // Assign current element to temporary variable
    var tmpElem = originalArray[i];
    // Get the current end position from the end of the array
    var endPos = originalArray.length - (i + 1);
    // Swap the current start position 
    originalArray[i] = originalArray[endPos];
    // Put the temporary element's value to the last element position
    originalArray[endPos] = tmpElem;
  }
};

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]