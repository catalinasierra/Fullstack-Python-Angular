/*
FUNCIONES RECURSIVAS

Estructura:

function sumarListaRecursiva(numeros) {
    // caso base
    // caso recursivo: n instrucciones
}
*/

function sumarListaIterativa(numeros) {
    let suma = 0;

    for (let i = 0; i < numeros.length; i++) {
        suma += numeros[i];
    }

    return suma;
}


// [2, 3, 5, 7, 11]

function sumarListaRecursiva(numeros) {
    // Caso base:
    if (numeros.length == 1) { // [11]
        return numeros[0];
    } else {
        // Caso recursivo:
        const primerNumero = numeros[0];
        numeros.splice(0, 1);
        return primerNumero + sumarListaRecursiva(numeros);
    }
}

const numeros = [2, 3, 5, 7, 11];

console.log(sumarListaIterativa(numeros));
console.log(sumarListaRecursiva(numeros));
