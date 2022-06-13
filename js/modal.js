// DOM Elements
const modalbg = document.querySelector(".modal-overflow");
const modalBtn = document.querySelectorAll(".btn-hero");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}


