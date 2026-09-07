function mostrarHistorial() {

    const logs = JSON.parse(localStorage.getItem("logs")) || [];
    const historialBody = document.getElementById("historial-body");

    for (const log of logs) {

        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>${log.fecha}</td>
            <td>${log.accion}</td>
            <td>${log.usuario}</td>
        `;

        historialBody.appendChild(fila);
    }
}

mostrarHistorial();