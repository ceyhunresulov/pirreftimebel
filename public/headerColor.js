const headerColor1 = "rgba(30,29,28,.5)";
const headerColor2 = "#423F3E";
const header = document.querySelector("header");
const dropdownHome = document.querySelector(".catalog__dropdown--home");
const dropdown = document.querySelector(".catalog__dropdown");
const mobilNavbar = document.querySelector(".mobil__navbar");
window.addEventListener("scroll", getScroll);

function getScroll() {
  if (window.scrollY > 250) {
    changeHeaderStyle();
  } else {
    header.style.background = headerColor1;
    dropdownHome.style.background = headerColor1;
    mobilNavbar.style.background = headerColor1;
  }
}
function changeHeaderStyle() {
  header.style.background = headerColor2;
  dropdownHome.style.background = headerColor2;
  mobilNavbar.style.background = headerColor2;
}
