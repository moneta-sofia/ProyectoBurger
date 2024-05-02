/* ********************************** */
/*       MENÚ DE NAVEGACIÓN           */
/* ********************************** */
let opcionesMobile = document.getElementById("opcionesMobile");
let fondoOscuro = document.getElementById("fondoOscuro");

function turnDesplegable(){
    if(opcionesMobile.classList.contains("navbarCerrado")){
        
        opcionesMobile.classList.remove("navbarCerrado");
        opcionesMobile.classList.add("navbarAbierto");

        fondoOscuro.classList.remove("navbarCerrado");
        fondoOscuro.classList.add("navbarAbierto");

    } else if(opcionesMobile.classList.contains("navbarAbierto")){
        opcionesMobile.classList.remove("navbarAbierto");
        opcionesMobile.classList.add("navbarCerrado");

        fondoOscuro.classList.remove("navbarAbierto");
        fondoOscuro.classList.add("navbarCerrado");
    }
}



/* ********************************** */
/*            BANNER                  */
/* ********************************** */



/* ********************************** */
/*       SECCIÓN ABOUT US             */
/* ********************************** */



/* ********************************** */
/*       SECCIÓN DE PRODUCTOS         */
/* ********************************** */



/* ********************************** */
/*            FORMULARIO              */
/* ********************************** */ 




/* ********************************** */
/*          PIE DE PÁGINA             */
/* ********************************** */



