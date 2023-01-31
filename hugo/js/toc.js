function bgTOC(id) {
  var x = document.getElementById(id);
  if (x.className.indexOf("bg-show") == -1) {
    x.className += " bg-show";
  } else {
    x.className = x.className.replace(" bg-show", "");
  }
}