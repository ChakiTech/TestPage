// Scroll reveal animation
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = reveals[i].getBoundingClientRect().top;
    const revealPoint = 150;

    if (revealTop < windowHeight - revealPoint) {
      reveals[i].classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);

// Initial check in case already in view
revealOnScroll();
