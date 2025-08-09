document.addEventListener('DOMContentLoaded', () => {

    // --- MENÚ HAMBURGUESA PARA MÓVIL ---
    const hamburger = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    // Muestra u oculta el menú al hacer clic en la hamburguesa
    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cierra el menú móvil automáticamente al hacer clic en un enlace de navegación
    document.querySelectorAll('.nav-list a').forEach(link => {
        link.addEventListener('click', () => {
            if (mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });

    // --- BOTÓN DE VOLVER ARRIBA ---
    const backToTopBtn = document.getElementById('back-to-top-btn');

    // Muestra el botón cuando el usuario baja 300px en la página
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // El efecto de scroll suave al hacer clic en el botón ya está
    // gestionado por el CSS (html { scroll-behavior: smooth; }).
    // Por lo tanto, no se necesita JS adicional para esa funcionalidad.

});
