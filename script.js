
// Mobile nav toggle
const navBtn = document.getElementById('navBtn');
const navMobile = document.getElementById('navMobile');

if (navBtn && navMobile) {
  navBtn.addEventListener('click', () => {
    const isOpen = navMobile.style.display === 'flex';
    navMobile.style.display = isOpen ? 'none' : 'flex';
  });

  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navMobile.style.display = 'none';
    });
  });
}

// Reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const obs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => obs.observe(el));

// Lead counter
const leadEl = document.getElementById('leadCount');
if (leadEl) {
  let current = 0;
  const target = 128;
  const step = () => {
    current += 2;
    if (current > target) current = target;
    leadEl.textContent = current.toString();
    if (current < target) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

// Prevent real form submit
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! Connect this to your backend or a form service to receive leads.');
  });
}
