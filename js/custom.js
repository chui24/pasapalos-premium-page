
  (function ($) {
  
  "use strict";

    // NAVBAR
    $('.navbar-collapse a').on('click',function(){
      $(".navbar-collapse").collapse('hide');
    });

   $(function() {
      $('.hero-slides').vegas({
          slides: [
              { src: 'images/pasapalospremium_background2.png' },
              { src: 'images/pasapalospremium_background2.png' },
          ],
          timer: false,
          animation: 'kenburns',
      });
    });
    
    // CUSTOM LINK
    $('.smoothscroll').click(function(){
      var el = $(this).attr('href');
      var elWrapped = $(el);
      var header_height = $('.navbar').height() + 60;
  
      scrollToDiv(elWrapped,header_height);
      return false;
  
      function scrollToDiv(element,navheight){
        var offset = element.offset();
        var offsetTop = offset.top;
        var totalScroll = offsetTop-navheight;
  
        $('body,html').animate({
        scrollTop: totalScroll
        }, 300);
      }
    });
  
  })(window.jQuery);


// Here is my custom js apart the template - by chuimachado

// WhatsApp link functionality
document.addEventListener('DOMContentLoaded', function() {
  const whatsappLink = document.querySelector('.social-icon-link.bi-whatsapp');

  if (whatsappLink) {
    whatsappLink.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento del enlace "#"

      const phoneNumber = '584147233185'; // Número sin el signo +
      const message = encodeURIComponent('¡Hola! Me gustaría hacer un pedido');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappUrl, '_blank');

      // Pequeña animación de clic
      this.style.transform = 'scale(0.9)';
      setTimeout(() => { this.style.transform = 'scale(1)'; }, 150);
    });
  }
});



// Haz tu pedido! link functionality
document.addEventListener('DOMContentLoaded', function() {
  const pedidoBtn = document.querySelector('.hero-section .custom-btn.custom-border-btn');

  if (pedidoBtn) {
    pedidoBtn.addEventListener('click', function(event) {
      event.preventDefault(); // Evita el scroll al href "#section_5"

      const phoneNumber = '584147233185'; // Número sin el signo +
      const message = encodeURIComponent('¡Hola! Me gustaría hacer un pedido');
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

      window.open(whatsappUrl, '_blank');

      // Pequeña animación de clic
      this.style.transform = 'scale(0.9)';
      setTimeout(() => { this.style.transform = 'scale(1)'; }, 150);
    });
  }
});


// Animaciones para la sección hero
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".hero-animate");
  if (hero) {
    const title = hero.querySelector(".hero-title");
    const desc = hero.querySelector(".hero-desc");

    // Dividir el título en spans sin perder estilos
    const titleText = title.textContent;
    title.innerHTML = ""; // limpiar contenido temporalmente
    titleText.split("").forEach(char => {
      const span = document.createElement("span");
      span.textContent = char;
      span.classList.add("hero-letter"); // clase para animación
      title.appendChild(span);
    });

    const spans = title.querySelectorAll(".hero-letter");

    // Animar cada letra
    spans.forEach((span, i) => {
      setTimeout(() => {
        span.classList.add("show");
      }, i * 80);
    });

    // Animar la descripción después de las letras
    setTimeout(() => {
      desc.classList.add("show");
    }, spans.length * 80 + 200);

    // Animar botones después de la descripción
    buttons.forEach((btn, i) => {
      setTimeout(() => {
        btn.classList.add("show");
      }, spans.length * 80 + 500 + i * 200);
    });
  }
});



// Animaciones para la sección de Sobre nosotros
document.addEventListener("DOMContentLoaded", () => {
  const aboutSection = document.querySelector("#section_2");
  if (aboutSection) {
    const leftElem = aboutSection.querySelector(".about-slide-left");
    const rightElem = aboutSection.querySelector(".about-slide-right");

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    if(leftElem) observer.observe(leftElem);
    if(rightElem) observer.observe(rightElem);
  }
});


// Animaciones para la seccion de comida rápida 
document.addEventListener("DOMContentLoaded", function() {
  const elements = document.querySelectorAll('.fade-in, .slide-left, .slide-right');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  elements.forEach(el => observer.observe(el));
});


// Animaciones para la sección de comida rápida


