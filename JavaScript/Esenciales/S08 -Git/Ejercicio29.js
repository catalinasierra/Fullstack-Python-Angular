window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", mostrarFila);

    function mostrarFila(event) {
        //let nodo = document.querySelectorAll(".columna1")
        let nodo = document.getElementById('columna1')
        
        while (nodo != null) {
            alert(nodo.childNodes[0].nodeValue) //Nodos hijos hijos de <html>
            nodo = nodo.nextElementSibling // solo lectura devuelve el siguiente elemento en el mismo nivel de árbol.
        }
    }
}