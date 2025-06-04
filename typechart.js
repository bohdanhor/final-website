if (currentPage.includes("typechart.html")) {
  const typechartIntro = document.getElementById("typechart0");
  if (typechartIntro && storedName && storedStarter) {
    typechartIntro.innerHTML = `You chose <strong>${storedStarter}</strong>, <strong>${storedName}</strong>!<br><br>Let’s see how your partner handles type matchups.`;
  } else if (typechartIntro) {
    typechartIntro.textContent = "You haven’t chosen a starter yet.";
  }
}