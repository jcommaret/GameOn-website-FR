// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");
// launch modal function on every click on Modal btn
modalBtn.forEach((btn) => btn.addEventListener("click", Modal));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
function Modal() {
  // si la modal est strictement egale a modal, ajouter la classe open
  if (modal.className === "modal hide") 
      {
        modal.className = "modal open";
        modal.style.display = 'block';
      } 
  else 
    {
      modal.className= "modal hide"; 
      setTimeout(()=>{
        
        modal.style.display = 'none';
      },500)
    }
}

// Close modal if keyup on escape
document.addEventListener('keyup', function(event){
	if(event.key === "Escape"){
		modal.className = "modal";
	}
});

