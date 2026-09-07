const seleccion = { 
    fabricante: null, 
    cpu: null, 
    placa: null, 
    ram: null, 
    gpu: null, 
    disco: null, 
    fuente: null, 
    gabinete: null
};

const contenedorPasos = document.getElementById("pasos-armador");
const contenedorOpciones = document.getElementById("opciones-paso");

const pasos = [
    {id: "fabricante", nombre: "Fabricante", requiere: null},
    {id: "cpu", nombre: "Procesador", requiere: "fabricante"},
    {id: "placa", nombre: "Placa Madre", requiere: "cpu"},
    {id: "ram", nombre: "Memoria RAM", requiere: "placa"},
    {id: "gpu", nombre: "Tarjeta Gráfica", requiere: "placa", opcional: true},
    {id: "disco", nombre: "Almacenamiento", requiere: null},
    {id: "fuente", nombre: "Fuente de Poder", requiere: null},
    {id: "gabinete", nombre: "Gabinete", requiere: "placa"}
];

let pasoActualIndex = 0 // indice del paso actual

function renderizarPasos() {
    contenedorPasos.innerHTML = ""; // limpiar para no duplicar
    pasos.forEach((paso, index) => {
        const boton = document.createElement("button");
        boton.textContent = paso.nombre;
        
        if (index === pasoActualIndex) {
            boton.classList.add("paso-activo");
        }

        if (!pasoHabilitado(paso, seleccion)) {
            boton.disabled = true;
        }

        contenedorPasos.appendChild(boton);
    })
}


function opcionesDisponibles(pasoId, catalogo, seleccion) {
    if (pasoId === "placa") {
        if (seleccion.cpu === null)
            return []; // sin cpu, ninguna opcion es válida
        return catalogo.filter(placa => esCompatibleCpuPlaca(seleccion.cpu, placa));
    }

    if (pasoId === "cpu") {
        if (seleccion.fabricante === null)
            return [];
        return catalogo.filter(
            cpu => {
                return cpu.fabricante === seleccion.fabricante;
            }
        )
    }

    if (pasoId === "ram") {
        if (seleccion.placa === null)
            return [];
        return catalogo.filter(ram => esCompatiblePlacaRam(seleccion.placa, ram))
    }

    if (pasoId === "gabinete") {
        if (seleccion.placa === null)
            return [];
        return catalogo.filter(gabinete => esCompatiblePlacaGabinete(seleccion.placa, gabinete))
    }

    return catalogo;

};

function obtenerCatalogo(pasoId) {
    if (pasoId === "fabricante") return catalogoFabricantes;
    if (pasoId === "cpu") return catalogoCpus;
    return []; 
}

function renderizarOpciones() {
    contenedorOpciones.innerHTML = "";

    const pasoActual = pasos[pasoActualIndex];
    const catalogo = obtenerCatalogo(pasoActual.id);
    const opciones = opcionesDisponibles(pasoActual.id, catalogo, seleccion);

    opciones.forEach(item => {
        const tarjeta = document.createElement("button");
        tarjeta.classList.add("tarjeta-producto");
        tarjeta.textContent = item.nombre;
        contenedorOpciones.appendChild(tarjeta);
    });
}

function pasoHabilitado(paso, seleccion) {
    if (paso.requiere === null) 
        return true;
    return seleccion[paso.requiere] !== null;
};

function esCompatibleCpuPlaca(cpu, placa) {
    return cpu.socket === placa.socket;
};

function esCompatiblePlacaGabinete(placa, gabinete) {
    return gabinete.formatosSoportados.includes(placa.formato);
};

function esCompatiblePlacaRam(placa, ram) {
    return ram.tipoRam === placa.tipoRam;
};


const catalogoFabricantes = [
  { id: "fab-amd", nombre: "AMD" },
  { id: "fab-intel", nombre: "Intel" }
];

const catalogoCpus = [
  { id: "cpu-1", nombre: "AMD Ryzen 5 5600", categoria: "cpu", precio: 120000, socket: "AM4", fabricante: "fab-amd" },
  { id: "cpu-2", nombre: "Intel Core i5-12400", categoria: "cpu", precio: 135000, socket: "LGA1700", fabricante: "fab-intel" }
];

renderizarPasos();