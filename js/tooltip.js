function toggleTooltip() { 
  var tooltiptext = event.srcElement.nextElementSibling.childNodes[0];
  tooltiptext.style.display = tooltiptext.style.display != "block" ? "block" : "none";

  // Check to see if absolutely positioned tooltip overflows the viewport.
  // If so, shift it over to the left more.
  var bounding = tooltiptext.getBoundingClientRect();
  var overflow = bounding.right - document.documentElement.clientWidth;
  if (overflow > 0) {
    var currentLeft = parseInt(tooltiptext.offsetLeft, 10);
    tooltiptext.style.left = (currentLeft - overflow - 5) + "px";
  }
}

function closeTooltips() {
  if (event.srcElement.className != "tiptext" && event.srcElement.className != "tipnumber") {
    var tooltips = document.getElementsByClassName("tiptext");

    for (var i = 0; i < tooltips.length; i++) {
      tooltips[i].style.display = "none";
    }
  }
}
