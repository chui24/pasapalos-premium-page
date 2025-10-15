// click-scroll.js mejorado
// Autor original: Syamsul Arifin
// Mejorado por: Jesús Machado + GPT-5

$(document).ready(function () {

    // Seleccionamos todas las secciones que siguen el patrón #section_X
    const sections = $('[id^="section_"]');
    const navLinks = $('.navbar-nav .nav-link.click-scroll');
    const offsetAdjust = 154; // margen superior

    // Activar desplazamiento suave al hacer clic
    navLinks.on('click', function (e) {
        e.preventDefault();

        const targetId = $(this).attr('href');
        const targetSection = $(targetId);

        if (targetSection.length) {
            $('html, body').animate({
                scrollTop: targetSection.offset().top - offsetAdjust
            }, 400);
        }
    });

    // Cambiar el estado activo en el scroll
    $(window).on('scroll', function () {
        const scrollPos = $(document).scrollTop() + offsetAdjust + 1;

        sections.each(function (index) {
            const top = $(this).offset().top;
            const bottom = top + $(this).outerHeight();

            if (scrollPos >= top && scrollPos <= bottom) {
                navLinks.removeClass('active').addClass('inactive');
                navLinks.eq(index).addClass('active').removeClass('inactive');
            }
        });
    });

    // Estado inicial del primer link
    navLinks.addClass('inactive');
    navLinks.first().addClass('active').removeClass('inactive');
});
