window.onload = () => {
    document.querySelector('#ingresoAño').addEventListener('keypress', ingresoAñoClick)
}

function ingresoAñoClick(event) {
    event.preventDefault();
    if (event.keyCode == 13) {
        const año = parseInt(this.value);

        if (año >= 2000 && año <= 2022) {
            document.querySelector('.meses').style.display = 'inline';
        }
    }
}
document.querySelector('.meses').addEventListener('keypress', ingresoDiaClick)
function ingresoDiaClick(event) {
event.preventDefault();
    if (event.keyCode == 13) {
        document.querySelector('.dias').style.display = 'inline';  
                 
        }   
    } 
    function concatenar(selected) {
        let ref = document.getElementById('año')
        annio = ref.innerText += selected.value
        console.log(annio)

var selectmeses = document.querySelector('#meses');
selectmeses.addEventListener('change', selector)
  function selector(){
    let selectedOptionMes = this.options[this.selectedIndex];
    let ref = document.getElementById('mes')
        mes = selectedOptionMes.value;
        ref.innerText +=selectedOptionMes.value
        console.log(mes)
  
var select = document.querySelector('#dias');
select.addEventListener('change', selectorDias)
function selectorDias(){
    let selectedOptionDias = this.options[this.selectedIndex];
    let ref = document.getElementById('dia')
        dia = selectedOptionDias.value;
        ref.innerText +=selectedOptionDias.value
        console.log(dia)

document.getElementById('Boton').addEventListener("click", fecha);
function fecha(){
fecha_texto = annio+"-"+mes+"-"+dia;

    ms = Date.parse(fecha_texto);
	fecha = new Date(ms);
	
	document.getElementById("fecha").innerHTML = fecha;
 
let fecha1 = new Date ('12/31/2000')
let fecha2 = new Date (fecha)
let milisegundos= 24 * 60 * 60 *1000;
let milisegundosTrascurridos = Math.abs(fecha1.getTime() - fecha2.getTime());
let diasFaltantes= Math.round(milisegundosTrascurridos/milisegundos);
let ref = document.getElementById('diasFaltantes')
ref.innerText +=diasFaltantes
    
}
}
  }
}
    
