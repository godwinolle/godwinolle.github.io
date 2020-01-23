const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () =>{
    console.log("Hamburger clicked")
    mobileMenu.classList.toggle('togglerr');
});

const seeMore = document.querySelector('.seeMore');

seeMore.addEventListener('click', ()=>{
    location.href = 'https://www.instagram.com/godwin.codes';
});
