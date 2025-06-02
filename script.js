// Highlight buttons - copied it from internet and edited --------------- START
  const hoverSect = document.querySelectorAll(".hover-section:not(.button-notActive)"); 
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
}

// Define the name of user after clicking the start button
if (nameButton) {
  nameButton.addEventListener("click", () => {
    const name = document.getElementById("nameInput").value.trim();
    if (name !== "") {
      localStorage.setItem("playerName", name);
      document.getElementById("nameOutput").textContent = name;
    }
  });
}

// START OF DEFINING STARTER BY CLICKING ------------------
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
  squiBtn.addEventListener("click",() => {
    const starter = "Squirtle";
    localStorage.setItem("starter", starter);
    console.log("Starter saved: " + starter);
  })
}
// END OF DEFINING STARTER BY CLICKING --------------------

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

const resetButton = document.getElementById("reset-button");
if (resetButton) {
    resetButton.addEventListener("click", () =>{
      localStorage.clear();
      location.reload();
  });
}