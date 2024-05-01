// SECCIÓN PRODUCTOS
document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll('.header-productos button');
    const blocks = document.querySelectorAll('.contenido-productos .content_text');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            // Oculta todos los bloques de contenido
            blocks.forEach(block => {
                block.classList.add('hidden');
            });

            // Muestra el bloque de contenido correspondiente al botón clickeado
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
            // Quitar la clase "marked" de todos los botones
            buttons.forEach(btn => btn.classList.remove('marked'));
            // Agregar la clase "marked" solo al botón clickeado
            button.classList.add('marked');

            // Oculta todos los bloques de contenido
            blocks.forEach(block => {
                block.classList.add('hidden');
            });

            // Muestra el bloque de contenido correspondiente al botón clickeado
            blocks[index].classList.remove('hidden');
        });
    });

});
