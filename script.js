
// === Reveal sections on scroll ===
const sections = document.querySelectorAll("section");

function revealOnScroll() {
  const scrollY = window.scrollY + window.innerHeight * 0.85;
  sections.forEach((section) => {
    if (scrollY > section.offsetTop) {
      section.classList.add("show");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// === Starry Background Effect ===
const starsContainer = document.querySelector(".stars");

function createStar() {
  const star = document.createElement("div");
  star.classList.add("star");
  star.style.top = `${Math.random() * document.body.scrollHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.position = "absolute";
  star.style.width = "2px";
  star.style.height = "2px";
  star.style.backgroundColor = "white";
  star.style.borderRadius = "50%";
  star.style.boxShadow = "0 0 4px #0ff";
  star.style.animation = `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`;
  starsContainer.appendChild(star);
}

for (let i = 0; i < 150; i++) {
  createStar();
}

// === Contact Form Submit (Formspree) ===
const form = document.getElementById("contact-form");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  fetch(form.action, {
    method: "POST",
    body: new FormData(form),
    headers: {
      Accept: "application/json"
    }
  }).then((response) => {
    if (response.ok) {
      alert("✅ Thank you! Your message has been sent.");
      form.reset();
    } else {
      alert("❌ Oops! Something went wrong. Please try again.");
    }
  });
});

