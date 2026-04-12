const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

document.querySelectorAll(".filter-chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    const group = chip.parentElement.querySelectorAll(".filter-chip");
    group.forEach((item) => item.classList.remove("active"));
    chip.classList.add("active");
  });
});

const imageSlider = document.getElementById("imageSlider");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");
const sliderDots = document.getElementById("sliderDots");

if (imageSlider && sliderPrev && sliderNext) {
  const slides = Array.from(imageSlider.querySelectorAll(".slide-card"));
  let activeIndex = 0;
  let autoRotateTimer;

  const getWrappedIndex = (index) => (index + slides.length) % slides.length;

  const updateDots = () => {
    if (!sliderDots) return;
    Array.from(sliderDots.querySelectorAll(".slider-dot")).forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === activeIndex);
    });
  };

  const renderCarousel = (index) => {
    activeIndex = getWrappedIndex(index);

    slides.forEach((slide) => {
      slide.classList.remove("is-center", "is-left", "is-right", "is-back-left", "is-back-right");
    });

    slides[activeIndex].classList.add("is-center");
    slides[getWrappedIndex(activeIndex - 1)].classList.add("is-left");
    slides[getWrappedIndex(activeIndex + 1)].classList.add("is-right");
    slides[getWrappedIndex(activeIndex - 2)].classList.add("is-back-left");
    slides[getWrappedIndex(activeIndex + 2)].classList.add("is-back-right");

    updateDots();
  };

  const restartAutoRotate = () => {
    window.clearInterval(autoRotateTimer);
    autoRotateTimer = window.setInterval(() => {
      renderCarousel(activeIndex + 1);
    }, 4200);
  };

  sliderPrev.addEventListener("click", () => {
    renderCarousel(activeIndex - 1);
    restartAutoRotate();
  });

  sliderNext.addEventListener("click", () => {
    renderCarousel(activeIndex + 1);
    restartAutoRotate();
  });

  if (sliderDots) {
    slides.forEach((_, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "slider-dot";
      dot.setAttribute("aria-label", `Go to slide ${index + 1}`);
      dot.addEventListener("click", () => {
        renderCarousel(index);
        restartAutoRotate();
      });
      sliderDots.appendChild(dot);
    });
  }

  imageSlider.addEventListener("mouseenter", () => window.clearInterval(autoRotateTimer));
  imageSlider.addEventListener("mouseleave", restartAutoRotate);

  renderCarousel(0);
  restartAutoRotate();
}
