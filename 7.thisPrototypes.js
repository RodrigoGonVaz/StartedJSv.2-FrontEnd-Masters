/*
• this / Prototypes
*/

// A functions this reference the execution context for that call, determined entirely by how the function was called.
// * this
//A this-aware function can thus have a diffent context each time it is called, which makes it more flexible & reusable.
let workshopMex = {
    teacher: "Rod",
    ask(question){
        console.log(this.teacher, question)
    }
};

workshopMex.ask("What is implicit binding?") // Rod What is implicit binding?

//.call es un metodo para llamar funciones
//this object - go for the key and value
function ask2(question){
    console.log(this.teacher, question)
}
function otherClass(){
    let myContext = {
        teacher: "Rodo"
    }
    ask2.call(myContext, "Why?") // <--- Invoke a function
}
otherClass();

/*
Prototypes
*/
//Constructor
//prototypes - any instances are going to be linked to or to delegate to.
function Workshop(teacher){
    this.teacher = teacher;
}

Workshop.prototype.ask3 = function(question){
    console.log(this.teacher, question)
}

let deepJS = new Workshop("Olly");
let reactJS = new Workshop('Huba')

deepJS.ask3("Is 'prototype' a class?") // Olly Is 'prototype' a class?
reactJS.ask3("Is 'constructor' ugly?") // Huba Is 'constructor' ugly?

/*
Class
*/

class Workshopi {
    constructor(maestro) {
        this.maestro = maestro
    }
    ask4(question){
        console.log(this.maestro, question)
    }
}

let deepJS2 = new Workshop("Olly");
let reactJS2 = new Workshop('Huba')

deepJS2.ask3("Is 'prototype' a class?") // Olly Is 'prototype' a class?
reactJS2.ask3("Is 'constructor' ugly?") // Huba Is 'constructor' ugly?