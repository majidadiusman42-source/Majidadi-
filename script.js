// Small interactive helpers
document.getElementById('year').textContent = new Date().getFullYear();

const navToggle = document.getElementById('navToggle');
const mainNav = document.getElementById('mainNav');
navToggle && navToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
});

// Basic contact form handling (no backend)
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fm = new FormData(form);
    if (!fm.get('name') || !fm.get('email') || !fm.get('message')) {
      alert('Please fill all fields.');
      return;
    }
    // Replace with real submission (email API or server) if desired
    alert('Thanks! This demo doesn’t send messages—configure a backend or use Formspree/Netlify forms.');
    form.reset();
  });
}