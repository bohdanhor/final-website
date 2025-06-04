const currentPage = window.location.pathname;

// Load stored name and starter
const storedName = localStorage.getItem("playerName");
const storedStarter = localStorage.getItem("starter");

// Reset button — always available
const resetButton = document.getElementById("reset-button");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("playerName");
    localStorage.removeItem("starter");
    location.replace("index.html");
  });
}