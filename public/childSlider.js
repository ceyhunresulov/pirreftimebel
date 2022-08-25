const childSlides = document.querySelector(".child__slides");
const allSlide = document.querySelectorAll(".child__slide");
const angleLeft = document.querySelector(".child__angle--left");
const angleRight = document.querySelector(".child__angle--right");
let slideWidth = allSlide[0].clientWidth + 3;
let resLeft = 0;
let left = 0;
let count = allSlide.length / 2 - 1;
let resCount = allSlide.length - 1;

angleRight.addEventListener("click", () => {
  if ((left < count * 1210) & (window.innerWidth > 1198)) {
    left += 1210;
    childSlides.style.left = -left + "px";
    console.log(window.innerWidth);
  } else if ((resLeft < resCount * slideWidth) & (window.innerWidth <= 1198)) {
    resLeft += slideWidth;
    childSlides.style.left = -resLeft + "px";
  }
});
angleLeft.addEventListener("click", () => {
  if ((left > 0) & (window.innerWidth > 1198)) {
    left -= 1210;
    childSlides.style.left = -left + "px";
    console.log(left);
  } else if ((resLeft > 0) & (window.innerWidth <= 1198)) {
    resLeft -= slideWidth;
    childSlides.style.left = -resLeft + "px";
    console.log(slideWidth);
  }
});
