let a = 33, b = 33, c = 10, d = 112, min;
if (a <= b) {
    if (a <= c) {
        if (a <= d) {
            min = a;
        } else {
            min = d;
        }
    } else {
        if (c <= d) {
            min = c;
        } else {
            min = d;
        }
    }
} else {
    if (b <= c) {
        if (b <= d) {
            min = b;
        } else {
            min = d;
        }
    } else {
        if (c <= d) {
            min = c;
        } else {
            min = d;
        }
    }
}
console.log("Ogodson 4 too bol", a, b, c, d);
console.log("Ogogdson tonuudin hamgiin baga utga bol", min);