// se usa math.floor para que redondee hacia abajo asi incluye el 0 y el 100
//se le suma 1 para que llegue a dichos numeros
let numeroAzar = Math.floor(Math.random()*100) + 1

let numeroEntrada = document.getElementById("numeroEntrada")
let mensaje = document.getElementById("mensaje")


// esta accion se ejecuta cuando se toque click en el boton
function check() {
    let numeroIngresado = parseInt(numeroEntrada.value);
    
    // condicional "O" que evalua si se cumple alguna de las 3 opciones para devolver error
    if (numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)) {
        
        // si alguna de las condiciones da true, devuelve el mensaje de error
        mensaje.textContent = "Introduzca un numero valido entre 1 y 100"
        return; // termina la funcion
    }

    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = "¡Felicitaciones! Acertaste el numero";
        mensaje.style.color = "green";
        numeroEntrada.disable = true
    
    }else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = "¡Mas alto! El numero es mayor al que ingresaste";
        mensaje.style.color = "red";

    }else {
        mensaje.textContent = "¡Mas bajo! El numero es menor al que ingresaste";
        mensaje.style.color = "red";
    }


}