const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobileMenu');

hamburger.addEventListener('click', () =>{
    mobileMenu.classList.toggle('togglerr');
});

const nameHome = document.querySelector('.name-Godwin');
nameHome.addEventListener('click', ()=>{
    location.href = 'index.html';
})


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
