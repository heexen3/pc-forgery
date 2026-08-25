const botonMenu = document.getElementById("boton-menu");
const menuNavegacion = document.getElementById("menu-navegacion");

botonMenu.addEventListener("click", function () {
    menuNavegacion.classList.toggle("menu-abierto");
});