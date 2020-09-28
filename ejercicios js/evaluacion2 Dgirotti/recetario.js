
/* OPCION 1 -> USANDO UN BUCLE FOR PARA PEDIR LOS 3 INGREDIENTES. 

document.write("<h3>", "Su ensalada posee los siguientes ingredientes: ", "</h3>")

for (var ing = 1; ing < 4; ing++) {
    var ingredientes = prompt("Ingrese los 3 ingredientes de su ensalada: ");


    document.write("<ul>","<li>",ingredientes,"</li>","</ul>");

} */

/* OPCION 2 -> USANDO 3 VARIABLES DISTINTAS PARA CADA INGREDIENTE DE LA ENSALADA */

document.write("<h3>", "Su ensalada posee los siguientes ingredientes: ", "</h3>");

var ing1 = prompt("Ingrese el primer ingrediente");
var ing2 = prompt("Ingrese el segundo ingrediente");
var ing3 = prompt("Ingrese el tercer ingrediente");

document.write("<ul>", "<li>", ing1, "</li>", "<li>" + ing2, "</li>", "<li>" + ing3, "</li>", "</ul>");

