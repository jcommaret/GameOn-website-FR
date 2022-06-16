// Dom elements
const modalBtn = document.querySelector(".btn-hero");
const modal = document.querySelector(".modal-container");

// Wait for click on modalBtn to launchModal
modalBtn.addEventListener("click", launchModal);
// When modal is launching, change style to display block 
function launchModal() {
  modal.style.display = "block";
}