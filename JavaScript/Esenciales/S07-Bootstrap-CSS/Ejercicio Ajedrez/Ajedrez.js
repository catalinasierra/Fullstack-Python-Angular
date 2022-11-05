const tablero = document.querySelector(".tablero");

let negro = false; 
let indice = 0;



for (let i = 1; i<=64; i++) {
    const casilla = document.createElement("div");
    if (negro){
        casilla.classList.add("casilla");
        casilla.classList.add("negro");
        indice++;
        negro = !negro;
    }else{
        casilla.classList.add("casilla");
        casilla.classList.add("blanco");
        indice++;
        negro =!negro;
    }
    tablero.appendChild(casilla);
    if (indice === 8){
        negro =!negro;
        indice = 0;
    }
}