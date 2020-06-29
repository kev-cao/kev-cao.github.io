// Toggles the collapsible hamburger menu.
function toggleHamburger() {
  var menu = document.getElementById("navmenu");
  var nav = document.getElementsByTagName("nav")[0];
  
  if (menu.style.maxHeight) {
    menu.style.maxHeight = null;
  } else {
    menu.style.maxHeight = menu.scrollHeight + "px";
  }
}
