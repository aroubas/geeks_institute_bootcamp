
window.addEventListener('keydown', (e) =>{

const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const button = document.querySelector(`.Btn[data-key="${e.keyCode}"]`);
if (!audio) return; 

    audio.currentTime = 0;
    audio.play(); 
    button.classList.add('playing');
});

window.addEventListener('keyup', (e) => {
    const button = document.querySelector('.Btn[data-key="' + e.keyCode + '"]');
    if (button) {
        button.classList.remove('playing');
    }
});



const allButtons = document.querySelectorAll('.Btn');

allButtons.forEach(button => {

    button.addEventListener('click', () => {        
        const soundId = button.getAttribute('data-key');
        const audio = document.querySelector('audio[data-key="' + soundId + '"]');
        audio.currentTime = 0;
        audio.play();
        button.classList.add('playing');
        setTimeout(() => { 
            button.classList.remove('playing');
        }, 100);
    });
});