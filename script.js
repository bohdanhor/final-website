let bulbasaur = document.getElementById("bulbasaur-section");
let charmander = document.getElementById("charmander-section");

let clickBulbasaur = document.getElementById("bulbasaur-btn");
let clickCharmander = document.getElementById("charmander-btn");



function showSection(sectionId) {
    // remove active class
    let sections = document.getElementsByClassName("section");

    for(let i=0; i<sections.length; i++) {
        sections[i].classList.remove("active");
    }

    // add active c
}

const navBarSect = document.querySelectorAll('.hover-section');

  navBarSect.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.classList.remove('default-style');
      section.classList.add('hover-style');
    });

    section.addEventListener('mouseleave', () => {
      section.classList.remove('hover-style');
      section.classList.add('default-style');
    });
  });