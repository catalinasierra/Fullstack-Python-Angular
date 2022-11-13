window.onload = () => {
    document.querySelector('#dibujarPatron').addEventListener('click', dibujarPatronClick);
}

function dibujarPatronClick(event) {
    let letra = document.querySelector('#letra').value;

    const patron = dibujarPatron(letra);

    document.querySelector('#resultado').value = patron;
}

function dibujarPatron(letra) {
    let patron = '';
    switch(letra) {
        case 't':
        case 'T':
            patron = dibujarLetraT();
            break;
        case 'S':
            patron = dibujarLetraS();
            break;
    }

    return patron;
}

function dibujarLetraT() {
    let resultado = '';

    for(let i = 1; i <= 5; ++i) {
        if (i == 1) {
            for(let j = 1; j <= 5; ++j) {
                resultado += '*';
            }
            resultado += '\n';
        } else {
            resultado += '  *\n';
        }
    }

    return resultado;
}
