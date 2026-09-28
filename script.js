document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    navLinks.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const scrollTopBtn = document.getElementById('scrollTop');
  if (scrollTopBtn) {
    const toggleScrollButton = () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 500);
    };

    toggleScrollButton();
    window.addEventListener('scroll', toggleScrollButton);
    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const form = document.getElementById('contactForm');
  const formNote = document.getElementById('formNote');

  if (form && formNote) {
    form.addEventListener('submit', (event) => {
      event.preventDefault();

      if (!form.checkValidity()) {
        formNote.textContent = 'Please complete all required fields before sending.';
        return;
      }

      const data = new FormData(form);
      const name = (data.get('name') || '').toString().trim();
      const contact = (data.get('contact') || '').toString().trim();
      const service = (data.get('service') || '').toString().trim();
      const message = (data.get('message') || '').toString().trim();

      const text = `Hello Cross Tech Systems,%0A%0AName: ${encodeURIComponent(name)}%0AContact: ${encodeURIComponent(contact)}%0AService: ${encodeURIComponent(service)}%0A%0AMessage:%0A${encodeURIComponent(message)}`;
      const waLink = `https://wa.me/27836832745?text=${text}`;

      formNote.textContent = 'Thank you — we have prepared your enquiry for WhatsApp.';
      window.open(waLink, '_blank', 'noopener');
      form.reset();
    });
  }
});
