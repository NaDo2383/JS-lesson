//task1

let n = 3;
console.log("task1");
console.log("n", n)
if (n == 1) {
    console.log("A");
} else if (n == 2) {
    console.log("B");
} else if (n == 3) {
    console.log("C");
} else if (n == 4) {
    console.log("D");
} else if (n == 5) {
    console.log("D");
} else {
    console.log("Wrong number");
}

//task2

let x = prompt("Enter month number!");
console.log("task2");
if (x == 1 || x == 3 || x == 5 || x == 7 || x == 8 || x == 10 || x == 12) {
    console.log("Days of this month is 31");
} else if (x == 4 || x == 6 || x == 9 || x == 11) {
    console.log("Days of this month is 30");
} else {
    console.log("Days of this month is 28 or 29");
}

//task3 
console.log("task3");
let a = prompt("Enter number above 0");
let b = a % 3, c = a % 7;
if (b == 0 || c == 7) {
    console.log("а тоо нь 7 эсвэл 3 н үржвэр мөн");
} else {
    console.log("а тоо нь 7 эсвэл 3 н үржвэр биш");
}

//task4 
console.log("task4");
let n1 = prompt("yamar negen toon utga oruulna uu!");

if (n1 >= 0) {
    console.log("tanii oruulsan too positive too bn ");
} else if (n1 < 0) {
    console.log("tanii oruulsan too negative too bn ");
} else {
    console.log("ta too oruulaagui bn");
}

//task5 
console.log("task5");
let h = prompt("ta biyeiin ondor oo m-r oruulna uu");
let w = prompt("ta biyeiin jingee kg-r oruulna uu");
let i = w / (h ** 2);
if (i <= 18) {
    console.log("ta jingiin dutagdaltai");
} else if (i > 18 && i <= 24) {
    console.log("ta eruul jintei");
} else if (i > 24 && i <= 29) {
    console.log("ta iluudel jintei")
} else {
    console.log("ta het targalaltai bn")
}

//task6 
let a6 = prompt("yamar negen too oruulna uu");
let b6 = a6 % 2
console.log("task6");
if (b6 == 1) {
    console.log("tanii oruulsan too sondgoi too bn");
} else if (b6 == 0) {
    console.log("tanii oruulsan too tegsh too bn");
} else {
    console.log("ta too oruulaagui bn");
}

//task7
console.log("task4");
let n7 = prompt("yamar negen toon utga oruulna uu!");

if (n7 >= 0) {
    console.log("tanii oruulsan too positive too bn ");
} else if (n7 < 0) {
    console.log("tanii oruulsan too negative too bn ");
} else {
    console.log("ta too oruulaagui bn");
}
