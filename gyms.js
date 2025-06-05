const gymIntro = document.getElementById("gyms0");
const nextButtonGym = document.getElementById("next-button-gyms");
const backButtonGym = document.getElementById("back-button-gyms");
const upcomingEls = document.getElementsByClassName("upcoming");

// Lazy 2am fix for name, will need to change this --- START
const altName = document.getElementById("nameOutput2");
if (altName && storedName) {
  altName.textContent = storedName;
}

const altName1 = document.getElementById("nameOutput3");
if (altName1 && storedName) {
  altName1.textContent = storedName;
}

const altName2 = document.getElementById("nameOutput4");
if (altName2 && storedName) {
  altName2.textContent = storedName;
}
// Lazy 2am fix for a name, will need to change this --- END

if (gymIntro && storedName && storedStarter) {
  gymIntro.innerHTML = `You chose <strong>${storedStarter}</strong>, <strong>${storedName}</strong>!<br><br>
  Let’s find out which Gym Leaders you’ll have the upper hand against — and who might give you trouble.`;
} else if (gymIntro) {
  gymIntro.innerHTML = `
  You haven’t chosen a starter yet.<br>
  Please go back to the <a href="index.html" style="display: contents;">> Main Page <</a> to make your choice.`;
  nextButtonGym.style.display = "none";
  backButtonGym.style.display = "none";
}

let currentStep = 0;

function showCurrentStep() {
  for (let i = 0; i < upcomingEls.length; i++) {
    upcomingEls[i].style.display = i === currentStep ? "flex" : "none";
  }

  // Disable/enable buttons as usual
  backButtonGym.disabled = currentStep === 0;
  nextButtonGym.disabled = currentStep === upcomingEls.length - 1;

  backButtonGym.classList.toggle("button-notActive", backButtonGym.disabled);
  nextButtonGym.classList.toggle("button-notActive", nextButtonGym.disabled);

  // Hide both buttons on last slide (true end)
  const isLastSlide = currentStep === upcomingEls.length - 1;
  if (isLastSlide) {
    nextButtonGym.style.display = "none";
    backButtonGym.style.display = "none";
  } else {
    nextButtonGym.style.display = "inline-block";
    backButtonGym.style.display = "inline-block";
  }
}

// Hide all but first on load
for (let i = 0; i < upcomingEls.length; i++) {
  upcomingEls[i].style.display = i === 0 ? "flex" : "none";
}

nextButtonGym.addEventListener("click", () => {
  if (currentStep < upcomingEls.length - 1) {
    currentStep++;
    showCurrentStep();
  }
});

backButtonGym.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    showCurrentStep();
  }
});

if (storedName && storedStarter) {
  showCurrentStep();
}