const imageSelector = document.querySelectorAll(".image-selector");
const mainContainer = document.querySelector("#main-container");
const viewer = document.querySelector("#wide-image-container");
let imageIntevalTimer = setInterval(nextImage, 5000);

function updateImage(selector) {
  const orientation = selector.getAttribute("data-orientation");

  // clear all classes from the image container and the viewer
  mainContainer.className = "";
  viewer.className = "";

  if (orientation == "landscape") {
    mainContainer.classList.add("main-container-landscape");
  } else {
    mainContainer.classList.add("main-container-portrait");
  }
  viewer.classList.add(`image-view-${selector.getAttribute("data-number")}`);
}

function nextImage() {
  const currentSlide = document.querySelector(".selected-image-selector");
  let nextImageNumber = parseInt(currentSlide.getAttribute("data-number")) + 1;
  if (nextImageNumber > imageSelector.length) {
    nextImageNumber = 1;
  }

  const nextSlide = document.querySelector(
    `.image-selector-${nextImageNumber}`
  );
  selectAnImage(nextSlide);
}

function selectAnImage(selectedImage) {
  imageSelector.forEach(selector =>
    selector.classList.remove("selected-image-selector")
  );
  selectedImage.classList.add("selected-image-selector");

  updateImage(selectedImage);
}

function clickSelector() {
  selectAnImage(this);
}

function startTimer() {
  imageIntevalTimer = setInterval(nextImage, 5000);
}

function endTimer() {
  clearInterval(imageIntevalTimer);
}

imageSelector.forEach(selector =>
  selector.addEventListener("click", clickSelector)
);
imageSelector.forEach(selector =>
  selector.addEventListener("mouseenter", endTimer)
);
imageSelector.forEach(selector =>
  selector.addEventListener("mouseout", startTimer)
);
