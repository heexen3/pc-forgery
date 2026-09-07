document.getElementById("btn-localstorage").addEventListener("click",function(event) {
    localStorage.clear();
    console.log("Limpiar local storage");
    alert("Limpiar local storage");
    registrarLog("El usuario hizo clic en Limpiar LocalStorage");
});

document.getElementById("limpiar-historial").addEventListener("click", function(event) {
    localStorage.removeItem("logs");
    console.log("Limpiar historial");
    alert("Limpiar historial");
    registrarLog("El usuario hizo clic en Limpiar Historial");
});
