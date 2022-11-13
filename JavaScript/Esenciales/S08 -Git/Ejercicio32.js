window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", insertarParrafoAlPrincipio);

    function insertarParrafoAlPrincipio(event) {
        let parrafo = document.createElement('p')
        let texto = document.createTextNode('Agregar nuevo párrafo')
        parrafo.appendChild(texto)
        
        // Solución 1:
        // let elemento = document.getElementById('parrafos')
        // let puntero = elemento.firstElementChild// da acceso al primer hijo

        // Solución 2:
        let elemento = document.getElementById('parrafos')
        const puntero = document.querySelector('#parrafos > p');

        elemento.insertBefore(parrafo, puntero)//inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado.
        //parentNode.insertBefore(newNode, referenceNode);
    }
}