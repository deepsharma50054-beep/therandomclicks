const searchPageField = document.getElementById("searchPageField");
const searchPageCategory = document.getElementById("searchPageCategory");
const searchPageCollection = document.getElementById("searchPageCollection");
const searchPageButton = document.getElementById("searchPageButton");
const searchResultsGrid = document.getElementById("searchResultsGrid");
const searchResultsEmpty = document.getElementById("searchResultsEmpty");
const resultsHeading = document.getElementById("resultsHeading");
const resultsSummary = document.getElementById("resultsSummary");
const searchLightbox = document.getElementById("searchLightbox");
const searchLightboxImage = document.getElementById("searchLightboxImage");
const searchLightboxTitle = document.getElementById("searchLightboxTitle");
const searchLightboxDescription = document.getElementById("searchLightboxDescription");
const searchLightboxClose = document.getElementById("searchLightboxClose");
const searchLightboxFullscreen = document.getElementById("searchLightboxFullscreen");
const searchLightboxPrev = document.getElementById("searchLightboxPrev");
const searchLightboxNext = document.getElementById("searchLightboxNext");

const galleryItems = window.galleryItems || [];
let currentResults = [];
let currentResultIndex = 0;

const fullscreenElement =
  () => document.fullscreenElement || document.webkitFullscreenElement || null;

const fullscreenEnabled =
  () => Boolean(document.fullscreenEnabled || document.webkitFullscreenEnabled);

const requestElementFullscreen = async (element) => {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
    return;
  }
  if (element.webkitRequestFullscreen) {
    element.webkitRequestFullscreen();
  }
};

const exitAnyFullscreen = async () => {
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }
  if (document.webkitExitFullscreen) {
    document.webkitExitFullscreen();
  }
};

const readSearchParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    query: params.get("q") || "",
    category: params.get("category") || "all",
    collection: params.get("collection") || "all",
  };
};

const writeSearchParams = ({ query, category, collection }) => {
  const params = new URLSearchParams();

  if (query) {
    params.set("q", query);
  }
  if (category && category !== "all") {
    params.set("category", category);
  }
  if (collection && collection !== "all") {
    params.set("collection", collection);
  }

  const target = params.toString() ? `?${params.toString()}` : window.location.pathname;
  window.history.replaceState({}, "", target);
};

const createGalleryCard = (item) => {
  const article = document.createElement("article");
  article.className = "art-card";
  article.tabIndex = 0;
  article.setAttribute("role", "button");
  article.setAttribute("aria-label", `Open ${item.title} in fullscreen view`);
  article.innerHTML = `
    <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
    <div class="art-meta">
      <h4>${item.title}</h4>
      <p>${item.meta}</p>
    </div>
  `;
  return article;
};

const showSearchLightboxImage = (index) => {
  if (!searchLightbox || !searchLightboxImage || currentResults.length === 0) return;

  currentResultIndex = (index + currentResults.length) % currentResults.length;
  const item = currentResults[currentResultIndex];

  searchLightboxImage.src = item.image;
  searchLightboxImage.alt = item.title;
  searchLightboxTitle.textContent = item.title;
  searchLightboxDescription.textContent = item.meta;
};

const openSearchLightbox = async (index, shouldEnterFullscreen = false) => {
  if (!searchLightbox) return;
  showSearchLightboxImage(index);
  searchLightbox.hidden = false;
  searchLightbox.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (shouldEnterFullscreen && fullscreenEnabled()) {
    try {
      await requestElementFullscreen(searchLightbox);
      updateSearchFullscreenButton();
    } catch (error) {
      console.error("Opening fullscreen from search result failed", error);
    }
  }
};

const closeSearchLightbox = async () => {
  if (!searchLightbox) return;

  if (fullscreenElement() === searchLightbox) {
    try {
      await exitAnyFullscreen();
    } catch (error) {
      console.error("Exiting fullscreen failed", error);
    }
  }

  searchLightbox.hidden = true;
  searchLightbox.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
};

const updateSearchFullscreenButton = () => {
  if (!searchLightboxFullscreen) return;

  const isFullscreen = fullscreenElement() === searchLightbox;
  searchLightboxFullscreen.textContent = isFullscreen ? "⤢" : "⛶";
  searchLightboxFullscreen.setAttribute(
    "aria-label",
    isFullscreen ? "Exit fullscreen" : "Open fullscreen"
  );
};

