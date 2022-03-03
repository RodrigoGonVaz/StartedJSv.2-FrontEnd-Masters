/*
• Loops
• Functions
*/

// Repeat the students array desde el index 0 - sumale uno ++ hasta que i sea el length del arreglo
// students[i] - es el indice del arreglo 
let students = [/*..*/];

for (let i = 0; i < students.length; i++){
    greetStudent(students[i]);
}

// student una nueva variable para cada uno de los students
for (let student of students){
    greetStudent(student);
}

// Evalua si es verdadero o falso - hasta que se cumpla lo contrario
// En ka linea de pop es quitar un indice del arreglo y les mandamos saludos - lo hacemos mas pequeno el arreglo hasta que sea falso 
let estudiantes = ["Rodrigo", "Nombre", "Susana", "Isabel"];

while (estudiantes.length > 0){
    let estudiante = estudiantes.pop(); // empieza del ultimo index y si se usa . shift() empieza desde el primero
    console.log(`Hello, ${estudiante}!`);
}

/*
• Functions
*/
//Coleccion de cosas que queremos hacer
function greetStudent(student){
    console.log(`Hello, ${student.name}!`);
}

function timeRemaining(timeElapsed, endTime) {
    return endTime - timeElapsed
}

let left = timeRemaining(42,240)
left; // 240 - 42 = 198

/*
Ejercicio (EX.JS)
*/

