const expandIcon = document.querySelectorAll(".expand");
const bigImage = document.querySelectorAll(".big__img");
const changeImg = document.querySelector(".big__img img");
const backIcon = document.querySelectorAll(".big__img--reset");
const bigImgLink = document.querySelector(".big__img--link");
// expand image
expandIcon.forEach((icon) => {
  icon.addEventListener("click", (e) => {
    bigImgLink.dataset.id = icon.dataset.id;
    const newImg =
      e.target.parentElement.parentElement.previousElementSibling.src;
    bigImage.forEach((element) => {
      changeImg.src = newImg;
      element.style.visibility = "visible";
      element.style.opacity = 1;
    });
  });
});
backIcon.forEach((icon) => {
  icon.addEventListener("click", () => {
    bigImage.forEach((element) => {
      element.style.visibility = "hidden";
      element.style.opacity = 0;
    });
  });
});
// big image product icon
bigImgLink.addEventListener("click", (e) => {
  window.location.href = `/product/${e.target.parentElement.dataset.id}`;
});
