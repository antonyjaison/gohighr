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

let currentModal = null;
const modalBtns = document.querySelectorAll('.modal-btn');
const getCopyForm = document.getElementById("get-copy-form");
const submitAppForm = document.getElementById("submit-application-form");
const closeBtns = document.querySelectorAll(".close-btn");

closeBtns.forEach(closeBtn => {
  closeBtn.addEventListener("click", closeModal)
})


getCopyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data = parseFormData(e);
  if(!data) return;
  const successPage = e.target.parentNode.querySelector(".success");
  e.target.style.display = "none";
  successPage.style.display = "block";
})

submitAppForm.addEventListener("submit", (e) => {
  e.preventDefault();
  data = parseFormData(e);
  if(!data) return;
  const successPage = e.target.parentNode.querySelector(".success");
  e.target.style.display = "none";
  successPage.style.display = "block";
})


// Parsing data from modal form and setting error if neccessary

function parseFormData(e){
  const data = new FormData(e.target);
  const emailError = e.target.querySelector("input#email + .error-msg");
  const phoneError = e.target.querySelector("input#phone + .error-msg");
  const name = data.get("name");
  const email = data.get("email");
  const phoneNo = data.get("phone");
  const countryCode = data.get("country_code");
  const whatsappAgree = data.get("whatsapp_agree");
  const validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if(email.trim() === ""){
    emailError.innerText = "Email is Required";
    emailError.style.opacity = 1;
    return null;
  }
  if(!email.match(validEmailRegex)){
    emailError.innerText = "Enter a valid Email";
    emailError.style.opacity = 1;
    return null;
  }

  emailError.style.opacity = 0;
  if(phoneNo.trim().length === 0){
    phoneError.innerText = "Mobile number is Required";
    phoneError.style.opacity = 1;
    return null;
  } 
  if(!isInteger(phoneNo) || phoneNo.length < 10 || phoneNo.length > 11){
    phoneError.innerText = "Enter valid phone number";
    phoneError.style.opacity = 1;
    return null;
  } 
  phoneError.style.opacity = 0;

  return {
    name,
    email,
    phoneNo: countryCode + phoneNo,
    whatsappAgree: whatsappAgree ? true : false,  
  }

}

// Check for valid positive integer
function isInteger(str) {
  return /^\+?(0|[1-9]\d*)$/.test(str);
}


// Events

modalBtns.forEach(modalBtn => {
  modalBtn.addEventListener('click', openModal);
})
window.addEventListener('click', outsideClick);

// Open
function openModal(e) {
  id = e.target.dataset.targetModal;
  const modal = document.getElementById(id);
  modal.style.display = "block";
  currentModal = modal;
}

// Close
function closeModal() {
  if(currentModal){
    currentModal.style.display = "none";
    currentModal = null;
  }
}

// Close If Outside Click
function outsideClick(e) {
  if (currentModal && e.target == currentModal) {
    currentModal.style.display = "none";
    currentModal = null;
  }
}




// load Data for phone number

function getMobileCodes(){

  const selects = document.querySelectorAll("#country_code");
  selects.forEach(select => {
    countryCodes.forEach((country) => {
      const option = document.createElement("option");
      option.innerText = `${country.emoji} ${country.mobile_code}`;
      option.value = country.mobile_code;
      if(country.mobile_code === "+91"){
        option.selected = "true"
      }
      select.appendChild(option)
    })
  })
}
getMobileCodes()