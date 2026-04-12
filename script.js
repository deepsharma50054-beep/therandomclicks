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
const filmTrack = document.getElementById("filmTrack");
const sliderPrev = document.getElementById("sliderPrev");
const sliderNext = document.getElementById("sliderNext");

if (imageSlider && filmTrack && sliderPrev && sliderNext) {
  let autoRotateTimer;
  let isAnimating = false;

  const duplicateSlidesForLoop = () => {
    const originalSlides = Array.from(filmTrack.querySelectorAll(".slide-card"));
    if (originalSlides.length === 0) return;

    for (let i = 0; i < 2; i += 1) {
      originalSlides.forEach((slide) => {
        const clone = slide.cloneNode(true);
        clone.setAttribute("aria-hidden", "true");
        filmTrack.appendChild(clone);
      });
    }
  };

  const getStepWidth = () => {
    const firstSlide = filmTrack.querySelector(".slide-card");
    if (!firstSlide) return 272;
    const trackStyle = window.getComputedStyle(filmTrack);
    const gap = parseFloat(trackStyle.columnGap || trackStyle.gap || "12");
    return firstSlide.getBoundingClientRect().width + gap;
  };

  const moveForward = () => {
    if (isAnimating) return;
    isAnimating = true;
    const step = getStepWidth();
    filmTrack.style.transition = "transform 0.45s ease";
    filmTrack.style.transform = `translateX(-${step}px)`;

    window.setTimeout(() => {
      const firstSlide = filmTrack.firstElementChild;
      if (firstSlide) {
        filmTrack.appendChild(firstSlide);
      }
      filmTrack.style.transition = "none";
      filmTrack.style.transform = "translateX(0)";
      isAnimating = false;
    }, 460);
  };

  const moveBackward = () => {
    if (isAnimating) return;
    isAnimating = true;
    const step = getStepWidth();
    const lastSlide = filmTrack.lastElementChild;
    if (!lastSlide) return;

    filmTrack.style.transition = "none";
    filmTrack.insertBefore(lastSlide, filmTrack.firstElementChild);
    filmTrack.style.transform = `translateX(-${step}px)`;

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        filmTrack.style.transition = "transform 0.45s ease";
        filmTrack.style.transform = "translateX(0)";
      });
    });
    window.setTimeout(() => {
      isAnimating = false;
    }, 460);
  };

  const restartAutoRotate = () => {
    window.clearInterval(autoRotateTimer);
    autoRotateTimer = window.setInterval(moveForward, 1000);
  };

  sliderPrev.addEventListener("click", () => {
    moveBackward();
    restartAutoRotate();
  });

  sliderNext.addEventListener("click", () => {
    moveForward();
    restartAutoRotate();
  });

  imageSlider.addEventListener("mouseenter", () => window.clearInterval(autoRotateTimer));
  imageSlider.addEventListener("mouseleave", restartAutoRotate);

  duplicateSlidesForLoop();
  restartAutoRotate();
}
