

/* ********************************** */
/*       MENÚ DE NAVEGACIÓN           */
/* ********************************** */
let opcionesMobile = document.getElementById("opcionesMobile");
let fondoOscuro = document.getElementById("fondoOscuro");

function turnDesplegable(estado) {
    if (estado) {

        opcionesMobile.classList.remove("navbarCerrado");
        opcionesMobile.classList.add("navbarAbierto");

        fondoOscuro.classList.remove("navbarCerrado");
        fondoOscuro.classList.add("navbarAbierto");

    } else if (!estado) {
        opcionesMobile.classList.remove("navbarAbierto");
        opcionesMobile.classList.add("navbarCerrado");

        fondoOscuro.classList.remove("navbarAbierto");
        fondoOscuro.classList.add("navbarCerrado");
    }
}


document.addEventListener("DOMContentLoaded", function() {
    const enlaces = document.querySelectorAll('a');

    for (const enlace of enlaces) {
        enlace.addEventListener('click', function(event) {
            event.preventDefault();
            turnDesplegable(false)
            const seccionId = this.getAttribute('href');
            const seccion = document.querySelector(seccionId);
            
            window.scrollTo({
                top: seccion.offsetTop,
                behavior: 'smooth'
            });
        });
    }
});



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