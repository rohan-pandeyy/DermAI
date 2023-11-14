function previewImage() {
  var input = document.getElementById('image-input');
  var selectedImage = document.getElementById('selected-image');
  var customButton = document.getElementById('custom-button');
  var loadingIndicator = document.getElementById('loading-indicator');
  var description = document.getElementById('description');

  var file = input.files[0];

  if (file) {
    loadingIndicator.style.display = 'block'; // Shows the loading indicator
    var reader = new FileReader();

    reader.onload = function (e) {
      // Update only the selected image with the chosen image file
      selectedImage.src = e.target.result;
      customButton.style.display = 'none';
      loadingIndicator.style.display = 'none';
      description.innerText = 'Image uploaded successfully! Check Diagnosis below!';
      description.style.display = 'block';
    }

    reader.readAsDataURL(file);
  }
}


function toggleSlidingWindow() {
  var slidingWindow = document.getElementById('sliding-window');
  slidingWindow.style.bottom = slidingWindow.style.bottom === '-5%' ? '-100%' : '-5%';
}

function turnOffSlidingWindow() {
  var slidingWindow = document.getElementById('sliding-window');
  slidingWindow.style.bottom = slidingWindow.style.bottom === '-5%' ? '-100%' : '-100%';
}

// Add a function to handle button selection
function selectButton(buttonNumber) {
  // Remove the 'selected-button' class from all buttons
  document.querySelectorAll('.sliding-button').forEach(button => {
    button.classList.remove('selected-button');
  });

  // Add the 'selected-button' class to the clicked button
  document.querySelector(`.sliding-button:nth-child(${buttonNumber})`).classList.add('selected-button');
}
