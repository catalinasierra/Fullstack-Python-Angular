window.onload = function (event) {

    document.getElementById('Calcular').addEventListener("click", calcularIMC);
}

function calcularIMC(event) {
    event.preventDefault();
    var alturaEnCentimetros = parseInt(document.getElementById('Talla').value);
    var alturaEnMetros = alturaEnCentimetros / 100;
    var pesoEnKilos = parseInt(document.getElementById('Peso').value);

    var cimc = calcularImc(alturaEnMetros, pesoEnKilos);
    //imc.innerHTML = cimc;
    var respuesta = 'Hola, tu IMC es ' + cimc;
    alert(respuesta);

    document.querySelector('#imc').value = cimc;
}

function calcularImc(altura, peso) {
    return peso / Math.pow(altura, 2);
}

// TODO: Pendiente crear la función que convierte de centímetros a metros
function convertirCmMetros(centimetros) {
    return 0;
}
