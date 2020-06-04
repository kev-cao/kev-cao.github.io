// Shows a different tab of the resume based on the button pressed.
function showResume(evt, tabname) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent");

  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablink");

  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.toggle("active", false);
  }

  document.getElementById(tabname).style.display = "inline-block";
  evt.currentTarget.classList.toggle("active");
}
