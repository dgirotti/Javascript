

var jugador1 = document.getElementById('jugador1');
var jugador2 = document.getElementById('jugador2');


function inicio() {

    document.getElementById('jugardenuevo').style.display = "none";
    jugador1.addEventListener('input', validar_requeridos, false);
    jugador2.addEventListener('input', validar_requeridos, false);
    validar_requeridos();

}


function validar_requeridos() {
    var eleccion1 = jugador1.value;
    var eleccion2 = jugador2.value;

    if (eleccion1.trim() == "" || eleccion2.trim() == "") {
        jugador1.setCustomValidity('Los campos no pueden estar vacios. Haga click en jugar nuevamente para reiniciar la partida' );
        jugador1.reportValidity();
        jugador1.style.background = '#FFDDDD';
        jugador2.style.background = '#FFDDDD';
        document.getElementById('ganador').src = "imagenes/error.png";
        document.getElementById('jugardenuevo').style.display = "";



    } else {
        jugador1.setCustomValidity('');
        jugador1.style.background = '#FFFFF';
        jugador2.style.background = '#FFFFF';
        validar_datos(eleccion1,eleccion2);
    }
}

function validar_datos(eleccion1,eleccion2){
    if (String(eleccion1.toLowerCase()) == "piedra" || String(eleccion1.toLowerCase()) == "papel" || String(eleccion1.toLowerCase()) == "tijera") {
        if (String(eleccion2.toLowerCase()) == "piedra" || String(eleccion2.toLowerCase()) == "papel" || String(eleccion2.toLowerCase()) == "tijera") {

            comparar(eleccion1, eleccion2);

        } else {
            jugador2.setCustomValidity('Solo Piedra, Papel o Tijera son validos. Haga click en jugar nuevamente para reiniciar la partida');
            jugador2.reportValidity();
            document.getElementById('ganador').src = "imagenes/error.png"
            document.getElementById('jugardenuevo').style.display = "";
        }
    } else {
        jugador1.setCustomValidity('Solo Piedra, Papel o Tijera son validos. Haga click en jugar nuevamente para reiniciar la partida');
        jugador1.reportValidity();
        document.getElementById('ganador').src ="imagenes/error.png";
        document.getElementById('jugardenuevo').style.display = "";
    }

}


function comparar(eleccion1, eleccion2) {
    if (String(eleccion1.toLowerCase()) === String(eleccion2.toLowerCase())) {
        var parrafo = document.getElementById('parrafo')
        parrafo.innerHTML = "";
        parrafo.innerHTML += ("¡Es un empate! Ambos Jugadores eligieron: " + eleccion1 + "<br>");
        document.getElementById('ganador').src = "imagenes/juego2.png "
        document.getElementById('jugardenuevo').style.display = "";

    }
    else {
        if (String(eleccion1.toLowerCase()) === "piedra") {
            if (String(eleccion2.toLowerCase()) === "tijera") {
                var parrafo = document.getElementById('parrafo')
                parrafo.innerHTML = "";
                parrafo.innerHTML += ("GANO el Jugador 1 que eligio: " + eleccion1 + "<br>");
                parrafo.innerHTML += ("El Jugador 2 eligio: " + eleccion2 + "<br>");
                parrafo.innerHTML += ("Piedra rompe Tijera!! " + "<br>");
                document.getElementById('ganador').src = "imagenes/piedra.png "
                document.getElementById('jugardenuevo').style.display = "";

            }
            else if (String(eleccion2.toLowerCase()) === "papel") {
                var parrafo = document.getElementById('parrafo')
                parrafo.innerHTML = "";
                parrafo.innerHTML += ("GANO el Jugador 2 que eligio: " + eleccion2 + "<br>");
                parrafo.innerHTML += ("El Jugador 1 eligio: " + eleccion1 + "<br>");
                parrafo.innerHTML += ("Papel envuelve Piedra!! " + "<br>");
                document.getElementById('ganador').src = "imagenes/papel.png"
                document.getElementById('jugardenuevo').style.display = "";

            }

        }
        else if (String(eleccion1.toLowerCase()) === "papel") {
            if (String(eleccion2.toLowerCase()) === "piedra") {
                var parrafo = document.getElementById('parrafo')
                parrafo.innerHTML = "";
                parrafo.innerHTML += ("GANO el Jugador 1 que eligio: " + eleccion1 + "<br>");
                parrafo.innerHTML += ("El Jugador 2 eligio: " + eleccion2 + "<br>");
                parrafo.innerHTML += ("Papel envuelve Piedra!! " + "<br>");
                document.getElementById('ganador').src = "imagenes/papel.png"
                document.getElementById('jugardenuevo').style.display = "";

            }
            else if (String(eleccion2.toLowerCase()) === "tijera") {
                var parrafo = document.getElementById('parrafo')
                parrafo.innerHTML = "";
                parrafo.innerHTML += ("GANO el Jugador 2 que eligio: " + eleccion2 + "<br>");
                parrafo.innerHTML += ("El Jugador 1 eligio: " + eleccion1 + "<br>");
                parrafo.innerHTML += ("Tijera corta Papel!! " + "<br>");
                document.getElementById('ganador').src = "imagenes/tijera.png"
                document.getElementById('jugardenuevo').style.display = "";

            }

        }
        else {
            if (String(eleccion1.toLowerCase()) === "tijera") {
                if (String(eleccion2.toLowerCase()) === "piedra") {
                    var parrafo = document.getElementById('parrafo')
                    parrafo.innerHTML = "";
                    parrafo.innerHTML += ("GANO el Jugador 2 que eligio: " + eleccion2 + "<br>");
                    parrafo.innerHTML += ("El Jugador 1 eligio: " + eleccion1 + "<br>");
                    parrafo.innerHTML += ("Piedra rompe Tijera!! " + "<br>");
                    document.getElementById('ganador').src = "imagenes/piedra.png"
                    document.getElementById('jugardenuevo').style.display = "";

                }
                else if (String(eleccion2.toLowerCase()) === "papel") {
                    var parrafo = document.getElementById('parrafo')
                    parrafo.innerHTML = "";
                    parrafo.innerHTML += ("GANO el Jugador 1 que eligio: " + eleccion1 + "<br>");
                    parrafo.innerHTML += ("El Jugador 2 eligio: " + eleccion2 + "<br>");
                    parrafo.innerHTML += ("Tijera corta Papel!! " + "<br>");
                    document.getElementById('ganador').src = "imagenes/tijera.png"
                    document.getElementById('jugardenuevo').style.display = "";

                }
            }
        }
    }
}


