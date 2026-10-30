
import { useRef, useState } from 'react';
import VentanaColapsable from './components/VentanaColapsable';
import './Usuario.css';

// Validar nombre de usuario
function validarNombreUsuario(nombre) {
    const expresion = /^[a-zA-Z][a-zA-Z0-9_]{2,19}$/;
    return expresion.test(nombre);
}

// Validar descripción
function validarDescripcion(descripcion) {
    return descripcion.length <= 160;
}

function Usuario() {

    // Obtener usuario que inició sesión
    const [usuarioActual, setUsuarioActual] = useState(
        JSON.parse(localStorage.getItem('usuarioActual'))
    );

    const inputFoto = useRef(null);

    if (!usuarioActual) {
        return (
            <main className="contenido">
                <h2>No hay ningún usuario iniciado sesión.</h2>
            </main>
        );
    }

    const descripcion = usuarioActual.descripcion || 'Este usuario aún no tiene una descripción.';

    // Guardar cambios
    function guardarCambios(usuarioActualizado) {
        setUsuarioActual(usuarioActualizado);

        localStorage.setItem(
            'usuarioActual',
            JSON.stringify(usuarioActualizado)
        );

        const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

        const listaActualizada = usuarios.map(usuario =>
            usuario.email === usuarioActual.email
                ? usuarioActualizado
                : usuario
        );

        localStorage.setItem('usuarios', JSON.stringify(listaActualizada));
    }

    // Cambiar nombre
    function cambiarNombre() {
        const nuevoNombre = prompt(
            'Ingresa tu nuevo nombre de usuario:',
            usuarioActual.usuario
        );

        if (nuevoNombre === null) return;

        if (!validarNombreUsuario(nuevoNombre)) {
            alert('El nombre debe tener entre 3 y 20 caracteres, comenzar con una letra y contener solo letras, números o guion bajo.');
            return;
        }

        guardarCambios({
            ...usuarioActual,
            usuario: nuevoNombre
        });
    }

    // Cambiar descripción
    function cambiarDescripcion() {
        const nuevaDescripcion = prompt(
            'Ingresa tu nueva descripción:',
            usuarioActual.descripcion || ''
        );

        if (nuevaDescripcion === null) return;

        if (!validarDescripcion(nuevaDescripcion)) {
            alert('La descripción no puede superar los 160 caracteres.');
            return;
        }

        guardarCambios({
            ...usuarioActual,
            descripcion: nuevaDescripcion
        });
    }

    // Cambiar foto
    function cambiarFoto(event) {
        const archivo = event.target.files[0];

        if (!archivo) return;

        if (!archivo.type.startsWith('image/')) {
            alert('Selecciona un archivo de imagen válido.');
            event.target.value = '';
            return;
        }

        const lector = new FileReader();

        lector.onload = function () {
            guardarCambios({
                ...usuarioActual,
                foto: lector.result
            });
        };

        lector.readAsDataURL(archivo);
        event.target.value = '';
    }

    return (
        <main className="contenido">

            <VentanaColapsable
                titulo="Perfil de usuario"
                className="usuario-ventana"
            >
                <div className="usuario-titulo">
                    <h2>
                        Usuario: <span id="nombre-usuario">{usuarioActual.usuario}</span>
                    </h2>

                    <button
                        type="button"
                        className="boton-editar"
                        onClick={cambiarNombre}
                    >
                        <img src="/editar.svg" alt="Editar nombre" />
                    </button>
                </div>

                <div className="contenedor-usuario">

                    <div className="usuario-foto">

                        <button
                            type="button"
                            className="boton-cambiar-foto"
                            title="Cambiar foto"
                            onClick={() => inputFoto.current.click()}
                        >
                            <img
                                src={usuarioActual.foto || "/usuario-generico.jpg"}
                                alt="Foto de perfil"
                                id="foto-perfil"
                                className="foto-perfil"
                            />

                            <img
                                src="/editar.svg"
                                alt="Editar foto"
                                className="icono-editar-foto"
                            />
                        </button>

                        <input
                            type="file"
                            accept="image/*"
                            ref={inputFoto}
                            onChange={cambiarFoto}
                            hidden
                        />

                    </div>

                    <div className="usuario-descripcion">

                        <div className="usuario-dato usuario-dato-descripcion">
                            <p><strong>Descripción:</strong></p>

                            <p className="usuario-texto-descripcion">
                                {descripcion}
                            </p>

                            <button
                                type="button"
                                className="boton-editar"
                                onClick={cambiarDescripcion}
                            >
                                <img src="/editar.svg" alt="Editar descripción" />
                            </button>
                        </div>

                    </div>

                </div>
            </VentanaColapsable>

        </main>
    );
}

export default Usuario;
