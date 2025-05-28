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