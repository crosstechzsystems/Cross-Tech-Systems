/* CROSS TECH SYSTEMS - Interactive Features */

document.addEventListener('DOMContentLoaded', () => {
  // Mobile menu toggle
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('open');
      });
    });
  }

  // Contact form handling
  const contactForm = document.getElementById('contactForm');
  const formStatus = document.getElementById('formStatus');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const contact = document.getElementById('contact').value;
      const service = document.getElementById('service').value;
      const message = document.getElementById('message').value;

      if (!name || !contact || !service || !message) {
        formStatus.textContent = '⚠️ Please fill in all fields';
        formStatus.style.color = '#ff6b6b';
        return;
      }

      // WhatsApp message formatting
      const whatsappMessage = `Hi Cross Tech Systems! My name is ${name}. I need: ${service}. Details: ${message}. You can reach me at ${contact}`;
      const whatsappUrl = `https://wa.me/27836832745?text=${encodeURIComponent(whatsappMessage)}`;
      window.open(whatsappUrl, '_blank');

      formStatus.textContent = '✓ Redirecting to WhatsApp...';
      formStatus.style.color = '#00d4ff';

      setTimeout(() => {
        contactForm.reset();
        formStatus.textContent = '';
      }, 2000);
    });
  }

  // Smooth scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.service-card, .product-card, .about-image').forEach(el => {
    el.style.opacity = '0';
    observer.observe(el);
  });

  // Active nav link on scroll
  const sections = document.querySelectorAll('section[id]');
  const navItems = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navItems.forEach(item => {
      item.classList.remove('active');
      if (item.getAttribute('href').slice(1) === current) {
        item.classList.add('active');
      }
    });
  });
});
