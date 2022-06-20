// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");

// launch modal function on every click on Modal btn
modalBtn.forEach((btn) => btn.addEventListener("click", Modal));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
function Modal() {
  if (modal.className === "modal") {
      modal.className += " open";
  } else {
    modal.className = "modal";
  }
}

// Close modal if keyup on escape
document.addEventListener('keyup', function(event){
	if(event.key === "Escape"){
		modal.className = "modal";
	}
});