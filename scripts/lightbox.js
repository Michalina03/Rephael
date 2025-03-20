document.addEventListener("DOMContentLoaded", function() {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const lightboxOverlay = document.createElement("div");
  lightboxOverlay.classList.add("lightbox-overlay");
  lightboxOverlay.innerHTML = `
    <span class="close-btn">&times;</span>
    <img src="" alt="Powiększone zdjęcie">
  `;
  document.body.appendChild(lightboxOverlay);

  const lightboxImage = lightboxOverlay.querySelector("img");
  const closeBtn = lightboxOverlay.querySelector(".close-btn");

  galleryItems.forEach(item => {
    item.addEventListener("click", () => {
      const fullSrc = item.getAttribute("data-full");
      lightboxImage.src = fullSrc;  // Ustawiamy źródło na pełny obraz
      lightboxOverlay.style.display = "flex";  // Pokazujemy lightbox
    });
  });

  closeBtn.addEventListener("click", () => {
    lightboxOverlay.style.display = "none";  // Ukrywamy lightbox
    lightboxImage.src = "";  // Czyszczenie źródła obrazu
  });

  // Zamknięcie po kliknięciu w tło
  lightboxOverlay.addEventListener("click", (e) => {
    if (e.target === lightboxOverlay) {
      lightboxOverlay.style.display = "none";
      lightboxImage.src = "";
    }
  });
});

  