function validacionRegistro() {
    let usuario = document.getElementById("usuario").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm_password").value;

    const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.-]).{6,}$/;

    const regexEmail = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|duocuc\.cl)$/;

    const regexUsuario = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{3,}$/;
        // Regex, validaciones de contraseña, correo y usuario
        if (!regexPassword.test(password)) {
            alert("La contraseña debe tener al menos 6 caracteres, una mayúscula, una minúscula, un número y un carácter especial.");
            return false;
        }

        if (!regexEmail.test(email)) {
            alert("El correo debe ser Gmail, Outlook o Duoc UC.");
            return false;
        }

        if (!regexUsuario.test(usuario)) {
            alert("El usuario debe tener al menos 3 caracteres, contener al menos una letra y no tener caracteres especiales.");
            return false;
        }

        // validaciones necesarias
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

    listaUsuarios.push(usuarios)

    localStorage.setItem("usuarios", JSON.stringify(listaUsuarios))
    alert("¡Usuario registrado con éxito!");
    registrarLog("El usuario " + usuario + " se registró con éxito.");
    window.location.href = 'login.html';
    alert("Validar registro");
    return false;
}
