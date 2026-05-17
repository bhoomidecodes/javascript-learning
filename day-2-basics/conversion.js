let a = "5" + 2;
let b = "5" - 2;
console.log(true + 1);
console.log(typeof b);
console.log(typeof a);

// conversion in number

// method no.1:Number()
let x = Number("5");
console.log("value is", x, "type is", typeof x);
console.log(Number("hello"));

//method no.2:

// parseint() it ignores decimal part it coverts string into integer
//Value Type	Convert hota hai?	Example
/*String with only number	✔ YES	"123" → 123
String with number + text	✔ YES (partially)	"23kg" → 23
Decimal string	✔ YES (integer banata hai)	"42.9" → 42
String starting with text	❌ NO	"kg50" → NaN
Boolean	❌ NO	true → NaN
Empty string	❌ NO	"" → NaN */

console.log(parseInt("67"));

let X = parseInt("123abc");
console.log("value is", X, "type is", typeof x);

let Y = parseInt(45.98);
console.log("value is", Y, "type is", typeof Y);

let Z = parseInt("gh123");
console.log("value is", Z, "type is", typeof Z);

let V = parseInt(true);
console.log("value is", V, "type is", typeof V); //starting mai number hona chaie tbhi chnage hoga  vrna nan hogoa 

let G = "";
console.log("value is", G, "type is", typeof g);

//method no.3: parseFloat()
console.log(parseFloat("45.89")); //converts a string to a floating ppint number 

//conversion in string

//method No.1:string() //it doesent give error on null and undefined 
let N = String(30); //this is used for everything it can convert everything into string 
console.log("value is", N, "type is", typeof N);

//method no. 2: toString() //it gives error on null and undefined
let M = (67).toString();  //this only works for conversion of objects  nd numbers
console.log(M, "type of M is ", typeof M);

// conversion in boolean  using Boolean()

console.log(Boolean("hello"));
console.log(Boolean(1));
console.log(Boolean(2));
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(true));
console.log(Boolean(false));

//Input Always String → Convert Manually”
const prompt = require("prompt-sync")();

let age = prompt("Enter your age: ");
console.log("Your age is:", age);
console.log("Type:", typeof age);

console.log(Number(null)); //js converts the null into 0
console.log(typeof null); // its type is object
