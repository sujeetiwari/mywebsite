// SCROLL ANIMATION
const elements = document.querySelectorAll(".fade-up");

function showOnScroll() {
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (top < screenHeight - 100) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", showOnScroll);

function scrollSlider(direction) {
  const slider = document.getElementById("slider");
  const scrollAmount = 300;

  slider.scrollBy({
    left: direction * scrollAmount,
    behavior: "smooth"
  });
}

