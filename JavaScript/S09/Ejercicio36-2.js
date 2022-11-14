window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", esPalindromo);
    

    function esPalindromo(event){
        let str = document.getElementById('frase').value;
        let ultimo = str.length-1;
        if(str[0] != str[ultimo]){
            return false;
        }
        if (str.length() < 2){
            return true;
        }
        let subcadena= str.substr(1, ultimo-1);
        if (esPalindromo(subcadena)){
            return true;
        }
        return false; 

    }

}
