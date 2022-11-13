window.onload = function (event) {

    document.getElementById('Boton').addEventListener("click", palindrome);
    let str = document.getElementById('posicion').value;

function palindrome(srt) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          alert (false);
      }
    }
    alert (true);
   }
}
