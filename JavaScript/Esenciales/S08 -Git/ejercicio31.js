window.onload = () => {
    document.querySelector('#agregarElementos').addEventListener('click', agregarElementos)
}

function agregarElementos() {
    const listado = document.querySelector('#listado');
    let elementoLi = document.createElement('li');
    elementoLi.innerText = '101 a 200';
    listado.appendChild(elementoLi);
    
    elementoLi = document.createElement('li');
    elementoLi.innerText = '201 a 300';
    listado.appendChild(elementoLi);

    this.disabled = true;

    //document.querySelector('#agregarElementos').disabled = true;
}
