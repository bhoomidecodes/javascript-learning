//arrays
//in js let arr=[1,2,3]; mixed values allwed
let myarr = [1, 2, 3, 4, 5];
console.log(myarr[2]);
//let myarr_1 = ["bhoomi", "aradhana", "khushi"];
//console.log(typeof myarr_1);
//const myarr_2 = new Array(1, 2, 3, 4, 5, 6, 7);
//console.log(myarr_2);

//array methods
myarr.push(6);
myarr.push(7); //add elements at the end
myarr.unshift(20); //add elements at start
myarr.pop(); //it removes last value
//myarr.shift(); //it removes first value
console.log(myarr.includes(5)); //for  checking value that it exists in array or not
console.log(myarr.indexOf(3));
console.log(myarr.lastIndexOf());

//convert array into string
const newArr = myarr.join();
//const newArr = myarr.toString();
console.log(newArr);
//console.log(typeof newArr);
//slice,splice
