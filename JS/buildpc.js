// Secuencia de categorías del asistente (RF-07)
const PASOS = [
    { key: "plataforma", label: "Plataforma" },
    { key: "procesadores", label: "1. CPU" },
    { key: "placas", label: "2. Placa Madre" },
    { key: "ram", label: "3. RAM" },
    { key: "gpu", label: "4. GPU" },
    { key: "almacenamiento", label: "5. Disco" },
    { key: "fuentes", label: "6. Fuente" },
    { key: "gabinetes", label: "7. Gabinete" }
];

// Estado global de la construcción
const estadoArmado = {
    pasoActual: 0,
    plataforma: null, // "AMD" o "Intel"
    seleccion: {
        procesadores: null,
        placas: null,
        ram: null,
        gpu: null,
        almacenamiento: null,
        fuentes: null,
        gabinetes: null
    }
};

function cambiarPaso(direccion) {
    const nuevoPaso = estadoArmado.pasoActual + direccion;
    if (nuevoPaso >= 0 && nuevoPaso < PASOS.length) {
        estadoArmado.pasoActual = nuevoPaso;
        actualizarInterfaz();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    inicializarAsistente();
});

function inicializarAsistente() {
    renderizarPasosNav();
    cargarPasoActual();

    document.getElementById("btn-prev").addEventListener("click", () => cambiarPaso(-1));
    document.getElementById("btn-next").addEventListener("click", () => cambiarPaso(1));
    document.getElementById("btn-reset").addEventListener("click", reiniciarBuild);
}

// 1. Dibuja los botones de navegación superior
function renderizarPasosNav() {
    const nav = document.getElementById("wizard-steps");
    nav.innerHTML = "";

    PASOS.forEach((paso, index) => {
        const btn = document.createElement("button");
        btn.className = `step-tab ${index === estadoArmado.pasoActual ? "active" : ""}`;
        btn.textContent = paso.label;
        btn.addEventListener("click", () => {
            estadoArmado.pasoActual = index;
            actualizarInterfaz();
        });
        nav.appendChild(btn);
    });
}

// 2. Renderiza la vista del paso actual ocultando componentes incompatibles
function cargarPasoActual() {
    const contenedor = document.getElementById("grid-productos");
    const clippyMsg = document.getElementById("clippy-msg");
    const paso = PASOS[estadoArmado.pasoActual];

    contenedor.innerHTML = "";

    // Paso 0: Selección de plataforma base (RF-07)
    if (paso.key === "plataforma") {
        clippyMsg.textContent = "Primero, define con qué fabricante deseas armar tu plataforma base:";

        ["AMD", "Intel"].forEach((marca) => {
            const card = document.createElement("div");
            const seleccionada = estadoArmado.plataforma === marca;
            card.className = `item-card ${seleccionada ? "selected" : ""}`;
            card.innerHTML = `
                <img src="img/computer.png" class="item-img" alt="${marca}">
                <h4>Plataforma ${marca}</h4>
                <p>Configura procesadores y placas compatibles con ${marca}.</p>
                <button class="btn-retro ${seleccionada ? "btn-selected" : ""}">
                    ${seleccionada ? "Seleccionada" : `Elegir ${marca}`}
                </button>
            `;
            card.querySelector("button").addEventListener("click", () => {
                seleccionarPlataforma(marca);
            });
            contenedor.appendChild(card);
        });
        return;
    }

    // Pasos 1 al 7: Componentes desde DB_COMPONENTES
    const catalogo = DB_COMPONENTES[paso.key] || [];
    clippyMsg.textContent = `Selecciona tu opción para ${paso.label}.`;

    // Filtra únicamente los productos compatibles (RF-08)
    const productosCompatibles = catalogo.filter((producto) => {
        const validacion = comprobarCompatibilidad(paso.key, producto);
        return validacion.compatible;
    });

    // Vista vacía si ningún producto del catálogo coincide con la selección previa
    if (productosCompatibles.length === 0) {
        contenedor.innerHTML = `
            <div class="empty-msg">
                <p>No hay componentes compatibles disponibles para tu configuración actual.</p>
                <p><small>Prueba modificando tus elecciones en los pasos anteriores.</small></p>
            </div>
        `;
        return;
    }

    // Renderizado de las opciones compatibles
    productosCompatibles.forEach((producto) => {
        const card = document.createElement("div");
        const estaSeleccionado = estadoArmado.seleccion[paso.key]?.id === producto.id;

        card.className = `item-card ${estaSeleccionado ? "selected" : ""}`;

        card.innerHTML = `
            <img src="${producto.img}" class="item-img" alt="${producto.nombre}">
            <h4 class="item-title">${producto.nombre}</h4>
            <div class="item-specs">
                ${producto.socket ? `<span>Socket: ${producto.socket}</span>` : ""}
                ${producto.tipo ? `<span>Tipo: ${producto.tipo}</span>` : ""}
                ${producto.tipoRam ? `<span>RAM: ${producto.tipoRam}</span>` : ""}
                ${producto.formato ? `<span>Formato: ${producto.formato}</span>` : ""}
                ${producto.vram ? `<span>VRAM: ${producto.vram}</span>` : ""}
                ${producto.capacidad ? `<span>Capacidad: ${producto.capacidad}</span>` : ""}
                ${producto.potenciaWatts ? `<span>Potencia: ${producto.potenciaWatts}W</span>` : ""}
            </div>
            <p class="item-price">$${producto.precio.toLocaleString("es-CL")}</p>
            <button class="btn-retro ${estaSeleccionado ? "btn-selected" : ""}">
                ${estaSeleccionado ? "Seleccionado" : "Elegir"}
            </button>
        `;

        card.querySelector("button").addEventListener("click", () => {
            seleccionarComponente(paso.key, producto);
        });

        contenedor.appendChild(card);
    });
}

