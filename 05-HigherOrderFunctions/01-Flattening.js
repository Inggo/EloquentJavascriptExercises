var arrays = [[1, 2, 3], [4, 5], [6]];

function flatten(a, b) {
  return a.concat(b);
}

console.log(arrays.reduce(flatten));
// → [1, 2, 3, 4, 5, 6]