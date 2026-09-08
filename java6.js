function mostrarPrecio() {
    const precio = document.getElementById("pizzas").value;
    const resultadoInput= document.getElementById("precioText");
    resultadoInput.value = "$ " + precio;
}