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

const searchField = document.getElementById("gallerySearchField");
const categorySelect = document.getElementById("galleryCategorySelect");
const collectionSelect = document.getElementById("galleryCollectionSelect");
const searchButton = document.getElementById("gallerySearchButton");
const galleryGrid = document.getElementById("galleryGrid");
const emptyState = document.getElementById("galleryEmptyState");
const filterChips = document.querySelectorAll(".filter-chip");
const galleryCards = Array.from(document.querySelectorAll(".art-card"));

const syncActiveChip = (value) => {
  filterChips.forEach((chip) => {
    chip.classList.toggle("active", chip.dataset.filter === value);
  });
};

const applyHomepageCategoryFilter = (selectedCategory) => {
  let visibleCount = 0;

  galleryCards.forEach((card) => {
    const category = card.dataset.category || "";
    const isVisible = selectedCategory === "all" || category === selectedCategory;

    card.classList.toggle("is-hidden", !isVisible);
    if (isVisible) visibleCount += 1;
  });

  if (galleryGrid) {
    galleryGrid.setAttribute("aria-live", "polite");
  }

  if (emptyState) {
    emptyState.hidden = visibleCount !== 0;
  }
};

const openSearchResultsPage = () => {
  const params = new URLSearchParams();
  const query = searchField?.value.trim() || "";
  const category = categorySelect?.value || "all";
  const collection = collectionSelect?.value || "all";

  if (query) {
    params.set("q", query);
  }
  if (category !== "all") {
    params.set("category", category);
  }
  if (collection !== "all") {
    params.set("collection", collection);
  }

  const target = params.toString() ? `search.html?${params.toString()}` : "search.html";
  window.location.href = target;
};

filterChips.forEach((chip) => {
  chip.addEventListener("click", () => {
    const nextFilter = chip.dataset.filter || "all";
    syncActiveChip(nextFilter);
    applyHomepageCategoryFilter(nextFilter);
  });
});

if (searchButton) {
  searchButton.addEventListener("click", openSearchResultsPage);
}

if (searchField) {
  searchField.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      openSearchResultsPage();
    }
  });
}

if (categorySelect) {
  categorySelect.addEventListener("change", () => syncActiveChip(categorySelect.value));
}

applyHomepageCategoryFilter("all");

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
