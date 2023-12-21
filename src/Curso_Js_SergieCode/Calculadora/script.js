
// esta funcion agrega a la pantalla el valor del boton que toquemos
function agregar(valor) {
    document.getElementById("pantalla").value += valor
}


// esta accion vacia la pantalla
function borrar() {
   document.getElementById("pantalla").value = ""
}

// el metodo EVAL sirve para calcular los valores de la pantalla
function calcular() {
    const valorPantalla = document.getElementById("pantalla").value
    const resultado = eval(valorPantalla)
    document.getElementById("pantalla").value = resultado
}