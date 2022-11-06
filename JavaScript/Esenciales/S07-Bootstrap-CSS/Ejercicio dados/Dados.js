window.onload = function (event) {

    document.getElementById('Tirar').addEventListener("click", TirarDados);

function TirarDados(event){
    setTimeout(function(event){
        var numeroaletoreo1= Math.floor(Math.random()*6)+1;
        var numeroaletoreo2= Math.floor(Math.random()*6)+1;

        document.querySelector(".img1").setAttribute("src", "dado"+ numeroaletoreo1 + ".png");
        document.querySelector(".img2").setAttribute("src", "dado" + numeroaletoreo2 + ".png");

        
    });

}}