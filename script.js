// Highlight buttons - copied it from internet and edited --------------- START
const hoverSect = document.querySelectorAll(
  ".hover-section:not(.button-notActive)"
);
// ^^^ Search for all hover elements excluding not active buttons ^^^

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
// Highlight buttons - copied it from internet and edited ----------------- END

// Check if name is already defined by function below this one
const nameButton = document.getElementById("nameInput-button");
const nameOutput = document.getElementById("nameOutput");
const storedName = localStorage.getItem("playerName");

if (nameOutput && storedName) {
  nameOutput.textContent = storedName;
  console.log("Pre-saved name: " + storedName);
  document.getElementById("mainContent").style.display = "block";
  const upcomingEls = document.getElementsByClassName("upcoming"); 
        for (let i = 1; i < upcomingEls.length; i++) {
          upcomingEls[i].style.display = "none";
        }
  document.getElementById("inputNameSection").style.display = "none";
}

// Define the name of user after clicking the start button, hide the intro
if (nameButton) {
  nameButton.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput !== "") {
      localStorage.setItem("playerName", nameInput);
      document.getElementById("nameOutput").textContent = nameInput;
      document.getElementById("mainContent").style.display = "block";
      document.getElementById("inputNameSection").style.display = "none";
        // This and lines below turn off all slides e.g. intro2 except first, intro1.
        const upcomingEls = document.getElementsByClassName("upcoming"); 
        for (let i = 1; i < upcomingEls.length; i++) {
          upcomingEls[i].style.display = "none";
        }
    }
  });
}

// Triggers defining the name by pressing ENTER in text field (wont work without function above)
const nameInputField = document.getElementById("nameInput");
if (nameInputField) {
  nameInputField.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      nameButton.click(); 
    }
  });
}

// Trying to make Next and Back buttons work
const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const upcomingEls = document.getElementsByClassName("upcoming");

let currentStep = 0; // shared step tracker

// Initial button state
updateButtonStates();

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (currentStep < upcomingEls.length - 1) {
      // Hide current element
      upcomingEls[currentStep].style.display = "none";
      currentStep++;

      // Show next element
      upcomingEls[currentStep].style.display = "flex";

      // If this is the final step (starter), hide Next and Back buttons and show starter-container
      if (upcomingEls[currentStep].id === "starter1") {
        nextButton.style.display = "none";
        backButton.style.display = "none";

        const starterSection = document.querySelector(".starter-container");
        if (starterSection) {
          starterSection.style.display = "flex";
        }
      } else {
        updateButtonStates(); // Only call this if not hiding buttons
      }
    }
  });
}


if (backButton) {
  backButton.addEventListener("click", () => {
    if (currentStep > 0) {
      upcomingEls[currentStep].style.display = "none";
      currentStep--;
      upcomingEls[currentStep].style.display = "flex";
      updateButtonStates();
    }
  });
}

function updateButtonStates() {
  // Disable "Back" if on first step
  if (currentStep === 0) {
    backButton.classList.add("button-notActive");
    backButton.disabled = true;
  } else {
    backButton.classList.remove("button-notActive");
    backButton.disabled = false;
  }

  // Disable "Next" if on last step
  if (currentStep === upcomingEls.length - 1) {
    nextButton.classList.add("button-notActive");
    nextButton.disabled = true;
  } else {
    nextButton.classList.remove("button-notActive");
    nextButton.disabled = false;
  }
}

// -- >> START OF DEFINING STARTER BY CLICKING ------------------------- >> //
const bulbaBtn = document.getElementById("bulbasaur-button");
if (bulbaBtn) {
  bulbaBtn.addEventListener("click", () => {
    const starter = "Bulbasaur";
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
  });
}

const charBtn = document.getElementById("charmander-button");
if (charBtn) {
  charBtn.addEventListener("click", () => {
    const starter = "Charmander";
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
  });
}

const squiBtn = document.getElementById("squirtle-button");
if (squiBtn) {
  squiBtn.addEventListener("click", () => {
    const starter = "Squirtle";
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
  });
}
// << -- END OF DEFINING STARTER BY CLICKING --------------------------- << //

//RESET BUTTON
const resetButton = document.getElementById("reset-button");
if (resetButton) {
  resetButton.addEventListener("click", () => {
    localStorage.removeItem("playerName");
    localStorage.removeItem("starter");
    location.replace("index.html");
  });
}

// TYPECHART INTRO MESSAGE
const typechartIntro = document.getElementById("typechart0");
if (typechartIntro) {
  const name = localStorage.getItem("playerName");
  const starter = localStorage.getItem("starter");

  if (name && starter) {
    typechartIntro.innerHTML = `You chose <strong>${starter}</strong>, <strong>${name}</strong>!<br><br>Let’s see how your partner handles type matchups.`;
  } else {
    typechartIntro.textContent = "You haven’t chosen a starter yet.";
  }
}

// GYM INTRO MESSAGE
const gymsIntro = document.getElementById("gyms0");
const playerName = localStorage.getItem("playerName");
const starter = localStorage.getItem("starter");

if (gymsIntro && playerName && starter) {
  gymsIntro.innerHTML = `Trainer <strong>${playerName}</strong>, with your <strong>${starter}</strong>, here’s who you’re ready to face — and who might give you trouble.`;
}