const toggleSearchFullscreen = async () => {
  if (!searchLightbox || !searchLightboxFullscreen || !fullscreenEnabled()) return;

  try {
    if (fullscreenElement() === searchLightbox) {
      await exitAnyFullscreen();
    } else {
      await requestElementFullscreen(searchLightbox);
    }
  } catch (error) {
    console.error("Fullscreen request failed", error);
  }
};

const updateResultsCopy = (count, query, category, collection) => {
  if (!resultsHeading || !resultsSummary) return;

  if (query) {
    resultsHeading.textContent = `Results for "${query}"`;
  } else {
    resultsHeading.textContent = "Frames matched to your search.";
  }

  const parts = [];
  if (category !== "all") {
    parts.push(`category: ${category}`);
  }
  if (collection !== "all") {
    parts.push(`collection: ${collection}`);
  }

  const detail = parts.length ? `Filtered by ${parts.join(" • ")}.` : "Showing every matching frame in the gallery.";
  resultsSummary.textContent = `${count} frame${count === 1 ? "" : "s"} found. ${detail}`;
};

const renderResults = () => {
  if (!searchResultsGrid) return;

  const query = searchPageField?.value.trim().toLowerCase() || "";
  const category = searchPageCategory?.value || "all";
  const collection = searchPageCollection?.value || "all";

  const matches = galleryItems.filter((item) => {
    const searchable = `${item.title} ${item.meta} ${item.keywords}`.toLowerCase();
    const matchesQuery = query === "" || searchable.includes(query);
    const matchesCategory = category === "all" || item.category === category;
    const matchesCollection = collection === "all" || item.collection === collection;
    return matchesQuery && matchesCategory && matchesCollection;
  });

  currentResults = matches;
  searchResultsGrid.innerHTML = "";
  matches.forEach((item, index) => {
    const card = createGalleryCard(item);
    card.addEventListener("click", () => {
      openSearchLightbox(index, true);
    });
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openSearchLightbox(index, true);
      }
    });
    searchResultsGrid.appendChild(card);
  });

  if (searchResultsEmpty) {
    searchResultsEmpty.hidden = matches.length !== 0;
  }

  updateResultsCopy(matches.length, query, category, collection);
  writeSearchParams({ query, category, collection });
};

const initializeSearchPage = () => {
  const initial = readSearchParams();

  if (searchPageField) {
    searchPageField.value = initial.query;
    searchPageField.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        renderResults();
      }
    });
  }

  if (searchPageCategory) {
    searchPageCategory.value = initial.category;
    searchPageCategory.addEventListener("change", renderResults);
  }

  if (searchPageCollection) {
    searchPageCollection.value = initial.collection;
    searchPageCollection.addEventListener("change", renderResults);
  }

  if (searchPageButton) {
    searchPageButton.addEventListener("click", renderResults);
  }

  if (searchLightbox && searchLightboxClose && searchLightboxPrev && searchLightboxNext) {
    searchLightboxClose.addEventListener("click", closeSearchLightbox);
    searchLightboxPrev.addEventListener("click", () => showSearchLightboxImage(currentResultIndex - 1));
    searchLightboxNext.addEventListener("click", () => showSearchLightboxImage(currentResultIndex + 1));

    if (searchLightboxFullscreen) {
      if (fullscreenEnabled()) {
        searchLightboxFullscreen.addEventListener("click", toggleSearchFullscreen);
        updateSearchFullscreenButton();
      } else {
        searchLightboxFullscreen.hidden = true;
      }
    }

    searchLightbox.addEventListener("click", (event) => {
      if (event.target === searchLightbox) {
        closeSearchLightbox();
      }
    });

    document.addEventListener("keydown", (event) => {
      if (searchLightbox.hidden) return;

      if (event.key === "Escape") {
        closeSearchLightbox();
      } else if (event.key === "ArrowLeft") {
        showSearchLightboxImage(currentResultIndex - 1);
      } else if (event.key === "ArrowRight") {
        showSearchLightboxImage(currentResultIndex + 1);
      }
    });

    document.addEventListener("fullscreenchange", updateSearchFullscreenButton);
    document.addEventListener("webkitfullscreenchange", updateSearchFullscreenButton);
  }

  renderResults();
};

initializeSearchPage();
