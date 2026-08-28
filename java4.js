function concatenar() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let resultado = document.getElementById("resultado").value;

    resultado = nombre + " " + apellido;
    document.getElementById("resultado").value = resultado;
}