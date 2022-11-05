var arr = [2, 3, [5, 7], [[11, [13], [[17]]]]];
 
//let resultado = arr.concat.apply([], arr);
//console.log(resultado);


//console.log(arr.flat(Infinity));
//

function aplanar(arr, contador){
    for (let i=0; i<arr.length; i++){
        if(Array.isArray(arr[i])){
            aplanar(arr[i], contador);
        }else{
            contador.push(arr[i]);
        }
        }
    }
let resultado = [];
aplanar(arr,resultado);
console.log (resultado);
