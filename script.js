/* =========================================================
   JRK Landscaping — script.js
   Mobile Menu | Carousel Pagination | Portfolio Filter |
   Header Scroll | Form Submit | Reveal on Scroll |
   EN / ES Language Toggle
   ========================================================= */

(function () {
  'use strict';

  /* ---- Utility ---- */
  function $(sel, ctx) { return (ctx || document).querySelector(sel); }
  function $$(sel, ctx) { return Array.from((ctx || document).querySelectorAll(sel)); }

  /* =====================================================
     TRANSLATIONS
     ===================================================== */
  var translations = {
    en: {
      /* Nav */
      'nav-services':   'Services',
      'nav-work':       'Our Work',
      'nav-about':      'About',
      'nav-quote':      'Get a Quote',
      /* Hero */
      'hero-eyebrow':   "Connecticut's Premier Landscaping Company",
      'hero-headline':  'Crafted Landscapes.<br />Exceptional Results.',
      'hero-body':      'From precision lawn care to custom stonework, we transform outdoor spaces with skill, integrity, and an eye for lasting beauty.',
      'hero-cta-primary':   'Request a Free Quote',
      'hero-cta-secondary': 'View Our Work',
      'trust-1': 'Licensed &amp; Insured',
      'trust-2': 'Free Estimates',
      'trust-3': 'Serving CT &amp; Surrounding Areas',
      /* Services */
      'svc-eyebrow': 'What We Do',
      'svc-title':   'Our Services',
      'svc-body':    'Every project is handled with professional-grade equipment, experienced crews, and a commitment to quality that shows in the finished result.',
      'svc-lawn-title': 'Full Lawn Maintenance',
      'svc-lawn-desc':  'Mowing, fertilization, aeration, hydroseeding, sod installation, mulching, and seasonal clean-ups — complete year-round care for a healthy, immaculate lawn.',
      'svc-lawn-1': 'Fertilization &amp; Aeration',
      'svc-lawn-2': 'New Lawns &amp; Hydroseeding',
      'svc-lawn-3': 'Sod Installation &amp; Mulching',
      'svc-lawn-4': 'Spring &amp; Fall Clean-Up',
      'svc-tree-title': 'Tree Services',
      'svc-tree-desc':  'From hazardous removals to careful trimming and transplanting, our certified crews handle trees of all sizes with safety and precision.',
      'svc-tree-1': 'Tree Removal &amp; Trimming',
      'svc-tree-2': 'Pruning &amp; Shaping',
      'svc-tree-3': 'Stump Grinding',
      'svc-tree-4': 'Planting &amp; Transplanting',
      'svc-exc-title': 'Excavating',
      'svc-exc-desc':  'Site preparation, land clearing, grading, and stump removal with professional-grade machinery. We prepare the groundwork for every project we take on.',
      'svc-exc-1': 'Site Preparation &amp; Grading',
      'svc-exc-2': 'Land Clearing',
      'svc-exc-3': 'Stump &amp; Root Removal',
      'svc-exc-4': 'Drainage Solutions',
      'svc-stone-title': 'Stonework &amp; Masonry',
      'svc-stone-desc':  'Hand-crafted stone walls, custom patios, elegant walkways, and decorative masonry built to last and elevate any property.',
      'svc-stone-1': 'Retaining &amp; Garden Walls',
      'svc-stone-2': 'Patios &amp; Walkways',
      'svc-stone-3': 'Custom Masonry',
      'svc-stone-4': 'Fire Pits &amp; Features',
      /* About */
      'about-eyebrow':     'Who We Are',
      'about-title':       'Built on Integrity,<br />Driven by Craft',
      'about-badge-label': 'Years of Experience',
      'about-body-1': 'JRK Landscaping is a family-run operation grounded in honest work and high standards. We take pride in every property we touch — arriving on time, communicating clearly, and finishing the job right.',
      'about-body-2': "Whether it's a routine lawn schedule or a large-scale excavation and masonry project, we bring the same level of dedication and attention to detail that has earned us loyal clients across Connecticut.",
      'about-stat-1': 'Core Services',
      'about-stat-2': 'Licensed &amp; Insured',
      'about-stat-3': 'Free Estimates',
      'about-cta':    'Start Your Project',
      /* Process */
      'proc-eyebrow': 'Our Approach',
      'proc-title':   'Simple, Reliable, Professional',
      'proc-1-title': 'Free Consultation',
      'proc-1-desc':  'We visit your property, listen to your goals, and provide a clear, no-obligation estimate with no surprises.',
      'proc-2-title': 'Detailed Planning',
      'proc-2-desc':  'Every project is scoped carefully — right crew, right equipment, right timeline — so execution is smooth from day one.',
      'proc-3-title': 'Expert Execution',
      'proc-3-desc':  'Our experienced teams work efficiently and respectfully, treating your property as if it were our own.',
      'proc-4-title': 'Clean Finish',
      'proc-4-desc':  "We leave every site immaculate. The job isn't done until the space looks better than when we arrived.",
      /* Portfolio */
      'port-eyebrow':  'Our Work',
      'port-title':    'Recent Projects',
      'port-body':     'A selection of completed projects across Connecticut. Every site is left better than we found it.',
      'port-tab-all':   'All',
      'port-tab-lawn':  'Lawn',
      'port-tab-trees': 'Trees',
      'port-tab-stone': 'Stonework',
      'port-tab-exc':   'Excavating',
      /* Portfolio captions */
      'cap-lawn-maint': 'Lawn Maintenance',
      'cap-lawn-mow':   'Lawn Mowing',
      'cap-yard-clean': 'Yard Clean-Up',
      'cap-turf':       'Turf Care',
      'cap-seasonal':   'Seasonal Care',
      'cap-tree-rem':   'Tree Removal',
      'cap-tree-svc':   'Tree Service',
      'cap-tree-trim':  'Tree Trimming',
      'cap-tree-care':  'Tree Care',
      'cap-stump':      'Stump Grinding',
      'cap-tree-large': 'Large Tree Removal',
      'cap-tree-work':  'Tree Work',
      'cap-tree-yard':  'Tree &amp; Yard Cleanup',
      'cap-stone-wall':  'Stone Wall',
      'cap-stone-walk':  'Stone Walkway',
      'cap-stone-patio': 'Stone Patio',
      'cap-stone-steps': 'Stone Steps',
      'cap-retaining':   'Retaining Wall',
      'cap-masonry':     'Custom Masonry',
      'cap-brick':       'Brick Masonry',
      'cap-stonework':   'Stonework',
      'cap-firepit':     'Fire Pit',
      'cap-exc-site':   'Site Excavation',
      'cap-exc-stump':  'Stump Excavation',
      'cap-exc-land':   'Land Prep',
      'cap-exc-grade':  'Grading',
      'cap-exc-heavy':  'Heavy Excavation',
      'cap-exc-gen':    'Excavation',
      'cap-exc-root':   'Root Removal',
      'cap-exc-work':   'Site Work',
      /* Contact */
      'contact-eyebrow': 'Get In Touch',
      'contact-title':   'Request a<br />Free Estimate',
      'contact-intro':   "Ready to get started? Fill out the form and we'll get back to you within one business day. All estimates are free with no obligation.",
      'contact-fb':   'Follow us on Facebook',
      'contact-addr': '360 Clark St, Bridgeport, CT',
      /* Form */
      'form-label-first':   'First Name',
      'form-label-last':    'Last Name',
      'form-label-email':   'Email Address',
      'form-label-phone':   'Phone Number',
      'form-label-service': 'Service Needed',
      'form-label-msg':     'Project Details',
      'form-ph-first':  'John',
      'form-ph-last':   'Smith',
      'form-ph-email':  'john@example.com',
      'form-ph-phone':  '(203) 000-0000',
      'form-ph-msg':    'Tell us about your project, property, and ideal timeline…',
      'form-opt-default':  'Select a service…',
      'form-opt-lawn':     'Full Lawn Maintenance',
      'form-opt-trees':    'Tree Services',
      'form-opt-exc':      'Excavating',
      'form-opt-stone':    'Stonework &amp; Masonry',
      'form-opt-multiple': 'Multiple Services',
      'form-opt-other':    'Other / Not Sure',
      'form-submit':       'Send My Request',
      'form-note':         "We'll respond within one business day. All consultations are free.",
      'form-success-title': 'Message Sent!',
      'form-success-body':  "Thank you for reaching out. We'll be in touch within one business day.",
      /* Footer */
      'footer-tagline':      'Crafting exceptional outdoor spaces across Connecticut.',
      'footer-contact-link': 'Contact',
      'footer-copy':         '&copy; <span id="footer-year"></span> JRK Landscaping. All rights reserved.',
    },

    es: {
      /* Nav */
      'nav-services':   'Servicios',
      'nav-work':       'Nuestro Trabajo',
      'nav-about':      'Nosotros',
      'nav-quote':      'Obtener Cotización',
      /* Hero */
      'hero-eyebrow':   'La Empresa Líder de Paisajismo en Connecticut',
      'hero-headline':  'Paisajes Artesanales.<br />Resultados Excepcionales.',
      'hero-body':      'Desde el cuidado preciso del césped hasta la mampostería personalizada, transformamos espacios al aire libre con habilidad, integridad y una visión de belleza duradera.',
      'hero-cta-primary':   'Solicitar Cotización Gratis',
      'hero-cta-secondary': 'Ver Nuestro Trabajo',
      'trust-1': 'Licenciado y Asegurado',
      'trust-2': 'Estimados Gratis',
      'trust-3': 'Sirviendo CT y Áreas Aledañas',
      /* Services */
      'svc-eyebrow': 'Lo Que Hacemos',
      'svc-title':   'Nuestros Servicios',
      'svc-body':    'Cada proyecto se maneja con equipos de nivel profesional, cuadrillas experimentadas y un compromiso con la calidad que se refleja en el resultado final.',
      'svc-lawn-title': 'Mantenimiento Completo de Césped',
      'svc-lawn-desc':  'Corte, fertilización, aireación, hidrosiembra, instalación de césped, mantillo y limpiezas de temporada — cuidado integral durante todo el año para un césped saludable e impecable.',
      'svc-lawn-1': 'Fertilización y Aireación',
      'svc-lawn-2': 'Nuevos Céspedes e Hidrosiembra',
      'svc-lawn-3': 'Instalación de Césped y Mantillo',
      'svc-lawn-4': 'Limpieza de Primavera y Otoño',
      'svc-tree-title': 'Servicios de Árboles',
      'svc-tree-desc':  'Desde la remoción de árboles peligrosos hasta la poda y el trasplante cuidadosos, nuestros equipos certificados manejan árboles de todos los tamaños con seguridad y precisión.',
      'svc-tree-1': 'Remoción y Poda de Árboles',
      'svc-tree-2': 'Poda y Moldeo',
      'svc-tree-3': 'Trituración de Tocones',
      'svc-tree-4': 'Siembra y Trasplante',
      'svc-exc-title': 'Excavación',
      'svc-exc-desc':  'Preparación del terreno, limpieza, nivelación y remoción de tocones con maquinaria profesional. Preparamos la base para cada proyecto que emprendemos.',
      'svc-exc-1': 'Preparación y Nivelación del Terreno',
      'svc-exc-2': 'Limpieza de Terreno',
      'svc-exc-3': 'Remoción de Tocones y Raíces',
      'svc-exc-4': 'Soluciones de Drenaje',
      'svc-stone-title': 'Mampostería y Cantería',
      'svc-stone-desc':  'Muros de piedra artesanales, patios personalizados, elegantes caminos y mampostería decorativa construidos para durar y realzar cualquier propiedad.',
      'svc-stone-1': 'Muros de Contención y Jardín',
      'svc-stone-2': 'Patios y Caminos',
      'svc-stone-3': 'Mampostería Personalizada',
      'svc-stone-4': 'Fogatas y Elementos Decorativos',
      /* About */
      'about-eyebrow':     'Quiénes Somos',
      'about-title':       'Construidos con Integridad,<br />Impulsados por el Arte',
      'about-badge-label': 'Años de Experiencia',
      'about-body-1': 'JRK Landscaping es una operación familiar fundamentada en el trabajo honesto y los altos estándares. Nos enorgullecemos de cada propiedad que atendemos — llegando a tiempo, comunicándonos con claridad y terminando el trabajo correctamente.',
      'about-body-2': 'Ya sea un programa rutinario de césped o un gran proyecto de excavación y mampostería, aportamos el mismo nivel de dedicación y atención al detalle que nos ha ganado clientes leales en todo Connecticut.',
      'about-stat-1': 'Servicios Principales',
      'about-stat-2': 'Licenciado y Asegurado',
      'about-stat-3': 'Estimados Gratis',
      'about-cta':    'Comenzar Tu Proyecto',
      /* Process */
      'proc-eyebrow': 'Nuestro Enfoque',
      'proc-title':   'Simple, Confiable, Profesional',
      'proc-1-title': 'Consulta Gratuita',
      'proc-1-desc':  'Visitamos tu propiedad, escuchamos tus objetivos y brindamos un estimado claro y sin compromiso, sin sorpresas.',
      'proc-2-title': 'Planificación Detallada',
      'proc-2-desc':  'Cada proyecto se planifica cuidadosamente — la cuadrilla correcta, el equipo correcto, el cronograma correcto — para que la ejecución sea fluida desde el primer día.',
      'proc-3-title': 'Ejecución Experta',
      'proc-3-desc':  'Nuestros equipos experimentados trabajan de manera eficiente y respetuosa, tratando tu propiedad como si fuera la nuestra.',
      'proc-4-title': 'Acabado Impecable',
      'proc-4-desc':  'Dejamos cada sitio impecable. El trabajo no está terminado hasta que el espacio luzca mejor que cuando llegamos.',
      /* Portfolio */
      'port-eyebrow':  'Nuestro Trabajo',
      'port-title':    'Proyectos Recientes',
      'port-body':     'Una selección de proyectos completados en Connecticut. Cada sitio queda mejor de como lo encontramos.',
      'port-tab-all':   'Todos',
      'port-tab-lawn':  'Césped',
      'port-tab-trees': 'Árboles',
      'port-tab-stone': 'Mampostería',
      'port-tab-exc':   'Excavación',
      /* Portfolio captions */
      'cap-lawn-maint': 'Mantenimiento de Césped',
      'cap-lawn-mow':   'Corte de Césped',
      'cap-yard-clean': 'Limpieza de Patio',
      'cap-turf':       'Cuidado del Césped',
      'cap-seasonal':   'Cuidado de Temporada',
      'cap-tree-rem':   'Remoción de Árbol',
      'cap-tree-svc':   'Servicio de Árbol',
      'cap-tree-trim':  'Poda de Árbol',
      'cap-tree-care':  'Cuidado de Árbol',
      'cap-stump':      'Trituración de Tocón',
      'cap-tree-large': 'Remoción de Árbol Grande',
      'cap-tree-work':  'Trabajo de Árbol',
      'cap-tree-yard':  'Limpieza de Árbol y Patio',
      'cap-stone-wall':  'Muro de Piedra',
      'cap-stone-walk':  'Camino de Piedra',
      'cap-stone-patio': 'Patio de Piedra',
      'cap-stone-steps': 'Escalones de Piedra',
      'cap-retaining':   'Muro de Contención',
      'cap-masonry':     'Mampostería Personalizada',
      'cap-brick':       'Mampostería de Ladrillo',
      'cap-stonework':   'Mampostería',
      'cap-firepit':     'Fogata',
      'cap-exc-site':   'Excavación del Sitio',
      'cap-exc-stump':  'Excavación de Tocón',
      'cap-exc-land':   'Preparación de Terreno',
      'cap-exc-grade':  'Nivelación',
      'cap-exc-heavy':  'Excavación Pesada',
      'cap-exc-gen':    'Excavación',
      'cap-exc-root':   'Remoción de Raíces',
      'cap-exc-work':   'Trabajo en Sitio',
      /* Contact */
      'contact-eyebrow': 'Contáctanos',
      'contact-title':   'Solicitar un<br />Estimado Gratis',
      'contact-intro':   '¿Listo para comenzar? Completa el formulario y nos pondremos en contacto contigo dentro de un día hábil. Todos los estimados son gratuitos y sin compromiso.',
      'contact-fb':   'Síguenos en Facebook',
      'contact-addr': '360 Clark St, Bridgeport, CT',
      /* Form */
      'form-label-first':   'Nombre',
      'form-label-last':    'Apellido',
      'form-label-email':   'Correo Electrónico',
      'form-label-phone':   'Número de Teléfono',
      'form-label-service': 'Servicio Necesario',
      'form-label-msg':     'Detalles del Proyecto',
      'form-ph-first':  'Juan',
      'form-ph-last':   'García',
      'form-ph-email':  'juan@ejemplo.com',
      'form-ph-phone':  '(203) 000-0000',
      'form-ph-msg':    'Cuéntanos sobre tu proyecto, propiedad y cronograma ideal…',
      'form-opt-default':  'Selecciona un servicio…',
      'form-opt-lawn':     'Mantenimiento Completo de Césped',
      'form-opt-trees':    'Servicios de Árboles',
      'form-opt-exc':      'Excavación',
      'form-opt-stone':    'Mampostería y Cantería',
      'form-opt-multiple': 'Múltiples Servicios',
      'form-opt-other':    'Otro / No Estoy Seguro',
      'form-submit':       'Enviar Mi Solicitud',
      'form-note':         'Responderemos dentro de un día hábil. Todas las consultas son gratuitas.',
      'form-success-title': '¡Mensaje Enviado!',
      'form-success-body':  'Gracias por contactarnos. Estaremos en comunicación dentro de un día hábil.',
      /* Footer */
      'footer-tagline':      'Creando espacios al aire libre excepcionales en todo Connecticut.',
      'footer-contact-link': 'Contacto',
      'footer-copy':         '&copy; <span id="footer-year"></span> JRK Landscaping. Todos los derechos reservados.',
    }
  };

  var currentLang = 'en';

  /* =====================================================
     SET LANGUAGE
     ===================================================== */
  function setLanguage(lang) {
    currentLang = lang;
    var t = translations[lang];

    /* Plain text elements */
    $$('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        el.textContent = t[key]
          .replace(/&amp;/g, '&')
          .replace(/&lt;/g, '<')
          .replace(/&gt;/g, '>');
      }
    });

    /* HTML elements (contain <br> etc.) */
    $$('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) {
        el.innerHTML = t[key];
        /* Re-stamp footer year if this is the footer copy */
        if (key === 'footer-copy') {
          var yr = el.querySelector('#footer-year');
          if (yr) yr.textContent = new Date().getFullYear();
        }
      }
    });

    /* Placeholder attributes */
    $$('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) {
        el.placeholder = t[key]
          .replace(/&amp;/g, '&');
      }
    });

    /* Update html lang attribute */
    document.documentElement.lang = lang;

    /* Update toggle button labels */
    $$('.lang-toggle').forEach(function (btn) {
      btn.textContent = lang === 'en' ? 'ES' : 'EN';
      btn.setAttribute('aria-label', lang === 'en' ? 'Cambiar a Español' : 'Switch to English');
      btn.classList.toggle('active', lang === 'es');
    });

    /* Persist preference */
    try { localStorage.setItem('jrk-lang', lang); } catch (e) {}
  }

  /* =====================================================
     LANGUAGE TOGGLE INIT
     ===================================================== */
  function initLangToggle() {
    $$('.lang-toggle').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLanguage(currentLang === 'en' ? 'es' : 'en');
      });
    });

    /* Restore saved preference */
    var saved;
    try { saved = localStorage.getItem('jrk-lang'); } catch (e) {}
    if (saved === 'es') setLanguage('es');
  }

  /* =====================================================
     1. Header scroll state
     ===================================================== */
  var header = $('#site-header');

  function updateHeader() {
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 24);
  }
  window.addEventListener('scroll', updateHeader, { passive: true });
  updateHeader();


  /* =====================================================
     Hero background carousel
     ===================================================== */
  (function () {
    var slides = $$('.hero-carousel-slide');
    if (slides.length === 0) return;
    var idx = 0;
    var interval = 5500;

    function next() {
      slides[idx].classList.remove('active');
      idx = (idx + 1) % slides.length;
      slides[idx].classList.add('active');
    }

    var t = setInterval(next, interval);
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) clearInterval(t);
      else t = setInterval(next, interval);
    });
  })();


  /* =====================================================
     2. Mobile Menu Toggle
     ===================================================== */
  var menuToggle = $('#menu-toggle');
  var mobileMenu = $('#mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.contains('open');
      mobileMenu.classList.toggle('open', !isOpen);
      menuToggle.classList.toggle('open', !isOpen);
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      mobileMenu.setAttribute('aria-hidden', String(isOpen));
    });

    $$('.mobile-nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      });
    });

    document.addEventListener('click', function (e) {
      if (!header.contains(e.target)) {
        mobileMenu.classList.remove('open');
        menuToggle.classList.remove('open');
        menuToggle.setAttribute('aria-expanded', 'false');
        mobileMenu.setAttribute('aria-hidden', 'true');
      }
    });
  }


  /* =====================================================
     3. Carousel Pagination
     ===================================================== */
  function initCarousel(trackId, dotsId) {
    var track = $('#' + trackId);
    var dotsContainer = $('#' + dotsId);
    if (!track || !dotsContainer) return;

    var cards = Array.from(track.children);
    if (cards.length === 0) return;

    dotsContainer.innerHTML = '';
    cards.forEach(function (_, i) {
      var dot = document.createElement('button');
      dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Go to item ' + (i + 1));
      dot.addEventListener('click', function () {
        cards[i].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
      });
      dotsContainer.appendChild(dot);
    });

    var dots = Array.from(dotsContainer.querySelectorAll('.carousel-dot'));

    function updateActiveDot() {
      var trackLeft = track.scrollLeft;
      var closest = 0;
      var minDiff = Infinity;
      cards.forEach(function (card, i) {
        var diff = Math.abs((card.offsetLeft - track.offsetLeft) - trackLeft);
        if (diff < minDiff) { minDiff = diff; closest = i; }
      });
      dots.forEach(function (dot, i) { dot.classList.toggle('active', i === closest); });
    }

    track.addEventListener('scroll', updateActiveDot, { passive: true });
    updateActiveDot();
  }

  initCarousel('services-track', 'services-dots');
  initCarousel('process-track', 'process-dots');


  /* =====================================================
     4. Portfolio Filter Tabs
     ===================================================== */
  var tabBtns = $$('.tab-btn');
  var portfolioItems = $$('.portfolio-item');

  tabBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var filter = btn.getAttribute('data-filter');
      tabBtns.forEach(function (b) {
        b.classList.remove('tab-btn--active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('tab-btn--active');
      btn.setAttribute('aria-selected', 'true');
      portfolioItems.forEach(function (item) {
        item.classList.toggle('hidden', filter !== 'all' && item.getAttribute('data-category') !== filter);
      });
    });
  });


  /* =====================================================
     5. Contact Form
     ===================================================== */
  var contactForm = $('#contact-form');
  var formSuccess = $('#form-success');

  if (contactForm && formSuccess) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      contactForm.querySelectorAll('[required]').forEach(function (field) {
        if (!field.value.trim()) {
          valid = false;
          field.style.borderColor = '#C0392B';
          field.addEventListener('input', function () { field.style.borderColor = ''; }, { once: true });
        }
      });
      if (!valid) return;
      contactForm.hidden = true;
      formSuccess.hidden = false;
      formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }


  /* =====================================================
     6. Reveal on Scroll
     ===================================================== */
  var revealEls = $$('.reveal');

  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }


  /* =====================================================
     7. Footer Year
     ===================================================== */
  var yearEl = $('#footer-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();


  /* =====================================================
     8. Smooth Scroll
     ===================================================== */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var target = document.querySelector(anchor.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      var top = target.getBoundingClientRect().top + window.scrollY - 72;
      window.scrollTo({ top: top, behavior: 'smooth' });
    });
  });


  /* =====================================================
     INIT
     ===================================================== */
  initLangToggle();

}());