document.addEventListener("DOMContentLoaded", () => {
  // === Animación para la sección de pasapalos ===
  const pasapalosSection = document.querySelector("#section_3");
  if (pasapalosSection) {
    const title = pasapalosSection.querySelector("h2");
    const cards = pasapalosSection.querySelectorAll(".team-block-wrap");

    // Añadimos clases iniciales de animación
    title.classList.add("fade-slide");
    cards.forEach((card, index) => {
      // Alterna entre izquierda y derecha para cada tarjeta
      card.classList.add(index % 2 === 0 ? "fade-slide-left" : "fade-slide-right");
    });

    // Usamos IntersectionObserver para activar las animaciones al hacer scroll
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(title);
    cards.forEach(card => observer.observe(card));
  }
});

// Animaciones para la sección de pasapalos 
document.addEventListener("DOMContentLoaded", () => {
  const pasapalosSection = document.querySelector("#section_4");
  if (pasapalosSection) {
    const title = pasapalosSection.querySelector("h2");
    const cards = pasapalosSection.querySelectorAll(".team-block-wrap");

    title.classList.add("fade-slide");
    cards.forEach((card, index) => {
      card.classList.add(index % 2 === 0 ? "fade-slide-left" : "fade-slide-right");
    });

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(title);
    cards.forEach(card => observer.observe(card));
  }
});


// Animaciones para la sección de menú
document.addEventListener("DOMContentLoaded", () => {
  const leftCol = document.querySelector(".menu-left");
  const rightCol = document.querySelector(".menu-right");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  if (leftCol) {
    leftCol.classList.add("fade-slide-left"); // aparece desde la izquierda
    observer.observe(leftCol);
  }

  if (rightCol) {
    rightCol.classList.add("fade-slide-right"); // aparece desde la derecha
    observer.observe(rightCol);
  }
});





// ===== Floating animation for social icons =====
document.addEventListener('DOMContentLoaded', function() {
  const icons = document.querySelectorAll('.social-icon-link');

  icons.forEach((icon, index) => {
    // Aplica una animación con un pequeño desfase para cada ícono
    icon.style.animation = `floatIcon 3s ease-in-out infinite`;
    icon.style.animationDelay = `${index * 0.3}s`;
  });

  // Crea dinámicamente la animación CSS con JS
  const style = document.createElement('style');
  style.textContent = `
    /* Animación flotante */
    @keyframes floatIcon {
      0%, 100% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-10px);
      }
    }

    /* Aparición por scroll */
    .fade-slide {
      opacity: 0;
      transform: translateY(50px);
      transition: opacity 1s ease, transform 1s ease;
    }

    .fade-slide.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Animaciones laterales para íconos */
    .social-icon-item {
      opacity: 0;
      transform: translateX(80px);
      transition: opacity 1s ease, transform 1s ease;
    }

    .social-icon-item.visible {
      opacity: 1;
      transform: translateX(0);
    }

    .social-icon-link {
      transition: transform 0.3s ease;
    }

    .social-icon-link:hover {
      transform: scale(1.1);
    }
  `;
  document.head.appendChild(style);

  // ===== Scroll animation (Intersection Observer) =====
  const section = document.querySelector('#section_5');
  const socialItems = document.querySelectorAll('.social-icon-item');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Agrega la clase visible al título, texto y cada icono
        section.querySelectorAll('em, h2, p').forEach(el => el.classList.add('fade-slide', 'visible'));

        socialItems.forEach((item, i) => {
          setTimeout(() => item.classList.add('visible'), i * 200);
        });
      }
    });
  }, { threshold: 0.3 });

  if (section) observer.observe(section);
});

// Animacion de las letras
document.addEventListener("DOMContentLoaded", () => {
  const section = document.querySelector("#section_5");
  const animatedElements = section.querySelectorAll("em, h2, p, .social-icon-item");

  // Aplica animaciones de flotación solo a los íconos
  section.querySelectorAll(".social-icon-item").forEach(icon => {
    icon.classList.add("float-icon");
  });

  // Inicializa todos con fade-in oculto
  animatedElements.forEach(el => el.classList.add("fade-in-up"));

  // Usa IntersectionObserver para activar la animación al hacer scroll
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target); // Se anima solo una vez
      }
    });
  }, { threshold: 0.2 });

  animatedElements.forEach(el => observer.observe(el));
});


