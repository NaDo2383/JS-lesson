let a1 = 96, a2 = 108, a3 = 100, b1 = 88, b2 = 110, b3 = 110, a = (a1 + a2 + a3) / 3, b = (b1 + b2 + b3) / 3
console.log("A bagiin dundaj", a);
console.log("B bagiin dundaj", b);
if (a < 100 && b < 100) {
    console.log("yalagch bag baihgui")
} else {
    if (a > b) {
        console.log("A bag turuulsen");
    } else if (b > a) {
        console.log("B bag turuulsen");
    } else {
        console.log("2 bag tentssen");
    }
}