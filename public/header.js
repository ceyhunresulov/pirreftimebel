const header = document.querySelector("header");
const logo = document.querySelector(".nav__top--logo");
const dropdownHome = document.querySelector(".catalog__dropdown--home");
const dropdown = document.querySelector(".catalog__dropdown");
const resBar = document.querySelector(".navbar__icon .bar");
const resDel = document.querySelector(".navbar__icon .del");
const mobilNavbar = document.querySelector(".mobil__navbar");
window.addEventListener("scroll", getScroll);
resBar.addEventListener("click", showDropdown);
resDel.addEventListener("click", hiddenDropdown);

function getScroll() {
  if (window.scrollY > 250) {
    if (window.innerWidth >= 1198) {
      header.style.height = 70 + "px";
      logo.style.width = 60 + "px";
    } else if ((window.innerWidth > 576) & (window.innerWidth < 768)) {
      header.style.height = 60 + "px";
      logo.style.width = 50 + "px";
    } else if (window.innerWidth <= 576) {
      header.style.height = 50 + "px";
      logo.style.width = 40 + "px";
    }
  } else {
    if (window.innerWidth >= 1198) {
      logo.style.width = 90 + "px";
      header.style.height = 100 + "px";
    } else if ((window.innerWidth > 768) & (window.innerWidth < 1198)) {
      header.style.height = 90 + "px";
      logo.style.width = 80 + "px";
    } else if ((window.innerWidth > 576) & (window.innerWidth < 768)) {
      header.style.height = 70 + "px";
      logo.style.width = 60 + "px";
    } else if (window.innerWidth <= 576) {
      header.style.height = 60 + "px";
      logo.style.width = 50 + "px";
    }
  }
}
function showDropdown(e) {
  const bar = e.target;
  mobilNavbar.style.width = 30 + "%";
  bar.style.visibility = "hidden";
  bar.style.opacity = 0;
  resDel.style.visibility = "visible";
  resDel.style.opacity = 1;
}
function hiddenDropdown(e) {
  const del = e.target;
  mobilNavbar.style.width = 0;
  del.style.visibility = "hidden";
  del.style.opacity = 0;
  resBar.style.visibility = "visible";
  resBar.style.opacity = 1;
}
