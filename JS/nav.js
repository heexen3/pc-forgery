const botonMenu = document.getElementById("boton-menu");
const menuNavegacion = document.getElementById("menu-navegacion");

botonMenu.addEventListener("click", function () {
    menuNavegacion.classList.toggle("menu-abierto");
});
// Agarro los id
const loginLink = document.getElementById("login-link");
const usuarioLink = document.getElementById("usuario-link");
const logoutLink = document.getElementById("logout-link");
const adminLink = document.getElementById("admin-link");
const adminHistorial = document.getElementById("admin-historial-link");

// Comprobamos si existe una sesión
const usuario = JSON.parse(localStorage.getItem("usuarioActual"));

if (usuario) {

    // Ocultar Login
    loginLink.style.display = "none";

    // Mostramos cerrar sesión
    logoutLink.style.display = "inline";

    // Si es administrador
    if (usuario.rol === "admin") {
        adminLink.style.display = "inline";
        adminHistorial.style.display = "inline";
    } 
    // Si es usuario normal
    else {
        usuarioLink.style.display = "inline";
    }
}

// Cerrar sesión
logoutLink.addEventListener("click", function (e) {
    e.preventDefault();

    localStorage.removeItem("usuarioActual");

    window.location.href = "index.html";
});