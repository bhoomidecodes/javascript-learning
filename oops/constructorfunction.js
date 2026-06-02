function greet(name) {
  return `hloo ${name}`;
}
console.log(greet("bhoomi"));

function person(name, age) {
  this.name = name;
  this.age = age;
}

function car(make, model) {
  this.make = make;
  this.model = model;
}

let myCar = new Car("toyota", "camry");
console.log(myCar);

let myNewCar = Car("tata", "safari");
console.log(myNewCar);
