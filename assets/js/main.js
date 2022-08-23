/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close"),
  navLink = document.querySelectorAll(".nav__link");

cargarEventListeners();
function cargarEventListeners() {
  navToggle.addEventListener("click", show);

  navClose.addEventListener("click", hidden);

  navLink.forEach((elem) => elem.addEventListener("click", hidden));
}

/*===== MENU SHOW =====*/
/* Validate if constant exists */
// if (navToggle) {
//   navToggle.addEventListener("click", () => {
//     navMenu.classList.add("show-menu");
//   });
// }
function show() {
  navMenu.classList.add("show-menu");
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
// if (navClose) {
//   navClose.addEventListener("click", () => {
//     navMenu.classList.remove("show-menu");
//   });
// }
function hidden() {
  navMenu.classList.remove("show-menu");
}

/*=============== SCROLL REVEAL ANIMATION ===============*/

const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})
