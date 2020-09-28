
document.write("<h3>", "Sus peliculas favoritas son: ", "</h3>");


var peliculas = [" Rocky 5 ", " Rocky 2 ", " Rocky 4 ", " Rocky 1 ", " Rocky 3 "]; 

for (var i = 0; i < peliculas.length; i++) {
    document.write("<ul>", "<li>", peliculas[i], "</li>", "</ul>");
}

document.write("<h3>", "Sus peliculas favoritas ordenadas alfabeticamente son: ", "</h3>");

document.write("<ul>", "<li>", peliculas.sort(), "</li>", "</ul>");