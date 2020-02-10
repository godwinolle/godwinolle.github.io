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


const instagramFooter = document.querySelector('.instagram-footer');
instagramFooter.addEventListener('click', ()=>{
    open('https://www.instagram.com/godwin.codes', '_blank');
});


const githubFooter = document.querySelector('.github-footer');
githubFooter.addEventListener('click', ()=>{
    open('https://github.com/godwinolle', '_blank');
});
