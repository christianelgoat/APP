document.addEventListener('DOMContentLoaded', () => {

    // --- MENÚ HAMBURGUESA PARA MÓVIL ---
    const hamburger = document.getElementById('hamburger-menu');
    const mainNav = document.querySelector('.main-nav');

    hamburger.addEventListener('click', () => {
        mainNav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    // Cierra el menú móvil al hacer clic en un enlace
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

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // --- EFECTO DE SCROLL SUAVE (ya gestionado por CSS 'scroll-behavior: smooth') ---
    // No se necesita JS adicional para el scroll suave si solo se usa en enlaces <a>
    // Este código es solo para referencia si se quisiera hacer con JS:
    /*
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    */
});