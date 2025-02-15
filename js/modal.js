// modal button
const modalBtn = document.querySelectorAll(".modal-toogle");
// modal window
const modal = document.querySelector(".modal");
// launch modal function on every click on Modal btn
modalBtn.forEach((btn) => btn.addEventListener("click", Modal));

// Modal function : check if modal has class open and add it if not, remove it if this is the case 
function Modal() {
  if (!modal.classList.contains("open")){
    modal.classList.remove("hide");
    modal.classList.add("open");
    // window.scrollTo(0, 0);
      initForm();
    }
    else{
      modal.classList.replace("open","hide");
    }
}

// Close modal if keyup on escape
document.addEventListener('keyup', function(event){
	if(event.key === "Escape"){
		modal.className = "modal hide";
    setTimeout(()=>{
      modal.style.display = 'none';
    },200)
	}
});

function initForm(){
  var thanks = document.getElementById("thanks");
  var form = document.getElementById("signup");
  thanks.style.display = 'none';
  form.style.display = 'block';
  form.reset();
  form.querySelectorAll("input").forEach(e => { 
    e.parentElement.classList.remove("success");
  });  
  ;
};
