for (i = 1; i <= 100; i++) {
    var out = "";
    out += i % 3 === 0 ? "Fizz" : "";
    out += i % 5 === 0 ? "Buzz" : "";
    console.log(out || i);
}