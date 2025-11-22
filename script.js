function handleFormSubmit(e) {
  e.preventDefault();
  alert("Thank you! Your details were sent. We will contact you soon.");
  e.target.reset();
  return false;
}

// Reveal on scroll
const revealEls = document.querySelectorAll(".reveal");

function onScrollReveal() {
  const triggerBottom = window.innerHeight * 0.9;

  revealEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScrollReveal);
window.addEventListener("load", () => {
  onScrollReveal();
  const yearSpan = document.getElementById("year");
  if (yearSpan) yearSpan.textContent = new Date().getFullYear();
});
