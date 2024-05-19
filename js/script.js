// SECCIÓN PRODUCTOS
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
