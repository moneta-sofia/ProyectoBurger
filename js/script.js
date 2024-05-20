

/* ********************************** */
/*       MENÚ DE NAVEGACIÓN           */
/* ********************************** */
let opcionesMobile = document.getElementById("opcionesMobile");
let fondoOscuro = document.getElementById("fondoOscuro");

function turnDesplegable() {
    if (opcionesMobile.classList.contains("navbarCerrado")) {

        opcionesMobile.classList.remove("navbarCerrado");
        opcionesMobile.classList.add("navbarAbierto");

        fondoOscuro.classList.remove("navbarCerrado");
        fondoOscuro.classList.add("navbarAbierto");

    } else if (opcionesMobile.classList.contains("navbarAbierto")) {
        opcionesMobile.classList.remove("navbarAbierto");
        opcionesMobile.classList.add("navbarCerrado");

        fondoOscuro.classList.remove("navbarAbierto");
        fondoOscuro.classList.add("navbarCerrado");
    }
}



/* ********************************** */
/*            BANNER                  */
/* ********************************** */

$(document).ready(function () {
    $('#asddas').slick({
        infinite: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
    });
});

/* ********************************** */
/*       SECCIÓN ABOUT US             */
/* ********************************** */

document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.header-productos button');
    const blocks = document.querySelectorAll('.contenido-productos .content_text');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            blocks.forEach(block => {
                block.classList.add('hidden');
            });

            blocks[index].classList.remove('hidden');
        });
    });
});

// Funciones de los botones del navegador
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.header-productos button');
    const blocks = document.querySelectorAll('.contenido-productos .content_text');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('marked'));
           
            button.classList.add('marked');

           
            blocks.forEach(block => {
                block.classList.add('hidden');
            });

           
            blocks[index].classList.remove('hidden');
        });
    });

});


/* ********************************** */
/*       SECCIÓN DE PRODUCTOS         */
/* ********************************** */



/* ********************************** */
/*            FORMULARIO              */
/* ********************************** */




/* ********************************** */
/*          PIE DE PÁGINA             */
/* ********************************** */