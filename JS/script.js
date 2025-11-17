"use strict";
// Set current yearLL
document.getElementById("year").textContent = new Date().getFullYear();

// Generate stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 75; i++) {
  const star = document.createElement("div");
  star.className = "star absolute w-0.5 h-0.5 bg-white rounded-full";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}

const menuBtn = document.getElementById("mobile-menu-button");
const spans = menuBtn.querySelectorAll("span");
const mobileMenu = document.getElementById("mobile-menu");
let open = false;

function spinMenuBtn() {
  // Animate hamburger icon
  spans[0].classList.toggle("rotate-45", open);
  spans[0].classList.toggle("translate-y-2", open);
  spans[1].classList.toggle("-rotate-45", open);
  spans[1].classList.toggle("-translate-y-2", open);
}

menuBtn.addEventListener("click", () => {
  open = !open;
  spinMenuBtn();

  // Toggle menu visibility
  if (open) {
    mobileMenu.classList.remove("hidden");
    mobileMenu.classList.add("flex");
    document.body.style.overflowY = "hidden";
  } else {
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    document.body.style.overflowY = "auto";
  }
});
// Close mobile menu on link click
const mobileLinks = mobileMenu.querySelectorAll("a");
mobileLinks.forEach((link) => {
  link.addEventListener("click", () => {
    open = false;
    mobileMenu.classList.add("hidden");
    mobileMenu.classList.remove("flex");
    document.body.style.overflowY = "auto";
    spinMenuBtn();
  });
});

// switching text
const roles = [
  "website developer",
  "Creative Engineer",
  "Code Artist",
  "Problem Solver",
];

let index = 0;
const changingText = document.getElementById("changing-text");

setInterval(() => {
  changingText.classList.add(
    "-translate-y-2",
    "opacity-0",
    "transition-all",
    "duration-500"
  );

  setTimeout(() => {
    index = (index + 1) % roles.length;
    changingText.textContent = roles[index].toUpperCase();
    changingText.classList.remove("-translate-y-2", "opacity-0");
  }, 500);
}, 2500);

// smooth scrool with Lenis
const lenis = new Lenis({
  autoRaf: true,
});
