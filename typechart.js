const nextButtonChart = document.getElementById("next-button-chart");
const backButtonChart = document.getElementById("back-button-chart");
const upcomingChartEls = document.querySelectorAll(".speech-box.upcoming");

const typechartIntro = document.getElementById("typechart0");

  if (typechartIntro && storedName && storedStarter) {
    typechartIntro.innerHTML = `You chose <strong>${storedStarter}</strong>, <strong>${storedName}</strong>!<br><br>
    Let’s take a closer look at how your partner handles different types in battle.`;
    } else if (typechartIntro) {
        typechartIntro.innerHTML = `
    You haven’t chosen a starter yet.<br>
    Please go back to the <a href="index.html" style="display: contents;">> Main Page <</a> to make your choice.`
    nextButtonChart.style.display = "none";
    backButtonChart.style.display = "none";
    ;}

// Changes the typechart1 (second slide) to Bulbasaur’s defensive profile
const typechartDetail = document.getElementById("typechart1");

if (storedStarter === "Bulbasaur" && typechartDetail) {
  typechartDetail.innerHTML = `
    <strong>Bulbasaur</strong> is a <strong>Grass/Poison</strong>-type.<br><br><br>
    <strong>Defensively weak to</strong>: Fire, Ice, Flying, Psychic.<br><br>
    <strong>Defensively resistant to</strong>: Water, Electric, Grass, Fairy, Fighting.
    <br><br><br>. . .<br><br><br>
    <strong>Note:</strong> Due to its dual typing, <strong>Bulbasaur</strong> is <strong>double resistant</strong> to Grass-type moves.
  `;
}

// Changes the typechart2 (third slide) to Bulbasaur’s offensive profile
const typechartOffense = document.getElementById("typechart2");

if (storedStarter === "Bulbasaur" && typechartOffense) {
    typechartOffense.innerHTML = `
  <strong>Offensively, Bulbasaur’s Grass-type moves are:</strong><br><br><br>
  <strong>Strong against</strong>: Water, Ground, Rock.<br><br>
  <strong>Not very effective against</strong>: Fire, Grass, Poison, Flying, Bug, Dragon, Steel.
  <br><br><br>. . .<br><br><br>

  <strong>Bulbasaur’s Poison-type moves are:</strong><br><br><br>
  <strong>Strong against</strong>: Grass, Fairy.<br><br>
  <strong>Not very effective against</strong>: Poison, Ground, Rock, Ghost.<br>
  <strong>No effect on</strong>: Steel.
`;
}

// Transitional text to gyms.html
const typechartFinal = document.getElementById("typechart3");

if (storedStarter && storedName && typechartFinal) {
  typechartFinal.innerHTML = `
    So then, <strong>${storedName}</strong>...<br><br>
    With your trusted partner <strong>${storedStarter}</strong> at your side,<br>
    are you ready to test your strength against the region’s toughest contenders?<br><br>
    Let’s see how you measure up against the Gym Leaders.
  `;
}

let currentChartStep = 0;
showCurrentChartStep();

if (nextButtonChart) {
  nextButtonChart.addEventListener("click", () => {
    if (currentChartStep < upcomingChartEls.length - 1) {
      currentChartStep++;
      showCurrentChartStep();
    }
  });
}

if (backButtonChart) {
  backButtonChart.addEventListener("click", () => {
    if (currentChartStep > 0) {
      currentChartStep--;
      showCurrentChartStep();
    }
  });
}

function updateChartButtonStates() {
  if (currentChartStep === 0) {
    backButtonChart.classList.add("button-notActive");
    backButtonChart.disabled = true;
  } else {
    backButtonChart.classList.remove("button-notActive");
    backButtonChart.disabled = false;
  }

  if (currentChartStep === upcomingChartEls.length - 1) {
    nextButtonChart.classList.add("button-notActive");
    nextButtonChart.disabled = true;
  } else {
    nextButtonChart.classList.remove("button-notActive");
    nextButtonChart.disabled = false;
  }
}

function showCurrentChartStep() {
  upcomingChartEls.forEach((el, i) => {
    el.style.display = i === currentChartStep ? "flex" : "none";
  });

  updateChartButtonStates();

  const gymStartSection = document.getElementById("start-gymSection");

  if (currentChartStep === upcomingChartEls.length - 1) {
    nextButtonChart.style.display = "none";
    backButtonChart.style.display = "none";
    if (gymStartSection) gymStartSection.style.display = "flex";
  } else {
    if (gymStartSection) gymStartSection.style.display = "none";
  }
}

//START (AFTER TYPECHART TEXT) BUTTON
const goToGymButton = document.getElementById("goToGym-button");
if (goToGymButton) {
  goToGymButton.addEventListener("click", () => {
    window.open("gyms.html", "_self");
  });
}