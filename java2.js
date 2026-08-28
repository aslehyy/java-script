function calcularCubo() {
    let valor = document.getElementById("numero").value;
    let numero = parseInt(valor);

    if (isNaN(numero)) {
        alert ("Por favor, ingrese un número válido.");
        return;
    }

    let cubo = Math.pow(numero, 3);
    alert("El cubo de " + numero + " es: " + cubo);
}