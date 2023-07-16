var prevScrollPos = window.pageYOffset;
var navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    navbar.style.opacity = "1";
    navbar.classList.add("sticky");
    navbar.style.filter = "blur(0)";
  } else {
    navbar.style.opacity = "0";
    navbar.style.filter = "blur(1px)";
    navbar.classList.remove("sticky");
  }

  prevScrollPos = currentScrollPos;
});
