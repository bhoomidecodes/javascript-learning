//map ---> map creates a new array by applying a function to every element of an existing array
// it does not change the original array
//it is used when yu want to change or transform every item in an array
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled);
console.log(numbers);

let array = [1, 2, 3, 4, 5, 6];
let square = array.map(function (num) {
  return num * num;
});
console.log(square);

let num1 = [4, 5, 6, 7, 8, 9];
let num2 = num1.map(function (num) {
  return num * 2;
});
console.log(num2);

// map function for modification of array of strings
let names = ["alice", "bob", "charlie"];
let upperNames = names.map(function (item) {
  return item.toUpperCase();
});
console.log(upperNames);

//map function for modify the array of object values
let users = [
  { name: "alice", age: 20 },
  { name: "bob", age: 25 },
];
let users2 = users.map(function (item) {
  return item;
});
console.log(users2);

// map functions for calculating arrays
let prices1 = [100, 200, 300];
let prizesWithTax = prices1.map(function (item) {
  return item * 1.18;
});
console.log(prizesWithTax);

//arrow function
let prices = [100, 200, 300];
let pricesWithTax = prices.map((item) => {
  return item * 1.18;
});
console.log(pricesWithTax);

// filter-----> it is an array method used t select some elements from an array remove unwanted element
//  nd creates new array based on condition it does not chnage original array
//“The filter() method is used to keep or remove elements based on a condition.
// It returns a new array without modifying the original array.”

// que-1 filter numbers greater than 10
let num3 = [3, 8, 12, 5, 20];
let num4 = num3.filter(function (num) {
  return num > 10;
});
console.log(num4);

//que-2 filter odd numbers

let mixednum = [3, 6, 7, 2, 1, 5, 10];
let oddno = mixednum.filter(function (item) {
  return item % 2 != 0;
});
console.log(oddno);

//que-3 filter users whose age is 18 or above ---> array of objects
let employee = [
  { name: "aman", age: 16 },
  { name: "raj", age: 22 },
  { name: "neha", age: 19 },
  { name: "riya", age: 45 },
];
let employee1 = employee.filter(function (elements) {
  return elements.age > 20;
});
console.log(employee1);

//((value) => value)----> it keeps only truthy values
let arr = [0, 1, 2, "", "hello", null, undefined, 5];
let result = arr.filter((value) => value);
console.log(result);

console.log(typeof null);

//reduce-----> reduce()is an array method 🔥 used to combine all elements of an arrayinto one single value
// the value can be a string,an object a num (sum,product) even another array
//it is called reduce because it reduces an array into single values
//syntax---->array.reduce(function(accumlator,curentValue)){
// return updatedAccumulator;
// },initial value);

// accumlator stores the result , current value means current element of array ,
//  initial value meanas starting value

// que-1 sum of numbers -->
let numbers4 = [1, 2, 3, 4, 5];
let sum = numbers.reduce(function (acc, curr) {
  return acc + curr;
}, 0);
console.log(sum);
// arrow function verssion
let sum1 = numbers.reduce((acc, curr) => acc + curr, 0);

// multiply all Numbers
let number = [4, 5, 6, 7, 8, 9];
let numbe_r = number.reduce(function (acc, curr) {
  return acc * curr;
}, 1);
console.log(numbe_r);

//arrow function
let numbers7 = [4, 5, 6, 7, 8, 9];
let product = numbers7.reduce((acc, curr) => acc * curr);
console.log(product);

//count total marks from object
let student = [
  { name: "aman", marks: 50 },
  { name: "riya", marks: 70 },
  { name: "neha", marks: 80 },
];
let totalMarks = student.reduce((acc, student) => {
  return acc + student.marks;
}, 0);
console.log(totalMarks);
