import * as headerChange from "./header.js";
const slider = document.querySelector(".product__slider");
const slide = document.querySelectorAll(".product__slide");
const slides = document.querySelector(".product__slides");
const angleLeft = document.querySelector(".product__angle--left");
const angleRight = document.querySelector(".product__angle--right");
console.log(angleLeft);

const sliderWidth = slider.clientWidth + 10;
let left = 0;
let imgCount = slide.length - 1;
slide.forEach((el) => {
  el.style.width = sliderWidth + "px";
});

angleLeft.addEventListener("click", getLeftImg);
angleRight.addEventListener("click", getRightImg);

function getLeftImg() {
  if (left < 0) {
    left += sliderWidth;
    slides.style.left = left + "px";
    console.log("salam");
  }
}
function getRightImg() {
  if (left > -imgCount * sliderWidth) {
    left -= sliderWidth;
    slides.style.left = left + "px";
    console.log("salam");
  }
}
