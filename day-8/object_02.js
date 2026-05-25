//object literals
const user = {
  "full name": "bhoomi sharma",
  name: "bhoomi",
  age: 20,
  location: "gwalior",
  email: "sharmabhoomi889@gmail.com",
};

console.log(user.email); //printing
console.log(user["email"]); //printing
console.log(user["full name"]);
user.email = "sharmabhoomi0999@gmail.com";
console.log(user);
Object.freeze(user); //we cant perfrom changes if we are using .freeze method;
user.email = "sharmabhoo898@gmail.com";
console.log(user);

//creating object using new object()
const instauser = new Object();
instauser.name = "mohini";
instauser.age = 22;
console.log(instauser);

//nested objects
const regularuser = {
  email: "soa@gmail.com",
  fullname: {
    userfullname: {
      firstname: "divyansh",
      lastname: "sharma",
    },
  },
};
console.log(regularuser.fullname.userfullname.firstname);

//merging objects
const obj1 = {
  1: "a",
  2: "b",
  3: "c",
};

const obj2 = {
  1: "a",
  2: "b",
  3: "c",
};

let obj3 = {
  ...obj1,
  ...obj2,
};
console.log(typeof obj3);
//console.log(...obj1, ...obj2);//it will now work here beacuse it only works on iterable(arrays,strings) not objects(non iterable)

// or we can merge objects using object.assign which is built in method
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);

//array of objects
const user_3 = [
  { name: "mohini", age: 22 },
  { name: "bhoomi", age: 20 },
  { name: "ravi", age: 23 },
];
console.log(user_3);
console.log(user_3[0].name);
console.log(user_3[0].age);
console.log(Object.keys(regularuser)); //for keys of objets
console.log(Object.values(regularuser)); //for values of objects
console.log(regularuser.hasOwnProperty("email")); //it is used for checking that the property exists in object or not
console.log(Object.entries(regularuser)); //Object.entries(obj) object ke sab properties ko array of arrays me convert kar deta hai.

//destructuring of object
// Object destructuring is a way to extract object properties into variables to avoid using the dot operator repeatedly.
const course = {
  coursename: "jsx",
  prize: "999",
  courseinstructor: "hitesh",
};
const { coursename, prize, courseinstructor } = course;
console.log(prize, coursename);
