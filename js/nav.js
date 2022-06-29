const x = document.getElementById("myTopnav");
  
function Nav() {
  if (x.className === "topnav hide") {
    x.className = "topnav show";
  } else {
    x.className = "topnav hide";
  }
}