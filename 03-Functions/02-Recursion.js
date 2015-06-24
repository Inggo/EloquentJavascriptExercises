var isEven = function(x) {
    // Transform negative values to positive to avoid infinite loop
    x = x > 0 ? x : -x;

    // Zero is even
    if (x === 0) return true;
    // One is odd
    if (x === 1) return false;
    // For any other number N, its evenness is same as N - 2
    return isEven(x - 2);
};

console.log(isEven(50));
// → true
console.log(isEven(75));
// → false
console.log(isEven(-1));
// → ??