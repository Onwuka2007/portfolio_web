const mobileMenuBtn = document.getElementById("mobile-menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");

mobileMenuBtn.addEventListener("click", () => {
  const isOpen = mobileMenu.classList.toggle("open");
  mobileMenuBtn.setAttribute("aria-expanded", isOpen);

  // Toggle icons
  menuIcon.classList.toggle("hidden");
  closeIcon.classList.toggle("hidden");
});

// Close menu when clicking a link
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("open");
    mobileMenuBtn.setAttribute("aria-expanded", "false");
    menuIcon.classList.remove("hidden");
    closeIcon.classList.add("hidden");
  });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenuBtn.contains(e.target) && !mobileMenu.contains(e.target)) {
    if (mobileMenu.classList.contains("open")) {
      mobileMenu.classList.remove("open");
      mobileMenuBtn.setAttribute("aria-expanded", "false");
      menuIcon.classList.remove("hidden");
      closeIcon.classList.add("hidden");
    }
  }
});

