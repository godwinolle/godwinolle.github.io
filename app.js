const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () =>{
    console.log("Hamburger clicked")
    mobileMenu.classList.toggle('togglerr');
});