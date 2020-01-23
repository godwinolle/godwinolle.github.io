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


const text = ['a Student', 'a Learner', 'an aspiring Full-Stack Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

function typeWriter(){
    const about = document.querySelector('.text');
    if(count < text.length){
        about.innerHTML = text[index];
        count++;
        index++;
        setTimeout(typeWriter, 2000);
    }
}

typeWriter();