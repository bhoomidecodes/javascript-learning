/* == (Double Equals): Does TYPE CONVERSION
JavaScript will first convert the values into the same type, then compare.
This can give weird, unexpected results.*/

/*
 === (Triple Equals): NO Conversion (Strict Comparison)
It compares value + type.
No conversion → results are accurate + predictable.*/

console.log(4 > 6);
console.log(8 == 8);
console.log(7 > 5);
console.log(4 != 1);
console.log("2" > 1);
console.log("02" > 1);
console.log(null > 0);
console.log(null === 0); //js coverts the null in 0 nd then compare
console.log(null < 0);
console.log(null >= 0);
console.log(undefined == 0); // undefined sirf null k eqauak hota hai or kisi value k equal nhi hota
console.log("9" === 8);
