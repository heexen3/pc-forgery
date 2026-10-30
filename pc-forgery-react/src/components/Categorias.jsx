

function Categorias({ productos, categoriaSeleccionada, cambiarCategoria }) {

    const categorias = [...new Set(
        productos.map(producto => producto.categoria)
    )];

    return (
        <div className="categorias-botones">

            <button
                className={`boton-categoria ${categoriaSeleccionada === "Todas" ? "seleccionada" : ""}`}
                onClick={() => cambiarCategoria("Todas")}
            >
                Todas
            </button>

            {categorias.map((categoria) => (
                <button
                    key={categoria}
                    className={`boton-categoria ${categoriaSeleccionada === categoria ? "seleccionada" : ""}`}
                    onClick={() => cambiarCategoria(categoria)}
                >
                    {categoria}
                </button>
            ))}

        </div>
    );
}

export default Categorias;