let score = 120;
let anotherscore = new Number(120);
console.log(score);
console.log(anotherscore.valueOf()); //every  single primitive can also be converted into advance datatypethat is non primitives
console.log(typeof score);
console.log(typeof anotherscore);

//boolean
let isactive = true;
let isreallyactive = new Boolean(true);
console.log(isactive);
console.log(typeof isactive);

console.log(isreallyactive.valueOf());
console.log(typeof isreallyactive);

//null and undefined

let firstname;
console.log(typeof firstname); //the typeof undefined is object
console.log(firstname); //undefined it means it exist but right now it is not define
let secondname = null; //it means its neither a string neither a object dont have any value nor a zero null means null it is null

//nd the typeof null is object
console.log(secondname);
console.log(typeof secondname);

//string
let str = "bhoomi";
let str_1 = "34";
let str_2 = `hello`;
console.log(typeof (str, str_1, str_2));
console.log(`my name is ${str} and my repo count is ${str_1}`);
console.log(`hell0 my name is ${str} and my repo count is ${str_1}`); //string interpolation
let str_3 = str_1 + " " + str_2;
console.log(str_3);

//symbols
let sm1 = Symbol("bhoomi");
let sm2 = Symbol("bhoomi");
console.log(sm1 == sm2);
console.log(sm1);
