function changeImageSource() {
    var image = document.querySelector(".addonn_img")
    if (window.innerWidth <= 730) { // Change the width value as per your requirement
      image.src = '/assets/images/illustration_2_mobile.svg'; // Path to the image for smaller screens
    } else {
      image.src = '/assets/images/illustration_2.svg'; // Path to the default image
    }
  }
  
  // Call the function on page load and whenever the window is resized
  window.onload = changeImageSource;
  window.onresize = changeImageSource;
  