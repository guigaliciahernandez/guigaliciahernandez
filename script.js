let words = ['EMBRACE', 'CHANGE', 'ENJOY', 'THE', 'RIDE', '😊'];
let gradients = [
    'linear-gradient(45deg, #7DF9FF, #FF4500)',
    'linear-gradient(45deg, #FFD700, #7FFF00)',
    'linear-gradient(45deg, #00BFFF, #FFC0CB)',
    'linear-gradient(45deg, #FF4500, #00BFFF)',
    'linear-gradient(45deg, #7DF9FF, #FFD700)',
    'linear-gradient(45deg, #7FFF00, #FFC0CB)'
];
let currentWordIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    changeWord();
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('word').innerHTML = words[currentWordIndex];
    document.getElementById('word').style.background = gradients[currentWordIndex];
    document.getElementById('word').style.textShadow = `0 0 10px ${gradients[currentWordIndex]}, 0 0 20px ${gradients[currentWordIndex]}, 0 0 30px ${gradients[currentWordIndex]}`;
}

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.background = gradients[currentWordIndex];
    circle.style.boxShadow = `0 0 10px ${gradients[currentWordIndex]}, 0 0 20px ${gradients[currentWordIndex]}, 0 0 30px ${gradients[currentWordIndex]}`;
    document.body.append(circle);
    anime({
        targets: circle,
        top: y - 50,
        left: x - 50,
        width: '100vw',
        height: '100vw',
        borderRadius: '50%',
        duration: 1500,
        easing: 'easeInOutQuad',
        complete: function() {
            circle.remove();
        }
    });
}

// Automatically change words at an interval
setInterval(changeWord, 800);
