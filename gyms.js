const nextButtonGym = document.getElementById("next-button-gyms");
const backButtonGym = document.getElementById("back-button-gyms");
const upcomingChartEls = document.querySelectorAll(".speech-box.upcoming");

const gymIntro = document.getElementById("gyms0");

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