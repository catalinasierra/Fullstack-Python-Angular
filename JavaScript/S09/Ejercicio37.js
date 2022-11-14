window.onload = () => {
    
    
    
var select = document.querySelector('#caracteres');
select.addEventListener('change', selector)
    function selector(){
        let selectedOption = this.options[this.selectedIndex];
            caracter = selectedOption.value;
            console.log(caracter)
    
    document.querySelector('#dibujarPatron').addEventListener('click', dibujarPatronClick); 
function dibujarPatronClick(event) {
    let letra = document.querySelector('#letra').value;

    const patron = dibujarPatron(letra);

    document.querySelector('#resultado').value = patron;

function dibujarPatron(letra) {
    let patron = '';
    switch(letra) {
        case 't':
        case 'T':
            patron = dibujarLetraT();
            break;
        case 's':
        case 'S':
            patron = dibujarLetraS();
            break;
        case 'a':
        case 'A':
            patron = dibujarLetraA();
            break;
        case 'n':
        case 'N':
            patron = dibujarLetraN();
            break;
    }

    return patron;


function dibujarLetraT() {
    
    let resultado = '';
    for(let i = 1; i <= 4; ++i) {
        if (i == 1) {
            for(let j = 1; j <= 5; ++j) {
                resultado +=' ' + caracter;
            }
            resultado += '\n';
        } for(let j = 1; j <= 1; ++j) {
            resultado += '     '+caracter;
        }
        resultado += '\n';
    }

    return resultado;
}
function dibujarLetraS() {
    let resultado = '';

    for(let i = 1; i <= 1; ++i) {
        if (i == 1) {
            for(let j = 1; j <= 5; ++j) {
                resultado += ' '+caracter;
            }
            resultado += '\n';
            for(let l = 1; l <= 1; ++l) {
                resultado += ' '+ caracter;
            }
            resultado += '\n';
            for(let l = 1; l <= 5; ++l) {
                resultado += ' '+caracter;
            }
            resultado += '\n';
            for(let l = 1; l <= 1; ++l) {
                resultado += '         '+ caracter;
            }
            resultado += '\n';
            for(let l = 1; l <= 5; ++l) {
                resultado += ' '+caracter;
            }
            resultado += '\n';
        } else {
            resultado += '  ' + caracter;
        }
    }

    return resultado;
}
function dibujarLetraA() {
    let resultado = '';

    for(let i = 1; i <= 1; ++i) {
        if (i == 1) {
            for(let j = 1; j <= 1; ++j) {
                resultado += '      '+caracter;
            }
            resultado += '\n';
            for(let j = 1; j <= 1; ++j) {
                resultado += '    '+caracter+'   '+caracter;
            }
            resultado += '\n';
            for(let j = 1; j <= 1; ++j) {
                resultado += '   '+caracter+'     '+caracter;
            }
            resultado += '\n';
            for(let j = 1; j <= 1; ++j) {
                resultado += '  '+caracter+'   '+caracter+'   '+caracter;
            }
            resultado += '\n';
            for(let j = 1; j <= 1; ++j) {
                resultado += ' '+caracter+'         '+caracter;
            }
            resultado += '\n';
        } 
    }

    return resultado;
}
function dibujarLetraN() {
    let resultado = '';
    for(let i = 1; i <= 1; ++i) {
        
        for(let j = 1; j <= 1; ++j) {
            resultado += caracter+' '+caracter+'     '+caracter;
        }resultado += '\n';
        for(let j = 1; j <= 1; ++j) {
            resultado += caracter+'  '+caracter+'    '+caracter;
        }resultado += '\n';
        for(let j = 1; j <= 1; ++j) {
            resultado += caracter+'   '+caracter+'   '+caracter;
        }resultado += '\n';
        for(let j = 1; j <= 1; ++j) {
            resultado += caracter+'    '+caracter+'  '+caracter;
        }resultado += '\n';
        for(let j = 1; j <= 1; ++j) {
            resultado += caracter+'     '+caracter+' '+caracter;
        }
    
        
       
    }

    return resultado;
}

}
}
    }
}
