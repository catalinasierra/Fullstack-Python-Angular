//programacion funcional: utilizar funciones, priorizar la recursividad, utilizar menos codigo

//Crear una solución con un ciclo for-of

var array =[1, 2 , 3, 4, 5, 6, 7, 8, 9];
var suma = 0;
for (var i=0; i<array.length; i++){
    suma = suma + array[i];
    
}
console.log (suma);

//
var array =[1, 2 , 3, 4, 5, 6, 7, 8, 9];
var producto = 1;
for (var i=0; i<array.length; i++){
    producto = producto * array[i];
    
}
console.log (producto);

// Buscar una solución alternativa
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var i = 0;
var suma =0;
while(i<array.length){
    suma = suma + array[i];

i++;
}console.log(suma);
//

var array =[1, 2 , 3, 4, 5, 6, 7, 8, 9];
var producto = 1;
var i =0;
while(i<array.length){
    producto = producto * array[i];
    i++;
}
console.log (producto);

//

suma = array.reduce((a,b) => a+b);
console.log(suma);

console.log();

let resta = array.reduce((a, v) => a - v, 0);
console.log("🚀 ~ file: Ejercicio1.js ~ line 50 ~ resta", resta);
