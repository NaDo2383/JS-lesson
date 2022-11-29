//task1 
let i = 4 > 3; //true
let ii = 4 < 3; //false
let iii = 4 >= 3; //true
let iv = 4 <= 3; //false
let v = 4 == 4; //true
let vi = 4 === 4; // true
let vii = 4 != 4; //false
let iix = 4 !== 4;  // false
let ix = 4 != "4";   //false
let x = 4 == "4"; // true 
let xi = 4 === "4"; // false

console.log("Task1");
console.log("i", i);
console.log("ii", ii);
console.log("iii", iii);
console.log("iv", iv);
console.log("v", v);
console.log("vi", vi);
console.log("vii", vii);
console.log("iix", iix);
console.log("ix", ix);
console.log("x", x);
console.log("xi", xi);

//task2
let one = 4 > 3 && 10 < 12; //true
let two = 4 > 3 && 10 > 12; //false
let three = 4 > 3 || 10 < 12; //true
let four = 4 > 3 || 10 > 12; // true
let five = !(4 > 3); //false
let six = !(4 < 3); //true
let eight = !(4 > 3 && 10 < 12); //false
let nine = !(4 > 3 && 10 > 12); // true
let ten = !(4 === "4"); //true

console.log("Task2");
console.log("one", one);
console.log("two", two);
console.log("three", three);
console.log("four", four);
console.log("five", five);
console.log("six", six);
console.log("eight", eight);
console.log("nine", nine);
console.log("ten", ten);

//task3


//task4 
let day = 7;
console.log("Task4");
console.log("day number is", day);
if (day == 1) {
    console.log("Today is monday");
} else if (day == 2) {
    console.log("Today is tuesday");
} else if (day == 3) {
    console.log("Today is wednesday");
} else if (day == 4) {
    console.log("Today is thursday");
} else if (day == 5) {
    console.log("Today is friday");
} else if (day == 6) {
    console.log("Today is saturday");
} else if (day == 7) {
    console.log("Today is sunday");
} else {
    console.log("wrong number");
}

//task5 

let hours = prompt("Enter hours psl!");
let hourRate = prompt("Enter hour rate psl!");
let salary = hours * hourRate;
console.log("Task5");
console.log("Your total salary is", salary);