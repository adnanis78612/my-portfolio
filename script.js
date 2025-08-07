
const typewriter = document.querySelector(".typewriter");
const text = "Mohd Adnan";
let idx = 0;

function type() {
  if (idx < text.length) {
    typewriter.textContent += text.charAt(idx);
    idx++;
    setTimeout(type, 150);
  }
}

window.addEventListener("load", () => {
  typewriter.textContent = "";
  type();
});


ScrollReveal().reveal('.section-title, .about-content, .education-content, .skills-grid, .project-list, .contact-form, .social-icons', {
  origin: 'bottom',
  distance: '30px',
  duration: 800,
  delay: 100,
  reset: true
});
