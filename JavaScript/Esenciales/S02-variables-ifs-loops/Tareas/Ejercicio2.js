let empleados = [
    {
        id: "123",
        nombre: "angel",
        salario: 4000,
        incremento: 2
    },
    {
        id: "456",
        nombre: "paula",
        salario: 5000,
        incremento: 2
    },
    {
        id: "789",
        nombre: "raul",
        salario: 4000,
        incremento: 5
    },
    {
        id: "987",
        nombre: "jose",
        salario: 8000,
        incremento: 2
    },
    {
        id: "654",
        nombre: "camila",
        salario: 6000,
        incremento: 3
    }];

let salarios = []
let incrementos = [];
let producto = [];
let totalincremento = [];
let sumatoria = [];
let array = empleados.Empleados;
for (const empleado of empleados) {
    salarios.push(empleado.salario);
    incrementos.push(empleado.incremento);
}

//console.log(arreglosalarios);
//console.log(arregloincremento);


for (i = 0; i < salarios.length; i++) {
    for (j = 0; j < incrementos.length; j++) {
        producto[i] = (salarios[i] * incrementos[j]) / 100;
        totalincremento[i] = (salarios[i] + producto[i])
        sumatoria = (salarios[i]) + (producto[i])
    }
}

//console.log (producto);
console.log("El incremento de cada empleado es " + (totalincremento));
console.log("El total de la suma de salarios es:" + sumatoria);
console.log("El salario minimo encontrado es" + Math.min(...totalincremento))
console.log("El salario maximo encontrado es" + Math.max(...totalincremento))