// ¿Cuáles son las formas de declarar variables en JS?
// var: variable/label variable - global (window, document, location, localStorage, sessionStorage, ...)
// const: variable/label constante
// let: variable/label variable - local a un bloque (función, clase, if, for, while, do..while)
// const fs = require('fs');

let numeros = [1, 2, 3, 4, 5];
for(let i = 0; i < numeros.length; ++i) {
    console.log(numeros[i]);
}
// Genera error ReferenceError:
// console.log(i); // Imprime el último valor de la iteración 5

console.log();

for (var i = 0; i < numeros.length; i++) {
    console.log(i);
}
console.log()
console.log(i);  // Imprime 5

console.log();

// Objeto window:
console.log(typeof window);
console.log(typeof document);
// alert('Hi!');
