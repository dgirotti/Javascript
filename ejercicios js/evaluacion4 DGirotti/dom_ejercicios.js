
/* 1- Aplicar color de fondo #fcf79f al documento.*/

document.body.style.backgroundColor = '#fcf79f';


/* 2- Cambiar el color de todos los párrafos (etiqueta p) a verde (#0ca001).*/

var parrafos = document.getElementsByTagName('p');

for (var i = 0; i < parrafos.length; i++) {


    parrafos[i].style.color = '#0ca001';


}


/* 3- Aumentar el tamaño de la fuente a 24px, solo del elemento con id "destacado".*/

var aumento_fuente = document.getElementById('destacado');

aumento_fuente.style.fontSize = '24px';


/* 4- Cambiar la familia tipográfica por Arial a los títulos (etiqueta h2).*/

var titulos = document.getElementsByTagName('h2');

for (var i = 0; i < titulos.length; i++) {
    titulos[i].style.fontFamily = 'Arial';

}


/* 5- Crear un vínculo con la referencia "https://www.lipsum.com".


var a = document.createElement('a');
var linkText = document.createTextNode("Lipsum");
a.appendChild(linkText);
a.title = "lipsum";
a.href = "https://www.lipsum.com";
a.style.fontFamily = 'Arial';
a.style.fontSize = '18px';
a.style.color = 'red';
document.body.appendChild(a);*/

var footer = document.createElement('footer')
var a = document.createElement('a');
var linkText = document.createTextNode("Lipsum");
footer.appendChild(a);
a.appendChild(linkText);
a.title = "lipsum";
a.href = "https://www.lipsum.com";
a.style.fontFamily = 'Arial';
a.style.fontSize = '18px';
a.style.color = '#FFFFFF';
document.body.appendChild(footer);








