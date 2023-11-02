let words = ['EMBRACE', 'CHANGE', 'ENJOY THE RIDE :)'];
let gradients = [
    "linear-gradient(90deg, #FF0066, #FF66FF)",
    "linear-gradient(90deg, #FF6600, #FFCC00)",
    "linear-gradient(90deg, #66FF66, #00FF66)"
];
let currentWordIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    changeWord();
});

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    let wordElement = document.getElementById('word');
    wordElement.innerHTML = words[currentWordIndex];
    wordElement.style.backgroundImage = gradients[currentWordIndex];
}

