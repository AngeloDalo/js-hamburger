const hamburgerMenu = document.querySelector('.hamburger-menu'); 
const hamburgerButton = document.querySelector('.fa-bars'); 
const crossButton = document.querySelector('.fa-times'); 

hamburgerButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "block"
});

crossButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "none"
});
   