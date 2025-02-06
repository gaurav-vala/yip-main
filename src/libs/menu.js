document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuIcon = document.getElementById("menu-icon");

  if (menuToggle && mobileMenu && menuIcon) {
    menuToggle.addEventListener("click", () => {
      mobileMenu.classList.toggle("active");
      mobileMenu.classList.toggle("hidden");

      // Toggle menu icon (hamburger ↔ close)
      if (mobileMenu.classList.contains("hidden")) {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />`;
      } else {
        menuIcon.innerHTML = `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />`;
      }
    });
  }
});
