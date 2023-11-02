let words = ['EMBRACE :)', 'CHANGE :)', 'ENJOY THE RIDE :)'];
let gradients = [
    "linear-gradient(90deg, #FF0066, #FF66FF)",
    "linear-gradient(90deg, #FF6600, #FFCC00)",
    "linear-gradient(90deg, #66FF66, #00FF66)"
];
let currentWordIndex = 0;
let wordElement = document.getElementById('word');

setInterval(changeWord, 5000);

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    wordElement.innerHTML = words[currentWordIndex];
    wordElement.style.backgroundImage = gradients[currentWordIndex];
}

