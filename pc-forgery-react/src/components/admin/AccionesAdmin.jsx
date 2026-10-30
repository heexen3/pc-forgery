function AccionesAdmin() {

    // Borrar todo el LocalStorage
    function borrarLocalStorage() {
        const confirmar = window.confirm(
            '¿Estás seguro de que deseas borrar todo el LocalStorage?'
        );

        if (confirmar) {
            localStorage.clear();
            window.location.reload();
        }
    }

    // Limpiar historial
    function limpiarHistorial() {
        const confirmar = window.confirm(
            '¿Estás seguro de que deseas limpiar el historial?'
        );

        if (confirmar) {
            localStorage.removeItem('logs');
            alert('Historial eliminado correctamente.');
        }
    }

    return (
        <div className="contenido-botones">
            <button
                className="btn btn-admin"
                onClick={borrarLocalStorage}
            >
                Borrar LocalStorage
            </button>
        
            <button
                className="btn btn-admin"
                onClick={limpiarHistorial}
            >
                Limpiar Historial
            </button>
        </div>
    );
}

export default AccionesAdmin;