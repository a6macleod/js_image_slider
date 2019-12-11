const imageSelector = document.querySelectorAll('.image-selector');
const mainContainer = document.querySelector('#main-container');
const viewer = document.querySelector('#wide-image-container');

function updateImage (selector) {
  const orientation = selector.getAttribute('data-orientation');

  // clear all classes from the image container and the viewer
  mainContainer.className = '';
  viewer.className = '';
  
  if (orientation == 'landscape') {
    mainContainer.classList.add('main-container-landscape');
  } else {
    mainContainer.classList.add('main-container-portrait');
  }
  viewer.classList.add(`image-view-${selector.getAttribute('data-number')}`);
}

function selectAnImage () {
  imageSelector.forEach(selector => selector.classList.remove('selected-image-selector'));
  this.classList.add('selected-image-selector');

  updateImage(this);
}

imageSelector.forEach(selector => selector.addEventListener('click', selectAnImage));
