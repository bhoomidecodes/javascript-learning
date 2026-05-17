console.log(new Date().toLocaleString("en-in"));
console.log(new Date("2025-12-25").toLocaleString("en-in"));
console.log(Date.now()); //Date.now() returns the number of milliseconds elapsed since January 1, 1970 UTC.
/*
Real use cases (Dev life)
Login time
OTP expiry
Session timeout
Countdown timer
Sorting by latest date
//Backend / DB	toISOString()
Frontend UI	toLocaleString()
Comparison	timestamps
Show user	local format

*/
//get methods
let d = new Date();
console.log(d.getFullYear());
console.log(d.getMonth() + 1);
console.log(d.getDay() + 1); // Day of week its like third day of the week and the index start from 0 so it will not think like humans
console.log(d.getDay() + 1); //day of week
console.log(d.getDate());
console.log(d.getHours());
console.log(d.getMinutes());
console.log(d.getSeconds());
console.log(d.getMilliseconds());
console.log(d.getUTCFullYear());
console.log(d.getUTCDay());

//setting date components
const e = new Date();
e.setFullYear(2026);
e.setMonth(11);
e.setDate(12);
e.setHours(4);
console.log(e.toLocaleString("en-in"));
