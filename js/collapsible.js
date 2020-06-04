// Toggles the collapsible content of a button.
function toggleCollapsible(button) {
  button.classList.toggle("active");
  var content = button.nextElementSibling;

  // For animated collapsing and opening.
  if (content.style.maxHeight) {
    content.style.maxHeight = null;
  } else {
    content.style.maxHeight = content.scrollHeight + "px";
  }
}
