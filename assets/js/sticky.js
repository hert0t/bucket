"use strict";

// document.addEventListener("DOMContentLoaded", function() {
// Get the header element
var header = document.querySelector(".app-header");

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add or remove the "sticky-pin" class based on scroll position
function handleScroll() {
  if (window.scrollY > sticky) {
    header.classList.add("sticky-pin");
  } else {
    header.classList.remove("sticky-pin");
  }
}

// Event listener for the scroll event
window.addEventListener("scroll", handleScroll);
// });

//for sidebar
window.addEventListener("scroll", stickyFn);
var navbar = document.getElementById("sidebar");
var sticky = navbar.offsetTop;
function stickyFn() {
  if (window.scrollY >= 75) {
    navbar.classList.add("sticky-pin");
  } else {
    navbar.classList.remove("sticky-pin");
  }
}
window.addEventListener("scroll", stickyFn);
window.addEventListener("DOMContentLoaded", stickyFn);
// })();
