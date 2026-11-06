// Footer: copyright year and last modified date
const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentYear.textContent = new Date().getFullYear();
lastModified.textContent = document.lastModified;

// Hamburger menu
const menuButton = document.querySelector("#menu");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.innerHTML = isOpen ? "&#10005;" : "&#9776;"; // X or hamburger
    menuButton.setAttribute("aria-expanded", isOpen);
});