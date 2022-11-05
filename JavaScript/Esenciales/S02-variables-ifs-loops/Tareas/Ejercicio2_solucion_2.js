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

empleados = empleados.map((e) => {
    e.nombre = e.nombre.toUpperCase();
    e.salario = (e.salario * (e.incremento / 100)) + e.salario;
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 39 ~ empleados=empleados.map ~ e", e)

    suma = empleados.reduce((e, { salario }) => e + salario, 0)
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 39 ~ empleados=empleados.map ~ suma", suma)
    const max = empleados.reduce((a, b) => {
        return (a = a > b.salario ? a : b.salario);
    }, 0);
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 41 ~ empleados=empleados.map ~ max", max)
    const min = empleados.reduce((a, b) => Math.min(a, b.salario))
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 45 ~ empleados=empleados.map ~ min", min)

    // const primerSalario = empleados.splice(0, 1)[0].salario;
    // const salarioMinimo = empleados.reduce((a, b) => {
    //     return (a = a < b.salario ? a : b.salario);
    // }, primerSalario);
    // console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 51 ~ salarioMinimo ~ salarioMinimo", salarioMinimo)
    console.log(empleados);
    const salarioMinimo = empleados.reduce((a, b) => {
        return (a = a < b.salario ? a : b.salario);
    }, Number.MAX_VALUE);
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 56 ~ salario ~ salario", salarioMinimo);



    // Sobre el resultado de empleados calculados del Ejercicio 2 filtrar aquellos empleados que tengan un sueldo superior a 5000 (ejemplo).
    var filtro = [];
    var filtro = empleados.filter(e => e.salario > 5000)
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 50 ~ empleados=empleados.map ~ filtro", filtro)


    //Ordenar los datos de empleados obtenidos en el ejercicio anterior de forma descendente.
    decremento = empleados.sort((a, b) => {
        return b.salario - a.salario
    })
    console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 57 ~ decremento=empleados.sort ~ decremento", decremento)
});

const contenidoHTML = empleados.map(e => {
    return `
    <tr>
    <strong>Nombre</strong>: ${e.nombre} <br>

    `;
}).join('');
console.log("🚀 ~ file: Ejercicio2_solucion_2.js ~ line 68 ~ contenidoHTML ~ contenidoHTML", contenidoHTML)


//document.getElementById('resultado1').innerHTML = empleados;
document.getElementById('resultado2').innerHTML = contenidoHTML;  

