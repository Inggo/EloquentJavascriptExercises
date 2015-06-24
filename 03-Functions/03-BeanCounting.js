var countBs = function(str) {
  return countChar(str, "B");
};

var countChar = function(str, chr) {
  var count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) === chr) count++;
  }
  return count;
};

console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4