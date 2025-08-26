// Select elements
const menuBar = document.querySelector(".menu-bar");
const closeBar = document.querySelector(".close-bar");
const navLinks = document.querySelector(".nav-links");

// Open menu
menuBar.addEventListener("click", () => {
  navLinks.classList.add("active");
  navLinks.style.display = "flex"; // show menu
  menuBar.style.display = "none"; // hide menu icon
  closeBar.style.display = "block"; // show close icon
});

// Close menu
closeBar.addEventListener("click", () => {
  navLinks.classList.remove("active");
  navLinks.style.display = "none"; // hide menu
  menuBar.style.display = "block"; // show menu icon
  closeBar.style.display = "none"; // hide close icon
});

// close menu when clicking on a link
document.querySelectorAll(".nav-links li a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    navLinks.style.display = "none";
    menuBar.style.display = "block";
    closeBar.style.display = "none";
  });
});
