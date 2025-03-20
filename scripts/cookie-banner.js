document.addEventListener("DOMContentLoaded", function() {
    if (!localStorage.getItem("cookiesAccepted")) {
      const cookieBanner = document.createElement("div");
      cookieBanner.id = "cookie-banner";
      cookieBanner.innerHTML = `
        <p>Ta strona korzysta z plików cookie, aby zapewnić najlepsze doświadczenie. Akceptujesz ich użycie?</p>
        <button id="accept-cookies" class="btn-cookies">Akceptuję</button>
        <button id="close-cookies" class="btn-cookies">Zamknij</button>
      `;
      document.body.appendChild(cookieBanner);
  
      document.getElementById("accept-cookies").addEventListener("click", function() {
        localStorage.setItem("cookiesAccepted", "true");
        cookieBanner.style.display = "none";
      });
  
      document.getElementById("close-cookies").addEventListener("click", function() {
        cookieBanner.style.display = "none";
      });
    }
  });
  