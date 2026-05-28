//function call only runs when we call it
function greet() {
  console.log("hello");
}
greet();
greet();
greet();
greet();
greet();

//declaration of function(most common)
function add(a, b) {
  return a + b;
}
console.log(add(5, 3));

//function expression
const multiply = function (a, b) {
  return a * b;
};
console.log(multiply(2, 4));

//arrow function (modern js)
const subtract = (a, b) => a - b;
console.log(subtract(10, 4));

//calling function
function sayhi() {
  console.log("hii bhoomi");
}
sayhi();

//
function addtwono(no1, no2) {
  return no1 + no2;
}
console.log(addtwono(6, 5));


