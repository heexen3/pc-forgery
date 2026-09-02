function validacionLogin(datosintento) {
    const usuarioGuardado = JSON.parse(localStorage.getItem('usuarios')) || [];
    
    if (usuarioGuardado.lenght === 0) {
        alert("No se encontró ningún usuario registrado. Por favor, regístrese primero.");
        return false;
    }
    // tomar valor de la caja y comparar hasta encontrar el usuario especifico
    const usuarioEncontrado = usuarioGuardado.find(usuario =>
    usuario.email === datosintento.identificador ||
    usuario.usuario === datosintento.identificador
    );

    const identificadorValido = (datosintento.identificador === usuarioEncontrado.email || datosintento.identificador === usuarioEncontrado.usuario);
    const passwordValida = (datosintento.password === usuarioEncontrado.password);

    if (identificadorValido && passwordValida) {
        if (usuarioEncontrado.rol === "admin") {
            alert("iniciado sesión como: "+usuarioEncontrado.rol);
            window.location.href = "admin.html";
        } else if (usuarioEncontrado.rol === "usuario") {
            alert("iniciado sesión como: "+usuarioEncontrado.rol);
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

if (localStorage.getItem('usuarios') === null) {
    localStorage.setItem("usuarios",JSON.stringify([{
        usuario:"admin",
        email:"admin@admin.com",
        password:"admin123",
        rol:"admin"
    }]));
}
