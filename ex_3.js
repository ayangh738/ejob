var fact = function (h) {
    var f = 1;
    for (var k = 1; k <= h; k++) {
        f = f * k;
    }
    return f;
};
console.log(fact(6));
