/*
Programming Primer (in JS)
• Values
• Operations
• Variables
• Expressions and Statements 
• Decisions
• Loops
• Functions
*/
/*
• --Values--
*/
//Primitive Values
42 // Number
3.14 // Number
"Hello, friend!" // String
true // Boolean 
false // Boolean
null // Null - empty values
undefined // undefined - empty values

//Non Primitive Values
[1,2,3,4,5] // Array - 0 index - collection of values - position of index 
{name: "Rodrigo"} // Object - collection of values - postion with keys(properties)

/*
• Operations
*/
3 + 4 // Basic arithmetic operations - operands (3 and 4) and the operator (+)
43 - 1
"Rodrigo" + "Gonzalez" // Concatanation when strings - "Rodrigo Gonzalez"
!false // Operator - Unary (!) - A single operand - Nagation of the boolean value
3.0 == 3 //Comparison - Double equal - Are they equal?
3 < 4 // Less than - True
true || false // Decide something for us (OR) - Boolean True
true && true // Both are true

/* Typeof */
typeof 42 // number
typeof "Rodrigo" // String
typeof true // Boolean
typeof undefined // undefined
typeof { age: 39 } // Object
typeof null // object - is a bug in JS
typeof [1,2,3] // object - less especific info