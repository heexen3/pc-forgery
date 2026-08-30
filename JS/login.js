function validacionLogin(datosintento) {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarios'));
    
    if (!usuarioGuardado) {
        alert("No se encontró ningún usuario registrado. Por favor, regístrese primero.");
        return false;
    }

    const identificadorValido = (datosintento.identificador === usuarioGuardado.email || datosintento.identificador === usuarioGuardado.usuario);
    const passwordValida = (datosintento.password === usuarioGuardado.password);

    if (identificadorValido && passwordValida) {
        if (usuarioGuardado.rol === "admin") {
            window.location.href = "admin.html";
        } else if (usuarioGuardado.rol === "usuario") {
            window.location.href = 'index.html';
        } else {
            alert("Rol de usuario desconocido. Por favor, contacte al administrador.");
        }
        return true;
    } else {
        alert("Usuario o contraseña incorrectos. Por favor, inténtelo de nuevo.");
        return false;
    }
}
// Para capturar los datos temporales
document.getElementById("btnInicio").addEventListener("click",function(event) {

    event.preventDefault(); //para evitar que la página se recargue

// datos temporales para la validación del login
const datosintento = {
    "identificador": document.getElementById("usuario").value.trim(),
    "password": document.getElementById("password").value.trim()
};

// Mensaje para el programador
console.log("Intentando ingresar con:", datosintento);
console.log("Usuario guardado en memoria:", JSON.parse(localStorage.getItem('usuarios')));

validacionLogin(datosintento);
});
