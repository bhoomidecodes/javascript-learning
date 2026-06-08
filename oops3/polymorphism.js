//Polymorphism in JavaScript Polymorphism means “one name, many forms.”
//It means the same function or method can behave differently depending on the object or input.
//Polymorphism is the ability of a function or method to perform different tasks depending on the object or input.

//two types ----> 1.compile time----->function overloading and operator overloading , 2.run time----> method overriding.

//compile time polymorphism is also known as static poly..it uses function overloading

//JavaScript does not have true function overloading feature.
// but we can create that similar behaviour using conditions.

//function overloading
function add(a, b, c) {
  if (c != undefined) {
    return a + b + c;
  }
  return a + b;
}
console.log(add(2, 3));
console.log(add(2, 3, 4));

// function overloading
function add1(a, b) {
  return a + b;
}
console.log(add1(2, 3));
console.log(add1("heloo", "bhoomi"));

// method overriding
class Animal {
  speak() {
    console.log("animal makes sound");
  }
}
class Dog extends Animal {
  speak() {
    console.log("dog barks");
  }
}
class cat extends Animal {
  speak() {
    console.log("cat meows");
  }
}
let d = new Dog();
let c = new cat();
d.speak();
c.speak();

//method overriding
class Vehicle {
  start() {
    console.log("vehicle has been started");
  }
}
class car extends Vehicle {
  start() {
    console.log("car started");
  }
}
class Bike extends Vehicle {
  start() {
    console.log("bike started");
  }
}
let e = new car();
let f = new Bike();
e.start();
f.start();

//method overriding
class bird {
  fly() {
    console.log("birds can fly");
  }
}
class sparrow extends bird {
  fly() {
    console.log("sparrow can fly");
  }
}

class penguin extends bird {
  fly() {
    console.log("penguin can not fly");
  }
}
let b1 = new bird();
let b2 = new penguin();
b1.fly();
b2.fly();

//static method ---> static are the special method that can be call by class itself
class calculator {
  static add(a, b) {
    return a + b;
  }
}
let miniCalc = new calculator();
//console.log(miniCalc.add(2, 3)); // will not work because add is a static method;
console.log(calculator.add(2, 3));
