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

// Mobile Navbar
var mobile_prevScrollPos = window.pageYOffset;

var mobile_navbar = document.getElementById("mobile-navbar");

window.addEventListener("scroll", function () {
  var currentScrollPos = window.pageYOffset;

  if (mobile_prevScrollPos > currentScrollPos) {
    mobile_navbar.style.opacity = "1";
    mobile_navbar.classList.add("sticky");
    mobile_navbar.style.filter = "blur(0)";
  } else {
    mobile_navbar.style.opacity = "0";
    mobile_navbar.style.filter = "blur(1px)";
    mobile_navbar.classList.remove("sticky");
  }

  mobile_prevScrollPos = currentScrollPos;
});

document.addEventListener("DOMContentLoaded", function () {
  var mobileMenu = document.querySelector(".mobile-menu");
  var mobileMenuOverlay = document.querySelector(".mobile-menu-overlay");

  mobileMenu.addEventListener("click", function () {
    mobileMenu.classList.toggle("active");
    mobileMenuOverlay.classList.toggle("active");
    mobile_navbar.style.filter = "";

    if (mobileMenu.classList.contains("active")) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Enable scroll
      document.body.style.overflow = "auto";
    }
  });

  var closeButton = document.querySelector(".close-button");
  closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("active");
    mobileMenuOverlay.classList.remove("active");
    document.body.style.overflow = "auto"; // Enable scroll
  });
});
