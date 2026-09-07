document.querySelectorAll(".boton-categoria").forEach(function(button) {
    button.addEventListener("click", function(event) {
        console.log("Botón de categoría clickeado");
        alert("botón de categoría clickeado");
        registrarLog("El usuario hizo clic en Categorías");
    });
});