// Select navbar and mobile nav elements
const navbar = document.querySelector('.navbar');
const navLinksList = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

// Smooth scroll handler for anchor links (except href="#")
const navLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');

navLinks.forEach(link => {
  link.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (!href || href === '#') return; // ignore empty or dummy links

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const offset = navbar ? navbar.offsetHeight : 70;
      window.scroll({
        top: target.offsetTop - offset,
        behavior: 'smooth',
      });
    }

    // Close mobile nav menu after clicking a link (on small screens)
    if (window.innerWidth <= 520 && navLinksList && hamburger) {
      navLinksList.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.classList.remove('open');
    }
  });
});

// Show alert on form submission and reset form
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for contacting Neethify! We'll get back to you soon.");
    form.reset();
  });
});

// Toggle sticky shadow on navbar when scrolling past 10px
window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Toggle mobile navigation menu on hamburger click
if (hamburger && navLinksList) {
  hamburger.addEventListener('click', () => {
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    hamburger.setAttribute('aria-expanded', String(!expanded));
    navLinksList.classList.toggle('open');
    hamburger.classList.toggle('open');
  });

  // Accessibility: toggle nav on Enter/Space keys
  hamburger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      hamburger.click();
    }
  });
}
