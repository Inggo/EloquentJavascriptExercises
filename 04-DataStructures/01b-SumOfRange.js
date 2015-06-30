// Uses iteration; slower on short ranges but faster on large ranges
var range = function(start, end, step) {
  // Set step if it is not defined
  if (typeof step === "undefined") {
    step = start < end ? 1 : -1;
  }
  var arr = [];
  for (var i = start; step > 0 ? i <= end : i >= end; i += step) {
    arr.push(i);
  }
  return arr;
};

var sum = function(arr) {
  var result = 0;
  for (var i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
};

console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(sum(range(1, 10)));
// → 55
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(range(5, 2, -2));
// → [5, 3]