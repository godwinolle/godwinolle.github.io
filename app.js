const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () =>{
    mobileMenu.classList.toggle('togglerr');
});

const nameHome = document.querySelector('.name-Godwin');
nameHome.addEventListener('click', ()=>{
    location.href = 'index.html';
})

const headerFollow = document.querySelector('header');
window.addEventListener('scroll', ()=>{
    if(window.pageYOffset > 50){
        headerFollow.classList.add('activity');
    }
    else{
        headerFollow.classList.remove('activity');
    }
});

//this is the tagline of the home page
let i=0;
let text='Establishing Clean Code Since 1999';
const typing = () =>{
    if(i < text.length){
        document.querySelector('.attention-grab h3').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 150);
    }
};
typing();

//this is a redirect to my instagram page
const seeMore = document.querySelector('.seeMore');
seeMore.addEventListener('click', ()=>{
    location.href = 'https://www.instagram.com/godwin.codes';
});

//a redirect to my instagram located in the footer
const instagramFooter = document.querySelector('.instagram-footer');
instagramFooter.addEventListener('click', ()=>{
    open('https://www.instagram.com/godwin.codes', '_blank');
});

//a redirect to my github located in the footer
const githubFooter = document.querySelector('.github-footer');
githubFooter.addEventListener('click', ()=>{
    open('https://github.com/godwinolle', '_blank');
});
