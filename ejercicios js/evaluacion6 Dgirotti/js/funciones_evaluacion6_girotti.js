
window.onload = function () {
    document.getElementById("clickeable").onclick = calcular_iva;
}


function calcular_iva() {
    
    const iva = 1.21;

    numero_ingresado = parseFloat(prompt("Ingrese un numero: "));

    if (numero_ingresado < 0 || isNaN(numero_ingresado) || numero_ingresado == "") {

        alert("El número proporcionado no es válido");
    }

    else {

        precio = numero_ingresado * iva;

        var p = document.createElement('p')
        var text = document.createTextNode("El valor total sin IVA es: " + numero_ingresado.toFixed(2));
        p.id = 'siniva'
        p.appendChild(text);
        document.body.appendChild(p);

        var pa = document.createElement('p')
        var texto = document.createTextNode("El valor total con IVA es: " + precio.toFixed(2));
        pa.id = 'coniva';
        pa.appendChild(texto);
        document.body.appendChild(pa);
    }
}
