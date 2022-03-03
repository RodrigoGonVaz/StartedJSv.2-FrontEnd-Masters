/*
• Scope / Closures
    - Nested scope and Closures
*/
// Scope - Where the JavaScript engine looks for things (variables)

let maestro = 'Rodrigo';

function otherClass(){
    maestro = "Robert";
    topics = 'React'
    console.log("Welcome")
}

otherClass() // Welcome
maestro; // Robert
topics; // React

/*
undefined vs. undeclared
*/

//Function Expressions
// Name function expression
let keyHandler = function keyHandler(){
    //..
}

// IIFE - Immediately Invoked Function Expression.
// No sobrecribe las variables de afuera
let teacher = "Rob"

(function anotherTheacher(){
    let teacher = "Suzy";
    console.log(teacher);
})()

console.log(teacher) // Rob

//Encapsulation

let estudiante = "Olly"

{
    let estudiante = "Suzy";
    console.log(estudiante); // Suzy
}

console.log(estudiante) // Olly

// Closure - is when a function "remembers" the variables outside of it, even if you pass that function elsewhere

function ask(question) {
    setTimeout(function waitASec(){
        console.log(question)
    }, 100)
}

ask("What is Closures?")

//Can reuse it
function ask2(question){
    return function holdYourQuestion(){
        console.log(question)
    }
}

let myQuestion =  ask("What is Closures?")

myQuestion();