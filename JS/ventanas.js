const botonesColapsar = document.querySelectorAll(".boton-colapsar");

botonesColapsar.forEach(function (boton) {

    boton.addEventListener("click", function () {

        const ventana = boton.closest("section");

        const contenido = ventana.querySelector(".contenido-ventana");

        contenido.classList.toggle("oculto");

    });

});