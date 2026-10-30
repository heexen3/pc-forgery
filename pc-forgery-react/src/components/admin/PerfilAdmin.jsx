import { useEffect, useState } from "react"
import {
    obtenerPerfilAdmin,
    guardarPerfilAdmin
} from "./PerfilAdmin.js"

function PerfilAdmin() {
    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [password, setPassword] = useState("")
    const [mensaje, setMensaje] = useState("")

    useEffect(() => {
        const usuarioActual = obtenerPerfilAdmin()

        if (usuarioActual) {
            setNombre(usuarioActual.nombre || usuarioActual.usuario || "")
            setCorreo(usuarioActual.correo || usuarioActual.email || "")
        } else {
            setMensaje("No se encontró una sesión activa.")
        }
    }, [])

    function guardarCambios(e) {
        e.preventDefault()

        const resultado = guardarPerfilAdmin(nombre, correo, password)

        setMensaje(resultado.mensaje)

        if (resultado.correcto) {
            const usuarioActual = obtenerPerfilAdmin()

            if (usuarioActual) {
                setNombre(usuarioActual.nombre || usuarioActual.usuario || "")
                setCorreo(usuarioActual.correo || usuarioActual.email || "")
            }

            setPassword("")
        }
    }

    return (
        <section className="contenido">
            <div className="admin-titulo">
                <h2>Perfil del administrador</h2>
            </div>

            <div className="p-3">
                <form onSubmit={guardarCambios}>
                    <div className="mb-3">
                        <label htmlFor="perfilNombre" className="form-label">
                            Nombre completo
                        </label>

                        <input
                            type="text"
                            id="perfilNombre"
                            className="form-control"
                            value={nombre}
                            onChange={e => setNombre(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="perfilCorreo" className="form-label">
                            Correo electrónico
                        </label>

                        <input
                            type="email"
                            id="perfilCorreo"
                            className="form-control"
                            value={correo}
                            onChange={e => setCorreo(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="perfilPassword" className="form-label">
                            Nueva contraseña
                        </label>

                        <input
                            type="password"
                            id="perfilPassword"
                            className="form-control"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Dejar vacío para mantener la actual"
                            minLength={6}
                        />
                    </div>

                    {mensaje && (
                        <p role="status">{mensaje}</p>
                    )}

                    <button type="submit" className="btn btn-admin">
                        Guardar cambios
                    </button>
                </form>
            </div>
        </section>
    )
}

export default PerfilAdmin