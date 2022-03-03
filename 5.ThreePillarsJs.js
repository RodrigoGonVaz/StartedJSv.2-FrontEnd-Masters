/*
• Types / Coercion
• Scope / Closures
• this / Prototypes
*/

// Types / Coercion
// * Primitive Types - Converting Types - Checking Equality
// In JavaScript, everything is an object - FALSE
/*
- undefined
- strings
- number
- boolean
- object
- symbol
In JavaScript, variables dont have types, values do.
*/

let v;
typeof v;
v = "1";
typeof v;
v = 1;
typeof v;
v = true;
typeof v;
v = {};
typeof v;
v = Symbol();
typeof v;

v = null; // object - is a bug in JavaScript
typeof v;
v = function(){}; // function
typeof v;
v = [1,2,3]; // object 
typeof v;

// NaN - Not a Number
let greetings = "Hello, class!"
let something = greetings / 2 // NaN - invalid numeric operation

// Object() - Array() - Function() - Date() - RegExp() - Error()
let yesterday = new Date("March 6, 2019"); // Wed, 06 Mar 2019 06:00:00 GMT

//Coercion - The way to convert from one type to another
let msg1 = "There are "
let numStudents = 16
let msg2 = "students."

console.log(msg1 + numStudents + msg2) // "There are 16 students." - Implicit conversion
console.log(`There are ${numStudents+''} students.`)  //  "There are 16 students." - Implicit conversion
/*
Number + Number = Number
Number + String = String
String + Number = String
String + String = String
*/
/*
Falsy
- ""
- 0 and -0
- Null
- NaN
- false
- undefined
Truthy
- "foo"
- 23
- {a:1}
*/

// Equality
/*
== vs ===
*/
// == allows coercion (types diffent)
// === disallows coercion (tyoes same)



