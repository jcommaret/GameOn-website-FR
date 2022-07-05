const x = document.querySelector(".topnav-menu");
  
function Nav() {
  if (!x.classList.contains("open")){
    x.classList.remove("hide");
    x.classList.add("open");
    }
    else{
      x.classList.replace("open","hide");
    }
}