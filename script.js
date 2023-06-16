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


// For FAQ Section

const items = document.querySelectorAll(".accordion button");

function toggleAccordion() {
  const itemToggle = this.getAttribute('aria-expanded');

  for (i = 0; i < items.length; i++) {
    items[i].setAttribute('aria-expanded', 'false');
  }

  if (itemToggle == 'false') {
    this.setAttribute('aria-expanded', 'true');
  }
}

items.forEach(item => item.addEventListener('click', toggleAccordion));
