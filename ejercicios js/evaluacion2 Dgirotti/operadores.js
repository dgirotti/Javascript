document.write("<h3>", "El resultado de su operacion matematica es: ", "</h3>")

var numeros = [];

for (var i = 0; i < 2; i++) {

      numeros[i] = prompt("Ingrese dos numeros entre 0 y 100: ");
    
      numeros[i]  = parseInt (numeros [i]); 

} 

var suma = numeros[0] + numeros[1]; 
var resta = numeros[0] - numeros[1]; 
var producto = numeros[0] * numeros[1]; 
var division = numeros[0] % numeros[1]; 

document.write("<ul>","<li>","<p>", "La suma de sus numero es: ",suma,"</p>","</li>","</ul>");
document.write("<ul>","<li>","<p>", "La resta de sus numero es: ",resta,"</p>","</li>","</ul>");
document.write("<ul>","<li>","<p>", "El producto de sus numero es: ",producto,"</p>","</li>","</ul>");
document.write("<ul>","<li>","<p>", "La division de sus numero es: ",division,"</p>","</li>","</ul>");