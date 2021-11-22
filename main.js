const hamburgerMenu = document.querySelector('.hamburger-menu'); 
const hamburgerButton = document.querySelector('header div.header-right a i.fas.fa-bars'); 
const crossButton = document.querySelector('header div.hamburger-menu a.close i.fas.fa-times'); 

hamburgerButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "block";
});

crossButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "none";
});
   