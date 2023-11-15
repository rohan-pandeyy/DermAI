function previewImage() {
  var input = document.getElementById('image-input');
  var selectedImage = document.getElementById('selected-image');
  var customButton = document.getElementById('custom-button');
  var loadingIndicator = document.getElementById('loading-indicator');
  var analyzingText = document.getElementById('analyzing-text');
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
      description.innerText = 'Image uploaded successfully! Check Diagnosis below! \n\n';
      description.style.display = 'block';

      // Show the analyzing text
      analyzingText.style.display = 'block';
      analyzingText.classList.add('loading');
      // Set a timeout to hide the analyzing text after 9 seconds
      setTimeout(function () {
      analyzingText.style.display = 'none';
      analyzingText.classList.remove('loading');

      // Display information text with typewriter effect
      var informationText = "Based on the _______ examination and patient history, the diagnosis is acne vulgaris.";
      var index = 0;

      function printText() {
        description.innerHTML += informationText.charAt(index);
        index++;
        if (index < informationText.length) {
          setTimeout(printText, 50); // Adjust the timeout for the typing speed
        }
  }

  printText();
}, 9000);
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
