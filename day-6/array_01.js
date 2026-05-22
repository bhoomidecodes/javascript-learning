//slice() ------>>> it copies one portion of an array nd does not modify original array
/*
syntax
arr.slice(startindex,endindex)
*/
let arr = [1, 2, 3, 4, 5];
let newarr = arr.slice(1, 4); // it copies index if we are giving form index 1,4 then it willl copy from 1 to 4 and it will exclude the last index that we have given
console.log(newarr);
console.log(arr);

let arr_1 = [1, 2, 3, 4, 5, 6];
newarr_1 = arr_1.splice(1, 4); //nd it wil copy from index that we have given without excluding abny value.
console.log(newarr_1); //but it will change the original array like here it copy the index 1 to 4 nd removes it from original array
console.log(arr_1);

const marvel_heros = ["thor", "ironman", "spiderman"];
const dc = ["superman", "flash", "batman"];
marvel_heros.push(dc);
console.log(marvel_heros);
console.log(marvel_heros[3][0]);
const allheros = marvel_heros.concat(dc); //for merging two arrays console.log(allheros);

//spread operator this is also for combining two arrays
const allnewheros = [...marvel_heros, ...dc];
console.log(allnewheros);

//it is also used for combining arraysye ky
// const anotherarray = [1, 2, 3, [4, 5, 6], 7, [6, [7, 4, 5]]];
// const myanotherarray = anotherarray.flat(Infinity);//flat() is used to convert nested arrays into a single-level array in JavaScript.
// console.log(myanotherarray);

//convert anything in array
console.log(Array.isArray("bhoomi"));
console.log(Array.from("bhoomi"));
console.log(Array.from({ name: "bhoomi" })); //important case
let score_1 = 100;
let score_2 = 200;
let score_3 = 300;
console.log(Array.of(score_1, score_2, score_3));
