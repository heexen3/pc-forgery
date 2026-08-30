function validacionRegistro() {
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    if (usuario.length < 3 ) {
        alert("El nombre de usuario debe tener al menos 3 caracteres.");
        return false;
        }

        if (password.length < 6) {
            alert("La contraseña debe tener al menos 6 caracteres.");
            return false;
        }

        if (password !== confirmPassword) {
            alert("Las contraseñas no coinciden.");
            return false;
        }

    const usuarios={
        "usuario":usuario,
        "email":email,
        "password":password,
        "rol":"usuario"
    }

    const listaUsuarios = JSON.parse(localStorage.getItem("usuarios")) || []

    alert(JSON.stringify(usuarios))
    listaUsuarios.push(usuarios)

    localStorage.setItem("usuarios", JSON.stringify(usuarios))
    alert("¡Usuario registrado con éxito!");
    return true
}
    