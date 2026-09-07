function registrarLog(accion) {
    const logs = JSON.parse(localStorage.getItem("logs")) || [];

    const usuarioActual = JSON.parse(localStorage.getItem("usuarioActual"));

    const nuevoLog = {
        usuario: usuarioActual ? usuarioActual.rol : "Desconocido",
        accion: accion,
        fecha: new Date().toLocaleString()
    };

    logs.push(nuevoLog);

    localStorage.setItem("logs", JSON.stringify(logs));
}