
import { useSearchParams } from "react-router-dom"
import "./Product.css"
import Resena from "./components/Resena.jsx"
import VentanaColapsable from './components/VentanaColapsable';

function Product() {
    // Lógica
    const [searchParams] = useSearchParams()
    const id = Number(searchParams.get("id"))
    console.log(id)

    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const producto = productos.find(function(producto) {
        return producto.id === id;
    });

    if (!producto) {
        return (
            <main className="producto-contenedor">
                <section className="producto">
                    <h1>Producto no encontrado</h1>
                    <p>El producto que buscas no existe.</p>
                </section>
            </main>
        )
    }

    // Renderizado
    return (
        <main className="producto-contenedor">

            <VentanaColapsable
                titulo={producto.nombre}
                className="producto"
            >
                <div className="producto-imagen">
                    <img
                        src={producto.imagen}
                        alt={producto.nombre}
                    />

                    <p className="producto-descripcion">
                        {producto.descripcion}
                    </p>
                </div>

                <div className="producto-detalles">
                    <p className="producto-precio">
                        ${producto.precio.toLocaleString('es-CL')}
                    </p>

                    <button className="producto-agregar-carrito">
                        Agregar al carrito
                    </button>
                </div>
            </VentanaColapsable>

            <VentanaColapsable
                titulo="Reseñas del producto"
                className="producto-reseña"
            >
                <div className="reseñas">
                    <Resena
                        usuario="Adolfo_Hernandez"
                        texto="¡NEIN NEIN NEIN!"
                    />

                    <Resena
                        usuario="Usuario2"
                        texto="Reseña del producto aquí."
                    />
                </div>
            </VentanaColapsable>

        </main>
    )
}

export default Product
