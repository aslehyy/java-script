function compararNumeros() {
    let valor1 = document.getElementById("numero1").value;
    let valor2 = document.getElementById("numero2").value;

    if (valor1 > valor2) {
        alert("El primer número es mayor.");
    } else if (valor2 > valor1) {
        alert("El segundo número es mayor.");
    } else {
        alert("Ambos números son iguales.");
    }
}
