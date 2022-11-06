window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", insertarParrafoAlPrincipio);

    function insertarParrafoAlPrincipio(event) {
        let parrafo = document.createElement('p')
        let texto = document.createTextNode('Agregar nuevo párrafo')
        parrafo.appendChild(texto)
        let elemento = document.getElementById('parrafos')
        let puntero = elemento.firstElementChild// da acceso al primer hijo
        elemento.insertBefore(parrafo, puntero)//inserta un nodo antes del nodo de referencia como hijo de un nodo padre indicado.
        //parentNode.insertBefore(newNode, referenceNode);
    }
}