const x = document.getElementById("myTopnav");
  
function Nav() {
  if (x.className === "topnav") {
    x.className += " mobile";
  } else {
    x.className = "topnav";
  }
}