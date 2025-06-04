// Check if name is already defined by function below this one
const nameButton = document.getElementById("nameInput-button");
const nameOutput = document.getElementById("nameOutput");

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

if (nameButton) {
  nameButton.addEventListener("click", () => {
    const nameInput = document.getElementById("nameInput").value.trim();
    if (nameInput !== "") {
      localStorage.setItem("playerName", nameInput);
      document.getElementById("nameOutput").textContent = nameInput;
      document.getElementById("mainContent").style.display = "block";
      document.getElementById("inputNameSection").style.display = "none";
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

// Logic for Buttons Next and Back 

const nextButton = document.getElementById("next-button");
const backButton = document.getElementById("back-button");
const upcomingEls = document.getElementsByClassName("upcoming");

let currentStep = 0;
updateButtonStates();

if (nextButton) {
  nextButton.addEventListener("click", () => {
    if (currentStep < upcomingEls.length - 1) {
      upcomingEls[currentStep].style.display = "none";
      currentStep++;
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
  // Force rebind of hover if button was re-enabled
  if (!backButton.disabled && !backButton.classList.contains("hover-style")) {
    backButton.addEventListener("mouseenter", () => {
      backButton.classList.add("hover-style");
    });
    backButton.addEventListener("mouseleave", () => {
      backButton.classList.remove("hover-style");
    });
  }
}

// -- >> START OF DEFINING STARTER BY CLICKING ------------------------- >> //
const starterMessage = document.getElementById("starter1");

const bulbaBtn = document.getElementById("bulbasaur-button");
const charBtn = document.getElementById("charmander-button");
const squiBtn = document.getElementById("squirtle-button");

if (bulbaBtn) {
  bulbaBtn.addEventListener("click", () => {
    const starter = "Bulbasaur";
    const name = localStorage.getItem("playerName");
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
    document.getElementById("start-buttonSection").style.display = "flex";
    starterMessage.innerHTML = `You chose <strong>${starter}</strong>, great decision!<br><br><br><br>
    <strong>${starter}</strong>, as a Grass and Poison-type, grows steadily and can handle more than it seems at first glance.
    <br><br><br><br>
    So, <strong>${name}</strong>, do you want to go with<br>the Grass Pokémon <strong>${starter}</strong>?`;
    bulbaBtn.classList.add("button-pressed");
    charBtn.classList.remove("button-pressed");
    squiBtn.classList.remove("button-pressed");
  });
}

if (charBtn) {
  charBtn.addEventListener("click", () => {
    const starter = "Charmander";
    const name = localStorage.getItem("playerName");
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
    document.getElementById("start-buttonSection").style.display = "flex";
    starterMessage.innerHTML = `You chose <strong>${starter}</strong>, nice one!<br><br><br><br>
    <strong>${starter}</strong> is a pure Fire-type, known for its bold and fierce attacks but also for some critical weaknesses.
    <br><br><br><br>
    So, <strong>${name}</strong>, do you want to go with<br>the Fire Pokémon <strong>${starter}</strong>?`;
    charBtn.classList.add("button-pressed");
    bulbaBtn.classList.remove("button-pressed");
    squiBtn.classList.remove("button-pressed");
  });
}

if (squiBtn) {
  squiBtn.addEventListener("click", () => {
    const starter = "Squirtle";
    const name = localStorage.getItem("playerName");
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
    document.getElementById("start-buttonSection").style.display = "flex";
    starterMessage.innerHTML = `You chose <strong>${starter}</strong>!<br><br><br><br>
    <strong>${starter}</strong>, as a Water-type, doesn’t take many risks — but it can still hold its own in the right hands.
    <br><br><br><br>
    So, <strong>${name}</strong>, do you want to go with<br>the Water Pokémon <strong>${starter}</strong>?`;
    squiBtn.classList.add("button-pressed");
    bulbaBtn.classList.remove("button-pressed");
    charBtn.classList.remove("button-pressed");
  });
}
// << -- END OF DEFINING STARTER BY CLICKING --------------------------- << //

//START (SELECTED POKEMON) BUTTON
const selectedPokemonButton = document.getElementById("selectedPokemon-button");
if (selectedPokemonButton) {
  selectedPokemonButton.addEventListener("click", () => {
    window.open("typechart.html", "_self");
  });
}