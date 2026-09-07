const productos = [
    {
        id: 1,
        nombre: "Corsair K70 RGB Pro",
        precio: "$129.990",
        imagen: "img/corsair.jpg",
        descripcion: "Teclado mecánico RGB de alto rendimiento."
    },

    {
        id: 2,
        nombre: "Razer DeathAdder V3",
        precio: "$69.990",
        imagen: "img/mouse.jpg",
        descripcion: "Mouse gamer ergonómico de alta precisión."
    },

    {
        id: 3,
        nombre: "ASUS TUF Gaming",
        precio: "$289.990",
        imagen: "img/monitor.jpg",
        descripcion: "Monitor gaming de alto rendimiento."
    },

    {
        id: 4,
        nombre: "Samsung 990 EVO 1TB",
        precio: "$119.990",
        imagen: "img/ssd.jpg",
        descripcion: "SSD NVMe de 1TB para alto rendimiento."
    }
];

const parametros = new URLSearchParams(window.location.search);

const id = Number(parametros.get("id"));

const producto = productos.find(function(producto) {
    return producto.id === id;
});

document.querySelector(".producto-nombre").textContent = producto.nombre;

document.querySelector(".producto-precio").textContent = producto.precio;

document.querySelector(".producto-descripcion").textContent = producto.descripcion;

document.querySelector(".producto-imagen img").src = producto.imagen;

document.querySelector(".producto-imagen img").alt = producto.nombre;