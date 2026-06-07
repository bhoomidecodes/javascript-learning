class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  start() {
    return `${this.model} is a car from ${this.make}`;
  }
}
class Car extends Vehicle {
  //inheritence
  drive() {
    return `${this.make}: this is an inheritance example`;
  }
}
let myCar = new Car("Toyota", "Corolla");
console.log(myCar.start()); // Parent class method
console.log(myCar.drive()); // Child class method

// person class
class person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("hello my name is" + this.name, "and my age is ", +this.age);
  }
}
let p1 = new person("bhoomi", 20);
let p2 = new person("gunnu", 30);
p1.greet();

//student class
class student {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log("good morning sir i am  " + this.name + "my age is ", this.age);
  }
}

let s1 = new student("riya", 23);
s1.greet();
console.log(s1);

// animal class
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log(`${this.name} makes a sound `);
  }
}
class Dog extends Animal {
  //inheritence
  constructor(name, breed) {
    super(name); // calls parents constructor
    this.breed = breed;
  }
  speak() {
    console.log(`${this.name} barks`);
  }
}
let d1 = new Dog("tommy", "lab");
d1.speak();
