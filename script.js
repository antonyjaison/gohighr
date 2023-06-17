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


// Modals


const modal = document.querySelector('#my-modal');
const modalBtn = document.querySelector('.modal-btn');

// Events
modalBtn.addEventListener('click', openModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
