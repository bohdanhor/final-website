const currentPage = window.location.pathname;

// Load stored name and starter
const storedName = localStorage.getItem("playerName");
const storedStarter = localStorage.getItem("starter");

// Highlight hoverable buttons (except inactive)
const hoverSect = document.querySelectorAll(".hover-section:not(.button-notActive)");
hoverSect.forEach((section) => {
  section.addEventListener("mouseenter", () => {
    section.classList.remove("default-style");
    section.classList.add("hover-style");
  });
  section.addEventListener("mouseleave", () => {
    section.classList.remove("hover-style");
    section.classList.add("default-style");
  });
});

// Reset button — always available
const resetButton = document.getElementById("reset-button");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("playerName");
    localStorage.removeItem("starter");
    location.replace("index.html");
  });
}