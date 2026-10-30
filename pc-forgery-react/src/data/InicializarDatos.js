import productosIniciales from "./ProductosSeeder";
import usuariosIniciales from "./UsuariosSeeder";

export function inicializarDatos() {

    if (!localStorage.getItem("productos")) {
        localStorage.setItem(
            "productos",
            JSON.stringify(productosIniciales)
        );
    }

    if (!localStorage.getItem("usuarios")) {
        localStorage.setItem(
            "usuarios",
            JSON.stringify(usuariosIniciales)
        );
    }
}