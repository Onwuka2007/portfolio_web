"use strict";
// Set current yearLL
document.getElementById("year").textContent = new Date().getFullYear();

// Generate stars
const starsContainer = document.getElementById("stars");
for (let i = 0; i < 100; i++) {
  const star = document.createElement("div");
  star.className = "star absolute w-0.5 h-0.5 bg-white rounded-full";
  star.style.left = Math.random() * 100 + "%";
  star.style.top = Math.random() * 100 + "%";
  star.style.animationDelay = Math.random() * 3 + "s";
  starsContainer.appendChild(star);
}

// // Hide header on scroll down, show on scroll up
// let scrollEnabled = true;

// window.addEventListener("scroll", () => {
//   if (!scrollEnabled) return; // skip scroll logic

//   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

//   if (currentScroll > lastScrollTop) {
//     header.style.top = "-110px";
//     header.style.transition = "0.5s";
//   } else {
//     header.style.top = "0";
//   }

//   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
// });

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
  "Hey, I'm Manny 👋",
  "Aspiring Fullstack Developer",
  "Creative Engineer",
  "Code Artist",
  "Problem Solver",
];

let index = 0;
const changingText = document.getElementById("changing-text");

setInterval(() => {
  index = (index + 1) % roles.length;
  changingText.classList.add("opacity-0"); // fade out

  setTimeout(() => {
    changingText.textContent = roles[index];
    changingText.classList.remove("opacity-0"); // fade in
  }, 500);

}, 2500);
