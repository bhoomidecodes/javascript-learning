// a constructor function is a special function   used to create and initilize objects.
// in js,before es6 classes we used constructor function to create multiple object with same structure

function person(name, age) {
  this.name = name;
  this.age = age;
}

let s1 = new Person("bhoomi", 20);
let s2 = new Person("rahul", 20);

console.log(s1, s2);

function Car(brand, model) {
  this.brand = brand; // it is adding the property of brand in the new object that is created .
  this.model = model;
}

let car1 = new Car("tata", "safari");
let car2 = new Car("toyota", "camry");
console.log(car1, car2);

function Person(name) {
  this.name = name;
  return { city: "Delhi" }; // here we  are returning city delhi in in constructor as object
  //  so it will ignore the strings nd no. it will dispaly tha object in p1.
}

let p1 = new Person("Rahul");
console.log(p1);

// construcotr function for bank account
function BankAccount(name, balance) {
  this.name = name;
  this.balance = balance;

  this.deposit = function (amount) {
    this.balance += amount;
  };
}
let acc1 = new BankAccount("bhoomi", 1000);
let acc2 = new BankAccount("Rahul", 500);
acc1.deposit(500);
console.log(acc1);

// constructor function for student marks
function Student(name, marks) {
  this.name = name;
  this.marks = marks;

  this.isPass = function () {
    if (this.marks >= 33) {
      return "pass";
    } else {
      return "fail";
    }
  };
}
let m1 = new Student("bhoomi", 45);
let m2 = new Student("rahul", 30);
console.log(m1.isPass());
console.log(m2.isPass());

function Tea(type) {
  this.type = type;
  this.describe = function () {
    return `this is a cup of ${this.type}`;
  };
}
let lemonTea = new Tea("lemontea");
console.log(lemonTea.describe());
