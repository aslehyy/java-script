function calcularPresupuesto() { 
    const procesador = parseInt(document.getElementById("procesador").value);
    const disco = parseInt(document.getElementById("disco").value);
    const monitor = parseInt(document.getElementById("monitor").value);
    const total = procesador + monitor + disco;
    document.getElementById("presupuesTotal").value = "$" + total;

}