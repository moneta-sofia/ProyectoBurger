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
