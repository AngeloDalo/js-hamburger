const hamburgerMenu = document.querySelector('.hamburger-menu'); 
const hamburgerButton = document.querySelector('header div.header-right a i.fas.fa-bars'); 
const crossButton = document.querySelector('header div.hamburger-menu a.close i.fas.fa-times'); 
const list = document.querySelector('ul'); 

list.addEventListener ( 'click', function() {
    list.style.backgroundColor = "red";
});

hamburgerButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "block";
    hamburgerMenu.style.background ="green";
});

crossButton.addEventListener ( 'click', function() {
    hamburgerMenu.style.display = "none";
});
   