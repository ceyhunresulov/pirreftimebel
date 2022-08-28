import * as bigImg from "./bigImg.js";
const gallery = document.getElementById("gallery__grid");
const galleryPlus = document.getElementById("gallery__plus");
const galleryImg = document.querySelectorAll("#gallery__grid li");

let elMargin = parseFloat(getComputedStyle(galleryImg[0]).marginBottom);
let heightItem;
let authHeight = changeRow().y;
let row = changeRow().x;

// gallery height
galleryPlus.addEventListener("click", () => {
  if (
    heightItem - (row * galleryImg[0].clientHeight + row * elMargin) >=
    authHeight * galleryImg[0].clientHeight + authHeight * elMargin
  ) {
    row += authHeight;
    getGalleryHeight();
  } else if (
    heightItem - (row * galleryImg[0].clientHeight + row * elMargin) >
    -5
  ) {
    gallery.style.height = heightItem + "px";
  }
});
function getGalleryHeight() {
  let galleryHeight;
  let width = window.innerWidth;
  if (width > 1198) {
    galleryHeight =
      Math.ceil(galleryImg.length / 4) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 4) * elMargin;
  } else if (1198 > width && width > 768) {
    galleryHeight =
      Math.ceil(galleryImg.length / 3) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 3) * elMargin;
  } else if (768 > width && width > 576) {
    galleryHeight =
      Math.ceil(galleryImg.length / 2) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 2) * elMargin;
  } else if (width <= 576) {
    galleryHeight =
      Math.ceil(galleryImg.length / 1) * galleryImg[0].clientHeight +
      Math.ceil(galleryImg.length / 1) * elMargin;
  }
  gallery.style.height = galleryHeight + "px";
}
getGalleryHeight();

function changeRow() {
  let width = window.innerWidth;
  let x;
  let y;
  if (width > 768) {
    y = 5;
    x = 5;
  } else if (768 > width && width > 576) {
    y = 10;
    x = 10;
  } else if (width <= 576) {
    y = 20;
    x = 20;
  }
  return {
    x,
    y,
  };
}
