//here the memory space does not change but we can change the values because the datatype is mutable but the values are not;

// const username = {
//   firstname: "hitesh",
//   isloggedin: true,
// };
// console.log(username.firstname);
// username.firstname = "sharma";
// username.lastname = "rishikesh sharma";
// console.log(username);
// // console.log(username);
// console.log(username.lastname);
// console.log(typeof username);

//another way to do this we can inclose the values in " ".  '' if we want space ;
let mymother = {
  "my mother name is": "anita",
  " her age is": 30,
};
//console.log(mymother);
console.log(mymother["my mother name is"]); //but we cant access it with .operator we have to use[] in order to acces it

let student = {
  "full name": "Mohini Sharma",
  age: 20,
};

console.log(student["full name"]);
let today = new Date();
console.log(today.toLocaleString("en-In"));
