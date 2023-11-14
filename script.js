function previewImage() {
var input = document.getElementById('image-input');
var selectedImage = document.getElementById('selected-image');
var customButton = document.getElementById('custom-button');
var loadingIndicator = document.getElementById('loading-indicator');
var description = document.getElementById('description');

var file = input.files[0];

if (file) {
loadingIndicator.style.display = 'block';

var reader = new FileReader();

reader.onload = function (e) {
selectedImage.src = e.target.result;
customButton.style.display = 'none';
loadingIndicator.style.display = 'none';
description.innerText = 'Image uploaded successfully! Check Diagnosis below!';
description.style.display = 'block';
};

reader.readAsDataURL(file);
}
}


  function toggleSlidingWindow() {
    var slidingWindow = document.getElementById('sliding-window');
    slidingWindow.style.bottom = slidingWindow.style.bottom === '-5%' ? '-100%' : '-5%';
  }
