
// Mobile nav toggle
const navBtn = document.getElementById('navBtn');
const navMobile = document.getElementById('navMobile');

if(navBtn && navMobile){
  navBtn.addEventListener('click', () => {
    navMobile.style.display = navMobile.style.display === 'flex' ? 'none' : 'flex';
  });
  navMobile.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => { navMobile.style.display = 'none'; });
  });
}

// Loader HUD logic
const preloader = document.getElementById('preloader');
const loaderStatus = document.getElementById('loaderStatus');
const loaderProgress = document.getElementById('loaderProgress');

let loaderStep = 0;
const loaderMessages = [
  'INITIALIZING SYSTEM...',
  'SCANNING CHANNELS...',
  'LOADING AD PROTOCOLS...',
  'OPTIMIZING FUNNELS...',
  'CALIBRATING HUD...'
];

const loaderInterval = setInterval(() => {
  loaderStep++;
  const percent = Math.min(100, loaderStep * 20);
  if(loaderProgress) loaderProgress.style.width = percent + '%';
  if(loaderStatus && loaderMessages[loaderStep - 1]) {
    loaderStatus.textContent = loaderMessages[loaderStep - 1];
  }
  if(percent >= 100){
    clearInterval(loaderInterval);
    setTimeout(() => {
      if(preloader){
        preloader.style.opacity = '0';
        preloader.style.pointerEvents = 'none';
        setTimeout(() => preloader.remove(), 300);
      }
    }, 350);
  }
}, 450);

// Leads counter + bar
const leadsCounter = document.getElementById('leadsCounter');
const leadsBar = document.getElementById('leadsBar');
let leadsCurrent = 0;
const leadsTarget = 120;

function animateLeads(){
  const step = () => {
    leadsCurrent += 2;
    if(leadsCurrent > leadsTarget) leadsCurrent = leadsTarget;
    if(leadsCounter) leadsCounter.textContent = leadsCurrent.toString();
    const pct = Math.min(100, (leadsCurrent / leadsTarget) * 100);
    if(leadsBar) leadsBar.style.width = pct + '%';
    if(leadsCurrent < leadsTarget) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

window.addEventListener('load', animateLeads);

// Random glitch bursts on hero title & logo
function triggerGlitch(){
  const glitchEls = document.querySelectorAll('.glitch, .glitch-sm');
  if(!glitchEls.length) return;
  const index = Math.floor(Math.random() * glitchEls.length);
  const el = glitchEls[index];
  el.classList.add('glitch-active');
  setTimeout(() => el.classList.remove('glitch-active'), 220);
}

setInterval(triggerGlitch, 2600);

// Prevent actual form submission (placeholder)
const contactForm = document.querySelector('.contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form submitted! Connect this form to your backend or form service to receive leads.');
  });
}
