function Nav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " mobile";
  } else {
    x.className = "topnav";
  }
}