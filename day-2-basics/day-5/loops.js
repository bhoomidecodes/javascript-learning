//for loop if you know how many times
//For loop – small definition
//A for loop is a control structure that executes a block of code a fixed number of times by initializing, checking a condition, and updating a loop variable.

for (let i = 1; i <= 10; i++) {
  console.log("bhoomi");
}

//while loop that calculates the sum of no. from 1 to 5
let i = 1;
let sum = 0;
while (i <= 5) {
  sum = sum + i;
  i++;
}
console.log(sum);
//write a program to store all the elements that appear before the string "chai" in a new array called selectedTea.
// The loop should stop as soon as "chai" is found.
let tea = ["green tea", "black tea", "chai", "oolong tea"];
let selectedteas = [];
for (let i = 0; i < tea.length; i++) {
  if (tea[i] == "chai") {
    break; //// break: stops the loop completely
  }
  selectedteas.push(tea[i]);
}
console.log(selectedteas);

// write a for loop that loops through the array and and skips paris
//  stores other cities in an array name visited ciities.
let cities2 = ["london", "newyork", "paris", "berlin"];
let visitedcities = [];
for (let i = 0; i < cities2.length; i++) {
  if (cities2[i] == "paris") {
    continue; // continue: skips the rest of current iteration
    // continue: jumps directly to i++ (next iteration)
  }
  visitedcities.push(cities2[i]);
}
console.log(visitedcities);

// for of loop
// use for of loop to iterate through the array `[1,2,3,4,5] and stop when the number 4 is found
//stores athe no. before 4 in an array namedsmall numbers.
// in for of loop we dont have i

let numbers3 = [1, 2, 3, 4, 5];
let smallNumbers = [];
for (let number of numbers3) {
  if (number === 4) {
    break; // stop the loop when 4 is found
  }
  smallNumbers.push(number); // store numbers before 4
}
console.log(smallNumbers); // [1, 2, 3]

//use for of loop to iterate through the array ["chai","green tea","herbal tea", "black tea",] and skip "herbal tree";
// store the other teas in an array named prefferedteas
let teas = ["chai", "green tea", "herbal tea", "black tea"];
prefferedteas = [];
for (let items of teas) {
  if (items === "herbal tea") {
    continue;
  }
  prefferedteas.push(items);
}
console.log(prefferedteas);

/*for in loop---------->> not recommended for arrays
for...in loop is used to iterate (loop) over keys / properties of an object.
👉 It gives KEYS, not values.*/
let student = {
  name: "bhoomi",
  age: 20,
  branch: "cse",
};
for (let key in student) {
  console.log(student[key]);
}
//for...in loop iterates over keys of an object, and values can be accessed using object[key].
let citypopulations = {
  london: 890000,
  newyork: 8400000,
  paris: 2200000,
  berlin: " 3500000",
};
let citypopulation = {};
for (let key in citypopulations) {
  if (key === "berlin") {
    break;
  }
  citypopulation[key] = citypopulations[key];
}
console.log(citypopulation);

// use a for in loop to loop through an object containing city populations skip any city with
// a population below 3 million and st0re the rest in a new object  and names largeities
let worldcities = {
  sidney: "5000000",
  tokyo: 9000000,
  berlin: 3500000,
  paris: 2200000,
};
let largecities = {};
for (let key in worldcities) {
  if (worldcities[key] < 3000000) {
    continue;
  }
  largecities[key] = worldcities[key];
}
console.log(largecities);

//for each loop -----------> only for arrays
let teacollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableteas = [];
teacollection.forEach((element) => {
  if (element == "chai") {
    return; // skip chai
  }
  availableteas.push(element); // push the current tea
});
console.log(availableteas);

//write a for each loop  that iterates through the array ["berlin""tokyo","sidney","paris"]
// skip sidney and store the other cities in a new array names "traveledcities",
let cities = ["berlin", "tokyo", "sidney", "paris"];
let traveledcities = [];
cities.forEach((element) => {
  if (element == "sidney") {
    return; //skip sidney
  }
  traveledcities.push(element);
});
console.log(traveledcities);

// write a for each looop that iterates through the array [2,5,7,9,]
//skip the value 7 and multiply rest by 2 store it in a new array named doublenumbers.
let numbers = [2, 5, 7, 9];
let doublenumber = [];
numbers.forEach((element) => {
  console.log(element);
  if (element == 7) {
    return;
  }
  doublenumber.push(element * 2);
});
console.log(doublenumber);

//for loop
let numbers1 = [2, 5, 7, 9];
let doublenumber1 = [];
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] == 7) {
    continue;
  }
  doublenumber1.push(numbers1[i] * 2);
}
console.log(doublenumber1);

//use a for of loop to iterate through the array ["chai","green tea","black tea","jasmine tea","herbal tea"]
//and stop when the length of current tea name is greater than 10.
//store the teas iterated over in an array named short teas.
let arr1 = ["chai", "green tea", "blacktea", "jasmine tea", "herbal tea"];
let shortteas = [];
for (let items of arr1) {
  if (items.length > 10) {
    break;
  }
  shortteas.push(items);
}
console.log(shortteas);
