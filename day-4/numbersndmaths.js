//numbers in js
let a = 10;
let b = 3.14;
let c = -5;
console.log(a, b, c);

//all types of number
let integer = 3;
let decimal = 3.14;
let negative = -4;
console.log(typeof (a, b, c));

//special numbers
let infinity = 10 / 0;
let minusinfinity = -10 / 0;
let nan = "abc" / 2;
console.log(typeof (infinity, minusinfinity, nan));

//Math is a built-in JavaScript object that provides mathematical constants and functions.
//Math object(Math) JavaScript provides built-in math functions using Math
//it will give the nearest integer

//Math.round()
console.log(Math.round(4.6));
console.log(Math.round(4.4));

//Math.floor()
//always round down to the nearest integer
console.log(Math.floor(4.6));
console.log(Math.floor(4.1));
console.log(Math.floor(-4.1));
//Math.ceil() 👉 Always rounds up to the nearest integer //top value
console.log(Math.ceil(4.1));
console.log(Math.ceil(-4.9));

//Math.trunc() removes the decimal part (no rounding)
console.log(Math.trunc(4.9));
console.log(Math.trunc(4.1));
console.log(Math.trunc(5.66));
console.log(Math.trunc(66.5));
console.log(Math.trunc(-4.8));

//Math.sqrt() returns the square root f a number
console.log(Math.sqrt(16));
console.log(Math.sqrt(25));
console.log(Math.sqrt(625));

//Math.pow 👉 Returns a number raised to a power // it calculates power
//Math.pow(base,power)
console.log(Math.pow(2, 3));
console.log(Math.pow(7, 7));
let area_of_square = Math.pow(4, 2);
console.log(area_of_square);
let side = 5;
let area = Math.pow(side, 2); // square area
console.log(area); // 25

//Math.abs()--------------->converts negative into positive
console.log(Math.abs(-10));
console.log(Math.abs(10));
console.log(Math.abs(-4.6));
console.log(Math.abs(-666.1));
let profit = -500;
console.log(Math.abs(profit));

//Math.random()--------->random number
//it gives the random number between 0 and 1
console.log(Math.random());

//Math.max(), Math.min to find largest and smallest numbers
console.log(Math.max(2, 5, 1));
console.log(Math.min(6, 8, 10));

//Number.isNaN()-----------> not a number check
console.log(Number.isNaN("abc" / 3));

//tofixed()--------->decimal control how many digits u want after decimal
let prize = 99.987689;
console.log(prize.toFixed(2));
//its output is string

//Math.floor(Math.random()*10)+1;
console.log(Math.floor(Math.random() * 10) + 1);
console.log(Math.floor(Math.random() * 6) + 1);
