let n = prompt("duriin 3 orontoi too oruulna uu"), a, b, c, niilber;
a = Math.floor(n / 100);
b = Math.floor((n / 10) % 10);
c = Math.floor(n % 10);
niilber = a + b + c;
n = Math.round(Number(n));
if (Number.isInteger(n) == true) {
    if (n < 100 || n > 999) {
        console.log("tanii oruulsan too 3 orontoi too bish baina");
    } else {
        console.log("oruulsan tooni tsipruudiin niilber", niilber);
    }
} else {
    console.log("Ta too oruulaagui bn");
}

