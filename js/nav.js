const menu = document.querySelector(".topnav-menu");
  
function Nav() {
  if (!menu.classList.contains("open")){
    menu.classList.remove("hide");
    menu.classList.add("open");
    }
    else{
      menu.classList.replace("open","hide");
    }
}