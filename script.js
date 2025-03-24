let currentIndex = 0;
const images = document.querySelectorAll('.fade-img');

function showNextImage() {
    images[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";  // Adds class to show the menu in mobile view
    } else {
        x.className = "topnav";  // Resets to normal view
    }
}

