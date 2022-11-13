window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", esPalindromoClick);
    
};

function esPalindromoClick(event) {
    console.log(typeof event);
    let frase = document.getElementById('frase').value;
    const resultado = esPalindromo(frase);

    if (resultado) {
        alert(`La frase dada es palindromo.`)
    } else {
        alert(`La frase dada NO es palindromo.`)
    }
}

function esPalindromo(frase) {
    const fraseInvertida = frase.split("").reverse().join("");

    return fraseInvertida === frase;
}
