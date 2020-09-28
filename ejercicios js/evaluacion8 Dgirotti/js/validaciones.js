

$('#validar').click(function (e) {

    impresion_datos();
    inicio();

});



function inicio() {
    if ($("#nombre").val() != "" && $("#apellido").val() != "" && $("#dni").val() != "" && $("#email").val() != "") {

        if ($("#dni").val().length == 8) {
            impresion_datos();
        }
    }
}


function impresion_datos() {
    var parrafo = document.getElementById('parrafo')
    //lo pongo en blanco
    parrafo.innerHTML = "";
    //pongo los datos
    parrafo.innerHTML += ("El nombre ingresado es: " + $("#nombre").val() + "<br>");
    parrafo.innerHTML += ("El apellido ingresado es: " + $("#apellido").val() + "<br>");
    parrafo.innerHTML += ("El dni ingresado es: " + $("#dni").val() + "<br>");
    parrafo.innerHTML += ("El email ingresado es: " + $("#email").val() + "<br>");
    if ($("#telefono").val() != "" && $("#telefono").val().length == 10) {
        parrafo.innerHTML += ("El telefono ingresado es: " + $("#telefono").val() + "<br>");
    }
}

$("#datos").validate({
    rules: {
        nombre: {
            required: true,
            minlength: 3,
            maxlength: 20
        },
        apellido: {
            required: true,
            minlength: 3,
            maxlength: 20
        },
        dni: {
            required: true,
            minlength: 8,
            maxlength: 8
            //digits: true

        },
        email: {
            required: true,


        },
        telefono: {
            required: false,
            minlength: 10,
            maxlength: 10,
            // digits: true
        }
    },
    messages: {
        nombre: {
            required: "El Nombre es requerido",
            minlength: $.format("Tu nombre tiene menos de {0} caracteres"),
            maxlength: $.format("{0} letras."),

        },
        apellido: {
            required: "El Apellido es requerido",
            minlength: $.format("Tu apellido tiene menos de {0} caracteres"),
            maxlength: $.format("{0} letras."),

        },

        dni: {
            required: "El DNI es requerido",
            minlength: $.format("Tu dni tiene menos de {0} numeros"),
            maxlength: $.format("Tu dni tiene mas de {0} numeros."),
            //digits: "Sólo pueden haber números en el código postal"

        },
        email: {
            required: "El Correo electronico es requerido",


        },
        telefono: {
            minlength: $.format("El numero de telefono ingresado tiene menos de {0} numeros"),
            maxlength: $.format("El numero de telefono ingresado tiene mas de {0} numeros."),
            // digits: "Sólo pueden haber números en el telefono "
        }

    }
});

