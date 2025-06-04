if (currentPage.includes("gyms.html")) {
  const gymsIntro = document.getElementById("gyms0");
  if (gymsIntro && storedName && storedStarter) {
    gymsIntro.innerHTML = `Trainer <strong>${storedName}</strong>, with your <strong>${storedStarter}</strong>, here’s who you’re ready to face — and who might give you trouble.`;
  }
}