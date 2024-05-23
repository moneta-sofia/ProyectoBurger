

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


document.addEventListener("DOMContentLoaded", function () {
    const enlaces = document.querySelectorAll('a');

    for (const enlace of enlaces) {
        enlace.addEventListener('click', function (event) {
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



$(document).ready(function () {

    var sectionIds = $('a.nav-link');

    $(document).scroll(function () {
        sectionIds.each(function () {

            var container = $(this).attr('href');
            var containerOffset = $(container).offset().top;
            var containerHeight = $(container).outerHeight();
            var containerBottom = containerOffset + containerHeight;
            var scrollPosition = $(document).scrollTop();

            if (scrollPosition < containerBottom - 20 && scrollPosition >= containerOffset - 20) {
                $(this).addClass('active');
            } else {
                $(this).removeClass('active');
            }


        });
    });



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

document.addEventListener("DOMContentLoaded", function () {
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
document.addEventListener("DOMContentLoaded", function () {
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

// SECCIÓN PRODUCTOS
document.addEventListener("DOMContentLoaded", function () {
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
document.addEventListener("DOMContentLoaded", function () {
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
/*            FORMULARIO              */
/* ********************************** */

const patternNombre = /^[A-Za-z\s]+$/;
const patternCorreo = /.*(@gmail\.com|@outlook\.com|@yahoo\.com|@hotmail\.com|@live\.com)$/i;;
const patternTelefono = /[0-9+\- ]{10,20}/;;

document.getElementById('curriculum').addEventListener('change', function(e) {
    const fileList = e.target.files;
    const fileInputText = document.querySelector('.color-letra-formulario');
  
    if (fileList.length > 0) {
      fileInputText.textContent = fileList.length === 1 ? fileList[0].name : `${fileList.length}`;
    }
  });
  
  document.getElementById('boton-formulario').addEventListener('click' , () => {
    let generoRadios = document.getElementsByName('genero');
    let generoEscogido = false;
    let nombreRequerido = document.getElementById('nombre');
    let generoRequerido = document.getElementById('validador__genero');
    let correoRequerido = document.getElementById('correo');
    let telefonoRequerido = document.getElementById('telefono');
    let puestoRequerido = document.getElementById('puesto');
    let curriculum = document.getElementById('curriculum');
    let curriculumRequerido = document.getElementById('validador__curriculum');
    curriculumRequerido.style.display = 'none';
    generoRequerido.style.display = 'none';

    // Comprobamos si algún género fue seleccionado
    for (var i = 0; i < generoRadios.length; i++) {
      if (generoRadios[i].checked) {
        generoEscogido = true;
        break;
      }
    }

    // Limpiamos los mensajes de error previos
    nombreRequerido.setCustomValidity('');
    generoRequerido.setCustomValidity('');
    correoRequerido.setCustomValidity('');
    telefonoRequerido.setCustomValidity('');
    puestoRequerido.setCustomValidity('');
    curriculumRequerido.setCustomValidity('');

    let numeroTelefono = recortarTelefono(telefonoRequerido); //Esta variable se le deberá de enviar al back

    if (!nombreRequerido.validity.valid || !patternNombre.test(nombreRequerido.value)){
      validarNombre(nombreRequerido);
    }
    else if (!generoEscogido){
      indicarError(generoRequerido);
      generoRequerido.setCustomValidity('Por favor, seleccione un genero');
    }
    else if (!correoRequerido.validity.valid || !patternCorreo.test(correoRequerido.value)){ 
      validarCorreo(correoRequerido);
    }
    else if (numeroTelefono.length == 0 || !patternTelefono.test(numeroTelefono)){
      validartelefono(telefonoRequerido);
    }
    else if (puestoRequerido.value == ''){
      puestoRequerido.setCustomValidity('Por favor, seleccione el puesto.');
    }
    else if (curriculum.files.length < 1){
      indicarError(curriculumRequerido);
      curriculumRequerido.setCustomValidity('Por favor, ingrese el CV');
    }
});

function validarNombre(nombre){
    if (nombre.value.length == 0) {
      nombre.setCustomValidity('Por favor, ingrese su nombre.');
    } 
    else{
      nombre.setCustomValidity('Por favor, ingrese solo letras.');
    } 
} 
  
function validarCorreo(correo){
    if (correo.validity.valueMissing) {
      correo.setCustomValidity('Por favor, ingrese un correo electrónico.');
    }  
    else{
      correo.setCustomValidity('Por favor, ingrese un correo electrónico válido.')
    } 
}

function validartelefono(telefono){  
  if (telefono.validity.valueMissing) {
    telefono.setCustomValidity('Por favor, ingrese un número de teléfono movil.');
  }
  else{
    telefono.setCustomValidity('Por favor, ingrese un número de teléfono movil válido.');
  }  
}

function indicarError(input){
  input.style.display = 'block';
  input.style.position = 'absolute';
  input.style.marginTop = '-3px';
  input.style.left = '50%';
  input.style.zIndex = '-1';
}

function recortarTelefono(telefono){
  //Comprobamos si es mayor a 0 o si tiene algun caracter de los dichos y si lo tiene extraelo dejando solo los numeros y retornar esto. 
  numeroTelefonico = telefono.value;
  if(numeroTelefonico.length === 0){
    return numeroTelefonico;
  }
  if(numeroTelefonico[0]==("+")){
    numeroTelefonico = numeroTelefonico.substring(1);
  }
  if(numeroTelefonico.includes("-")){
    numeroTelefonico = numeroTelefonico.replace(/-/g, '');
  }
  if(numeroTelefonico.includes(" ")){
    numeroTelefonico = numeroTelefonico.replace(/\s+/g, '');
  }
  if(numeroTelefonico.length > 11 || numeroTelefonico.length < 10 || numeroTelefonico.includes("+")){
    validartelefono(telefono);
  }
  return numeroTelefonico;
}

const inputsForm = document.querySelectorAll('input[required]');

inputsForm.forEach(input => {
  input.addEventListener('input', () => {
      input.setCustomValidity("");
  });
});
  


/* ********************************** */
/*          PIE DE PÁGINA             */
/* ********************************** */
