var prevScrollPos = window.pageYOffset;
var navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    var currentScrollPos = window.pageYOffset;

    if (prevScrollPos > currentScrollPos) {
        navbar.style.opacity = '1';
        navbar.classList.add('sticky');
    } else {
        navbar.style.opacity = '0';
        navbar.classList.remove('sticky');
    }

    prevScrollPos = currentScrollPos;
});
