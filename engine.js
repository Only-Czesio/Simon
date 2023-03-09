const colorElements = {
  one: document.querySelector('.one'),
  two: document.querySelector('.two'),
  three: document.querySelector('.three'),
  four: document.querySelector('.four')
};
const startButton = document.getElementById('start-button');

const colorElement = document.querySelector('.button');

let sequence = [];

let numSteps = 1;

let currentStep = 0;

const colorMap = {
  one: 'https://s3.amazonaws.com/freecodecamp/simonSound1.mp3',
  two: 'https://s3.amazonaws.com/freecodecamp/simonSound2.mp3',
  three: 'https://s3.amazonaws.com/freecodecamp/simonSound3.mp3',
  four: 'https://s3.amazonaws.com/freecodecamp/simonSound4.mp3'
};



function addColorToSequence() {
    const colors = ['one', 'two', 'three', 'four'];
    let randomColor = colors[Math.floor(Math.random() * 4)];
    sequence.push(randomColor);
};
function playAudio(color) {
    const audio = new Audio(colorMap[color]);
    audio.play();
}
function showSequence() {
    let i = 0;
    const interval = setInterval(() => {
        const color = sequence[i];
        console.log(color)
        colorElements[color].classList.add('active');
        playAudio(color);
        setTimeout(() => {
            colorElements[color].classList.remove('active');
        }, 100);
        i++;
        if (i >= sequence.length) {
            clearInterval(interval);
        }
    },200);
}

function checkInput(color) {
    const expectedColor = sequence[currentStep];
    if (color === expectedColor) {
        playAudio(color);
        currentStep++;
        if (currentStep === sequence.length) {
            numSteps++;
            currentStep = 0;
            addColorToSequence();
            setTimeout(() => {
                showSequence();
            }, 200);
        }
    } else {
        alert('Wrong color! Game over.!'`You made ${i}`);
    }
}
startButton.addEventListener('click', () => {
    sequence = [];
    currentStep = 0;
    numSteps = 1;
    addColorToSequence();
    showSequence();
})

colorElements.one.addEventListener('click', () => {
  checkInput('one');
});

colorElements.two.addEventListener('click', () => {
  checkInput('two');
});

colorElements.three.addEventListener('click', () => {
  checkInput('three');
});

colorElements.four.addEventListener('click', () => {
  checkInput('four');
});


   
