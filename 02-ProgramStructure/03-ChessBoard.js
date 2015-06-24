var size = 8;
var grid = "";
for (var i = 0; i < size; i++) {
    for (var j = 0; j < size; j++) {
        grid += (i+j)%2 === 0 ? " " : "#";
    }
    grid += "\n";
}
console.log(grid);