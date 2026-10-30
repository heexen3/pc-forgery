import { useState } from "react";
import "./Shop.css";
import ProductoCard from "./components/ProductoCard";
import Paginacion from "./components/Paginación";
import Categorias from "./components/Categorias";

function Shop() {
    // Lógica
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todas");

    const productos = JSON.parse(localStorage.getItem('productos')) || [];

    const [paginaActual, setPaginaActual] = useState(1);

    // Filtrar productos
    const productosFiltrados = categoriaSeleccionada === "Todas"
        ? productos
        : productos.filter(
            producto => producto.categoria === categoriaSeleccionada
        );

    // Paginación
    const productosPorPagina = 4;

    const indiceInicial = (paginaActual - 1) * productosPorPagina;

    const productosVisibles = productosFiltrados.slice(
        indiceInicial,
        indiceInicial + productosPorPagina
    );

    const totalPaginas = Math.ceil(
        productosFiltrados.length / productosPorPagina
    );

    // Renderizado
    return (
        <>
            <main className="tienda">
                <div className="contenedor-bienvenida">
                    <h1>Bienvenido a nuestra tienda PC Forgery.</h1>
                    <span>Aquí podrás ver toda nuestra tienda</span>
                </div>

                <aside className="categorias-contenedor">
                    <div className="productos-titulo">
                        <img src="/category-icon.svg" alt="" className="category-icon" />
                        <h2>Categorías</h2>
                    </div>

                    <Categorias
                        productos={productos}
                        categoriaSeleccionada={categoriaSeleccionada}
                        cambiarCategoria={(categoria) => {
                            setCategoriaSeleccionada(categoria);
                            setPaginaActual(1);
                        }}
                    />
                </aside>

                <section className="productos">
                    <div className="productos-titulo">
                        <img src="/shopping-bag.svg" alt="" className="shopping-bag" />
                        <h2>Productos</h2>
                    </div>

                    <div className="productos-lista">
                        {productosVisibles.map((producto) => (
                            <ProductoCard
                                key={producto.id}
                                id={producto.id}
                                nombre={producto.nombre}
                                imagen={producto.imagen}
                                precio={producto.precio.toLocaleString('es-CL')}
                            />
                        ))}
                    </div>

                    <Paginacion
                        paginaActual={paginaActual}
                        totalPaginas={totalPaginas}
                        cambiarPagina={setPaginaActual}
                    />
                </section>
            </main>
        </>
    );
}

export default Shop;