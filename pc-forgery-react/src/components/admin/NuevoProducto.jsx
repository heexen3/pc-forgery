import { useState } from "react"

function NuevoProducto() {
    const [producto, setProducto] = useState({
        nombre: "",
        categoria: "",
        precio: "",
        stock: "",
        descripcion: "",
        imagen: ""
    })

    const [crearNuevaCategoria, setCrearNuevaCategoria] = useState(false)

    // Obtener categorías existentes
    const productosGuardados = JSON.parse(
        localStorage.getItem("productos")
    ) || []

    const categorias = [...new Set(
        productosGuardados.map(producto => producto.categoria).filter(Boolean)
    )]

    function manejarCambio(event) {
        const { name, value } = event.target

        setProducto({
            ...producto,
            [name]: value
        })
    }

    function manejarCambioCategoria(event) {
        const value = event.target.value

        if (value === "crear_nueva") {
            setCrearNuevaCategoria(true)

            setProducto({
                ...producto,
                categoria: ""
            })
        } else {
            setCrearNuevaCategoria(false)

            setProducto({
                ...producto,
                categoria: value
            })
        }
    }

    function manejarEnvio(event) {
        event.preventDefault()

        if (
            !producto.nombre.trim() ||
            !producto.categoria.trim() ||
            producto.precio === "" ||
            producto.stock === ""
        ) {
            alert("Completa todos los campos obligatorios.")
            return
        }

        if (
            Number(producto.precio) <= 0 ||
            Number(producto.stock) < 0
        ) {
            alert("El precio debe ser mayor que cero y el stock no puede ser negativo.")
            return
        }

        const productosActuales = JSON.parse(
            localStorage.getItem("productos")
        ) || []

        const nuevoProducto = {
            ...producto,
            categoria: producto.categoria.trim(),
            id: productosActuales.length > 0
                ? Math.max(...productosActuales.map(producto => producto.id)) + 1
                : 1,
            precio: Number(producto.precio),
            stock: Number(producto.stock)
        }

        productosActuales.push(nuevoProducto)

        localStorage.setItem(
            "productos",
            JSON.stringify(productosActuales)
        )

        alert("Producto creado correctamente.")

        setProducto({
            nombre: "",
            categoria: "",
            precio: "",
            stock: "",
            descripcion: "",
            imagen: ""
        })

        setCrearNuevaCategoria(false)
    }

    return (
        <section className="contenido">
            <div className="admin-titulo">
                <h2>Nuevo Producto</h2>
            </div>

            <form onSubmit={manejarEnvio}>
                <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre del producto *
                    </label>

                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        value={producto.nombre}
                        onChange={manejarCambio}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="categoria" className="form-label">
                        Categoría *
                    </label>

                    <select
                        id="categoria"
                        name="categoria"
                        className="form-select"
                        value={crearNuevaCategoria ? "crear_nueva" : producto.categoria}
                        onChange={manejarCambioCategoria}
                        required
                    >
                        <option value="">Selecciona una categoría</option>

                        {categorias.map((categoria) => (
                            <option key={categoria} value={categoria}>
                                {categoria}
                            </option>
                        ))}

                        <option value="crear_nueva">
                            Crear una nueva...
                        </option>
                    </select>

                    {crearNuevaCategoria && (
                        <input
                            type="text"
                            name="categoria"
                            className="form-control mt-2"
                            placeholder="Escribe el nombre de la nueva categoría"
                            value={producto.categoria}
                            onChange={manejarCambio}
                            required
                        />
                    )}
                </div>

                <div className="mb-3">
                    <label htmlFor="precio" className="form-label">
                        Precio (CLP) *
                    </label>

                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        className="form-control"
                        min="1"
                        step="1"
                        value={producto.precio}
                        onChange={manejarCambio}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="stock" className="form-label">
                        Stock disponible *
                    </label>

                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        className="form-control"
                        min="0"
                        step="1"
                        value={producto.stock}
                        onChange={manejarCambio}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Descripción
                    </label>

                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form-control"
                        rows="3"
                        value={producto.descripcion}
                        onChange={manejarCambio}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">
                        Ruta de la imagen
                    </label>

                    <input
                        type="text"
                        id="imagen"
                        name="imagen"
                        className="form-control"
                        placeholder="/img/producto.jpg"
                        value={producto.imagen}
                        onChange={manejarCambio}
                    />
                </div>

                <button type="submit" className="btn btn-admin">
                    Crear producto
                </button>
            </form>
        </section>
    )
}

export default NuevoProducto