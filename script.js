function previewImage() {
    var input = document.getElementById('image-input');
    var selectedImage = document.getElementById('selected-image');
    var customButton = document.getElementById('custom-button');
    var loadingIndicator = document.getElementById('loading-indicator');

    var file = input.files[0];

    if (file) {
      loadingIndicator.style.display = 'block'; // Show the loading indicator

      var reader = new FileReader();

      reader.onload = function(e) {
        // Update only the selected image with the chosen image file
        selectedImage.src = e.target.result;

        // Hide the "Choose File" button
        customButton.style.display = 'none';

        // Hide the loading indicator once the image is loaded
        loadingIndicator.style.display = 'none';

        // Display the description text
        description.style.display = 'block';
      };

      reader.readAsDataURL(file);
    }
  }

  function toggleSlidingWindow() {
    var slidingWindow = document.getElementById('sliding-window');
    slidingWindow.style.bottom = slidingWindow.style.bottom === '-5%' ? '-100%' : '-5%';
  }