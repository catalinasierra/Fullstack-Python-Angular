var board = document.getElementById('boardInner');



const renderBoard = (useLabels) =>{
   
  var change = false; // cuando cambie el color inicial se determinan los siguientes
  var color = 'white'; // inicia en blanco 
  for (var i = 0; i < 64; ++i){ // recorre 64 posiciones
    var el = document.createElement('DIV') // crear un div en el DOM
    el.className = 'square'
    change = i % 8 === 0 || i % 8 === NaN // cambia de color si i = 0 indica el final de una fila 
    color = change ? color : 
    color === 'white' ? 'black' : 'white'
    el.style.backgroundColor = color
    board.appendChild(el)// inserta nuevo nodo en la estructura DOM
    change = false
  }
} // :?

renderBoard()