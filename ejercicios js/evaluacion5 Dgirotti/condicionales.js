

// Gabriel, me falto la validacion para caracteres especiales en el campo de ingresar la letra. 
// Hay otra manera de hacerlo sin usar el switch para comparar el numero con las letras del array?
// Cancelando el numero o ingresando un espacio y entrando una letra valida veo el mensaje del default.  

var letras = ['T', 'R', 'W', 'I', 'U', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'A', 'O'];

var numero_ingresado = prompt("Ingrese un numero entre 0 y 25 : ");

if (numero_ingresado < 0 || numero_ingresado > 25 || isNaN(numero_ingresado) || numero_ingresado == "") {

    alert("El número proporcionado no es válido");
}

else {

    var letra_ingresada = prompt("Ingrese una letra entre la A - Z : ");

    if (letra_ingresada != "" && isNaN(letra_ingresada) && (numero_ingresado >= 0 || numero_ingresado <= 25 || numero_ingresado != "")) {

        calcula_letra(numero_ingresado);

        if (String(res.toLowerCase()) == String(letra_ingresada.toLowerCase())) {

            var p = document.createElement('p')
            var text = document.createTextNode("El numero y la letra coinciden.");
            var texto1= document.createTextNode("FELICITACIONES HA GANADO!!!");
            var salto1 = document.createElement('br')
            p.id = 'ganador'
            p.appendChild(text);
            p.appendChild(salto1)
            p.appendChild(texto1);
            document.body.appendChild(p);
        }
        else {

            var parrafo = document.createElement('p')
            var texto = document.createTextNode("El numero y la letra no coinciden.");
            var texto2= document.createTextNode("Lo sentimos ha perdido.");
            var salto2 = document.createElement('br')
        
            parrafo.id = 'perdedor'
            parrafo.appendChild(texto);
            parrafo.appendChild(salto2)
            parrafo.appendChild(texto2)
            document.body.appendChild(parrafo);
        }
    }
    else {
        alert("No ingreso ninguna letra. Vuelva a intentarlo.");
    }
}

function calcula_letra(numero_ingresado) {

    switch (numero_ingresado) {

        case "0": res = letras[0]; break;
        case "1": res = letras[1]; break;
        case "2": res = letras[2]; break;
        case "3": res = letras[3]; break;
        case "4": res = letras[4]; break;
        case "5": res = letras[5]; break;
        case "6": res = letras[6]; break
        case "7": res = letras[7]; break;
        case "8": res = letras[8]; break;
        case "9": res = letras[9]; break;
        case "10": res = letras[10]; break;
        case "11": res = letras[11]; break;
        case "12": res = letras[12]; break;
        case "13": res = letras[13]; break;
        case "14": res = letras[14]; break;
        case "15": res = letras[15]; break;
        case "16": res = letras[16]; break;
        case "17": res = letras[17]; break;
        case "18": res = letras[18]; break;
        case "19": res = letras[19]; break;
        case "20": res = letras[20]; break;
        case "21": res = letras[21]; break;
        case "22": res = letras[22]; break;
        case "23": res = letras[23]; break;
        case "24": res = letras[24]; break;
        case "25": res = letras[25]; break;
        default:
            var pa = document.createElement('p')
            var def_texto = document.createTextNode("No tenemos informacion para mostrar.");
            pa.id = 'def'
            pa.appendChild(def_texto);
            document.body.appendChild(pa);

    }

}



