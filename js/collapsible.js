// Toggles the collapsible content of a button.
function toggleCollapsible(button) {
  button.classList.toggle("active");
  var content = button.nextElementSibling;

  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}
