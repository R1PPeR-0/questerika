hamburger = document.querySelector(".hamburger");
hamburger.onclick = function(){
    navBar = document.querySelector(".nav-bar");
    navBar.classList.toggle("active");
}

navLinks = document.querySelectorAll(".navLink");
navLinks.forEach(function(navLink) {
    navLink.onclick = function(){
        navBar = document.querySelector(".nav-bar");
        navBar.classList.toggle("active");
    }
});