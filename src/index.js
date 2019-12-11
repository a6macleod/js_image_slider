const imageSelector = document.querySelectorAll('.image-selector');

function selectAnImage () {
  imageSelector.forEach(selector => selector.classList.remove('selected-image-selector'));
  this.classList.add('selected-image-selector');
}

imageSelector.forEach(selector => selector.addEventListener('click', selectAnImage));
