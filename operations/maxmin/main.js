let a, b, c, max, min;
a = 6, b = 6, c = 7;
if (a >= b) {
    if (a > c) {
        max = a;
    } else {
        max = c;
    }
} else {
    if (b > c) {
        max = b;
    } else {
        max = c;
    }
}
if (a <= b) {
    if (a < c) {
        min = a;
    } else {
        min = c;
    }
} else {
    if (b < c) {
        min = b;
    } else {
        min = c;
    }
}
console.log("ogogdson toonuudin hamgiin ih utga n", max);
console.log("ogogdson toonuudin hamgiin baga utga n", min);
