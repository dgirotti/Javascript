
window.onload = function () {
    document.getElementById('validar').onclick = inicio;
}

var nombre = document.getElementById('nombre');
var apellido = document.getElementById('apellido');
var dni = document.getElementById('dni');
var tel = document.getElementById('telefono');
var email = document.getElementById('email');


function inicio() {

    nombre.addEventListener('input', validar_requerdios, false);
    apellido.addEventListener('input', validar_requerdios, false);
    email.addEventListener('input', validar_requerdios, false);
    dni.addEventListener('input', validar_dni_ingresado, false);
    validar_requerdios();
    validar_letras_nombre();
    validar_letras_apellido();
    validar_dni_ingresado();
    email.addEventListener('input', validar_email_ingresado, false);
    validar_email_ingresado();
    tel.addEventListener('input', validar_tel_ingresado, false);
    validar_tel_ingresado();

    if (nombre.value != "" && apellido.value != "" && dni.value != "" && email.value != "")

        if (validar_dni_ingresado(dni.value) == true && validar_email_ingresado(email.value) == true && validar_tel_ingresado(tel.value) == true && validar_letras_nombre(nombre.value)== true && validar_letras_apellido(apellido.value)== true) {

            impresion_datos();
        }

}


function validar_requerdios() {

    if (nombre.value.trim() == "" || apellido.value.trim() == "" || email.value.trim() == "" || dni.value.trim()== "") {

        nombre.setCustomValidity('Los campos Nombre, Apellido y Correo Electronico son requeridos');
        //nombre.reportValidity();
        nombre.style.background = '#FFDDDD';
        apellido.style.background = '#FFDDDD';
        email.style.background = '#FFDDDD';
        dni.style.background = '#FFDDDD';

    } else {
        nombre.setCustomValidity('');
        nombre.style.background = '#FFFFF';
        apellido.style.background = '#FFFFF';
        email.style.background = '#FFFFF';
        dni.style.background = '#FFFFF';
    }
}

   function validar_letras_nombre(){

    if (/^([0-9])*$/.test(nombre.value)) {

        nombre.setCustomValidity('El nombre no puede ser un numero');
        nombre.reportValidity();
        nombre.style.background = '#FFDDDD';
        return false;

    } else {
        nombre.setCustomValidity('');
        nombre.style.background = '#FFFFF';
        return true;
    }
}
function validar_letras_apellido(){
    if (/^([0-9])*$/.test(apellido.value)) {
        apellido.setCustomValidity('El apellido no puede ser un numero');
        apellido.reportValidity();
        apellido.style.background = '#FFDDDD';
        return false;
    } else {
        apellido.setCustomValidity('');
        apellido.style.background = '#FFFFF';
        return true;
        
    }
}


function validar_dni_ingresado() {

    if (validar_dni(dni.value) == false) {
        return false;
    } else {
        return true;
    }
}


function validar_email_ingresado() {

    var email = document.getElementById('email');

    if (validar_email(email.value) == false) {
        return false;
    } else {
        return true;
    }
}


function validar_tel_ingresado() {

    if (tel.value == "") {
        return true;
    } else if (!(/^\d{10}$/.test(tel.value))) {

        tel.setCustomValidity('El numero de telefono debe contener 10 digitos');
        tel.reportValidity();
        tel.style.background = '#FFDDDD';
        return false;
    } else {
        tel.setCustomValidity('');
        return true;
    }
}


function validar_email(email) {

    if (!(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(email))) {

        var email_error = document.getElementById('email');
        email_error.setCustomValidity('La dirección de email es incorrecta, ingrese uno correcto!');
        email_error.reportValidity();
        email_error.style.background = '#FFDDDD';
        return false;
    }
}


function validar_dni(dni) {
    var ex_regular_dni;
    var dni_error = document.getElementById('dni');
    ex_regular_dni = /^\d{8}(?:[-\s]\d{4})?$/;
    if (ex_regular_dni.test(dni) == true) {

    } else {
        dni_error.setCustomValidity('Dni erroneo, formato no válido');
        dni_error.reportValidity();
        dni_error.style.background = '#FFDDDD';
        return false;
    }
}


function impresion_datos() {
    var parrafo = document.getElementById('parrafo')
    parrafo.innerHTML += ("El nombre ingresado es: " + document.getElementById('nombre').value + "<br>");
    parrafo.innerHTML += ("El apellido ingresado es: " + document.getElementById('apellido').value + "<br>");
    parrafo.innerHTML += ("El dni ingresado es: " + document.getElementById('dni').value + "<br>");
    parrafo.innerHTML += ("El email ingresado es: " + document.getElementById('email').value + "<br>");
    if (document.getElementById('telefono').value != "") {
        parrafo.innerHTML += ("El telefono ingresado es: " + document.getElementById('telefono').value + "<br>");
    }
}