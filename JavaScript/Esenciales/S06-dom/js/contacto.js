window.onload = function(event) {
    
    document.getElementById('contacto').addEventListener("submit", enviarMensaje);    
    


//function enviarMensaje(event) {
//    const val = document.getElementById('nombre').value;
//    document.documentElement.innerHTML = "<p>" + val + "</p>";
 
//}
var list1 = [];
var list2 = [];
var list3 = [];

var n = 1; 
var x = 0;

function enviarMensaje(event){
    event.preventDefault();
    var AddRown = document.getElementById('tabla resultados');
	var NewRow = AddRown.insertRow(n);

    list1[x] = document.getElementById("nombre").value;
    list2[x] = document.getElementById("email").value;
    list3[x] = document.getElementById("mensaje").value;

    var cel1 = NewRow.insertCell(0);
    var cel2 = NewRow.insertCell(1);
    var cel3 = NewRow.insertCell(2);

    cel1.innerHTML = list1[x];
    cel2.innerHTML = list2[x];
    cel3.innerHTML = list3[x];

  
    n++;
	x++;
}}