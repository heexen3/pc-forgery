const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));
document.getElementById("nombre-usuario").textContent = usuarioActual.usuario
