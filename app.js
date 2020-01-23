const text = ['a Student', 'a Learner', 'an aspiring Full-Stack Developer'];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type(){
    if(count === text.length){
        count = 0;
    }
    currentText = text[count];
    letter = currentText.slice(0, ++index);

    const about = document.querySelector('.intro');
    about.textContent += letter;

    if(letter.length === currentText.length){
        count++;
        index = 0;
    }

    setTimeout(type, 400);
}());