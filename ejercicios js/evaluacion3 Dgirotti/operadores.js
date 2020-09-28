document.write("<h3>", "El resultado de su operacion matematica es: ", "</h3>")

var numeros = [];

for (var i = 0; i < 2; i++) {

      numeros[i] = prompt("Ingrese dos numeros entre 0 y 100: ");

      numeros[i] = parseInt(numeros[i]);

}
if (isNaN(numeros[0]) || isNaN(numeros[1])) {
      document.write("<p id = 'alerta'>",'Al menos uno de los dos valores ingresados no es numérico.', "</p>");
}
else {
      var suma = numeros[0] + numeros[1];
      var resta = numeros[0] - numeros[1];
      var producto = numeros[0] * numeros[1];
      var division = numeros[0] / numeros[1];

      document.write("<ul>", "<li>", "<p>", "La suma de " + numeros[0], " + " + numeros[1], " es igual a: ", suma, "</p>", "</li>", "</ul>");
      document.write("<ul>", "<li>", "<p>", "La resta de " + numeros[0], " - " + numeros[1], " es igual a: ", resta, "</p>", "</li>", "</ul>");
      document.write("<ul>", "<li>", "<p>", "El producto de " + numeros[0], " x " + numeros[1], " es igual a: ", producto, "</p>", "</li>", "</ul>");
      document.write("<ul>", "<li>", "<p>", "La division de " + numeros[0], " / " + numeros[1], " es igual a: ", division, "</p>", "</li>", "</ul>");

}