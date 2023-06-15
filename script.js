function añadirnumero(num) {
    document.getElementById('resultado').value += num;
}

function borrar() {
    document.getElementById('resultado').value = "";
}

function calcular() {
    let operacion = document.getElementById('resultado').value;
    let resultado = eval(operacion);
    document.getElementById('resultado').value = resultado;
}