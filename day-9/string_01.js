let name = "bhoomi";
let city = "gwalior";
let message = `my name is ${name}`;
console.log(message);

//decelaration of a string

//using double quotes
let name_1 = "bhoomisharma";

//using single quotes
let city_2 = "joura";

//using back ticks;
let message_1 = `hi i am bhoomi`;

//backticks allows variables using ${}
//it allows multi line strings;

//using string constructr;(not recommended)
let str = new String("hello"); //this creates a string object, not primitive;

//empty string decelaration
let empty = "";
let empty_1 = "";
let empty_2 = ``;

//string with special characters
/*What are “special characters”?
Special characters are characters that normally have a special meaning in JavaScript, like:
" (double quote)
' (single quote)
\ (backslash)
To use them inside a string, we use an escape character → \
What’s happening?
The string starts and ends with double quotes
Inside the string, you also want to print double quotes around learning
JavaScript would get confused, so you escape them using \*/

let text = 'i am "learning" javascript';
let text_2 = "it's easy";
console.log(text);

//multi line strings
let msg = `hello
world`;

/*
Key Takeaways 🔑
Use let or const to declare strings
Prefer backticks when using variables
Avoid new String()
Strings are immutable
*/

//methods of strings.

//length of a string
let text_3 = "hello";
console.log(text_3.length);

//accessing character
let word = "javascript";
console.log(word[0]);
console.log(word.charAt(4));

//changing case ----------> .touppercase(); .tolowercase()
let word_1 = `agra`;
console.log(word_1.toUpperCase());
console.log(word_1.toLowerCase());

//trimming spaces ----------> .trim(); .trimStart(); .trimEnd(;)
let word_2 = ` bhind `;
console.log(word_2.trim());
console.log(word_2.trimStart());
console.log(word_2.trimEnd());

//finding text ------> .includes(" "); .indexof(" "); .startwith(" ") .endwith("  ");
let sentence = `i am ur sister`;
console.log(sentence.includes("sister")); //
console.log(sentence.indexOf("ur")); //
console.log(sentence.startsWith("i")); //
console.log(sentence.endsWith("sister")); //
console.log(sentence);

//extracting parts of a string ---------> .slice(); .substring()
let text_4 = "java";
console.log(text_4.slice(0, 2));
console.log(text_4.substring(1, 3)); //slice() supports negative values, substring() does not

/*
What slice(0, 2) Means
“Start from index 0, stop before index 2”
So it takes:
index 0 → j
index 1 → a
❌ index 2 (v) is not included
*/

//replace text ------------> .replace("form", "t0")
let message_3 = "i like java";
console.log(message_3.replace("java", "javascript"));

// replace all
console.log(message_3.replaceAll("a", "@"));

//spiliting strings ----------->.split()
let sentence_1 = "i love coding";
console.log(sentence_1.split(" ")); //Very useful for forms and input handling
//they are separated by commas because it is removing the spaces and chaging it into array now we have 3 strings;

//joining strings ------------>.join()
let arr = ["hello", "world"];
console.log(arr.join(""));

//String Comparison
console.log("apple" === "apple"); // true",
console.log("Apple" === "apple"); // false (case-sensitive)

//concatenataion
let firstName = "Bhoomi";
let lastName = "Sharma";
let fullName = firstName + " " + lastName;
console.log(fullName);
