import './Paginación.css';

function Paginacion({ paginaActual, totalPaginas, cambiarPagina }) {
    if (totalPaginas <= 1) {
        return null;
    }

    return (
        <div className="paginacion">
            <button
                onClick={() => cambiarPagina(paginaActual - 1)}
                disabled={paginaActual === 1}
            >
                Anterior
            </button>

            <span>
                Página {paginaActual} de {totalPaginas}
            </span>

            <button
                onClick={() => cambiarPagina(paginaActual + 1)}
                disabled={paginaActual === totalPaginas}
            >
                Siguiente
            </button>
        </div>
    );
}

export default Paginacion;