// 3. Reglas del Motor de Compatibilidad (RF-08)
function comprobarCompatibilidad(categoria, item) {
    const s = estadoArmado.seleccion;

    // Filtro por plataforma base elegida en Paso 0
    if (estadoArmado.plataforma && item.plataforma && item.plataforma !== estadoArmado.plataforma) {
        return { compatible: false };
    }

    // CPU vs Placa (Socket)
    if (categoria === "placas" && s.procesadores) {
        if (item.socket !== s.procesadores.socket) {
            return { compatible: false };
        }
    }
    if (categoria === "procesadores" && s.placas) {
        if (item.socket !== s.placas.socket) {
            return { compatible: false };
        }
    }

    // Placa vs RAM (DDR4 / DDR5)
    if (categoria === "ram" && s.placas) {
        if (item.tipo !== s.placas.tipoRam) {
            return { compatible: false };
        }
    }

    // Placa vs Gabinete (Formato soportado)
    if (categoria === "gabinetes" && s.placas) {
        if (!item.formatosSoportados.includes(s.placas.formato)) {
            return { compatible: false };
        }
    }

    return { compatible: true };
}

// 4. Gestión de Selección y Navegación
function seleccionarPlataforma(marca) {
    if (estadoArmado.plataforma !== marca) {
        estadoArmado.plataforma = marca;
        // Limpiar piezas dependientes si se cambia de plataforma
        estadoArmado.seleccion.procesadores = null;
        estadoArmado.seleccion.placas = null;
        estadoArmado.seleccion.ram = null;
    }
    cambiarPaso(1);
}

function seleccionarComponente(categoria, item) {
    estadoArmado.seleccion[categoria] = item;

    // Si se cambia la placa madre, limpiar RAM o Gabinete si dejan de ser compatibles
    if (categoria === "placas") {
        if (estadoArmado.seleccion.ram && estadoArmado.seleccion.ram.tipo !== item.tipoRam) {
            estadoArmado.seleccion.ram = null;
        }
        if (estadoArmado.seleccion.gabinetes && !estadoArmado.seleccion.gabinetes.formatosSoportados.includes(item.formato)) {
            estadoArmado.seleccion.gabinetes = null;
        }
    }

    actualizarInterfaz();
}


function actualizarInterfaz() {
    renderizarPasosNav();
    cargarPasoActual();
    renderizarResumen();

    document.getElementById("btn-prev").disabled = estadoArmado.pasoActual === 0;
    document.getElementById("btn-next").disabled = estadoArmado.pasoActual === PASOS.length - 1;
}

// 5. Barra Lateral de Resumen (RF-07)
function renderizarResumen() {
    const lista = document.getElementById("summary-list");
    lista.innerHTML = "";
    let total = 0;

    PASOS.slice(1).forEach((paso) => {
        const item = estadoArmado.seleccion[paso.key];
        const li = document.createElement("li");
        li.className = "summary-item";

        if (item) {
            total += item.precio;
            li.innerHTML = `
                <span><strong>${paso.label.split(". ")[1]}:</strong> ${item.nombre}</span>
                <span>$${item.precio.toLocaleString("es-CL")}</span>
            `;
        } else {
            li.innerHTML = `<span><strong>${paso.label.split(". ")[1]}:</strong> <em>Sin seleccionar</em></span>`;
        }
        lista.appendChild(li);
    });

    document.getElementById("total-price").textContent = `$${total.toLocaleString("es-CL")}`;
    actualizarIndicadorCompatibilidad();
}

function actualizarIndicadorCompatibilidad() {
    const box = document.getElementById("compat-box");
    const text = document.getElementById("compat-text");

    const s = estadoArmado.seleccion;
    let hayConflicto = false;
    let detalle = "";

    if (s.procesadores && s.placas && s.procesadores.socket !== s.placas.socket) {
        hayConflicto = true;
        detalle = "CPU y Placa tienen sockets diferentes.";
    } else if (s.placas && s.ram && s.placas.tipoRam !== s.ram.tipo) {
        hayConflicto = true;
        detalle = "La memoria RAM no coincide con la tecnología de la placa.";
    } else if (s.placas && s.gabinetes && !s.gabinetes.formatosSoportados.includes(s.placas.formato)) {
        hayConflicto = true;
        detalle = "El gabinete no admite el tamaño de la placa madre.";
    }

    if (hayConflicto) {
        box.className = "compatibility-box status-error";
        text.textContent = `Incompatible: ${detalle}`;
    } else {
        box.className = "compatibility-box status-ok";
        text.textContent = "Sistema compatible hasta el momento.";
    }
}

function reiniciarBuild() {
    estadoArmado.pasoActual = 0;
    estadoArmado.plataforma = null;
    Object.keys(estadoArmado.seleccion).forEach((key) => {
        estadoArmado.seleccion[key] = null;
    });
    actualizarInterfaz();
}