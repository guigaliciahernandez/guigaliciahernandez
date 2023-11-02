let words = ['EMBRACE 😊', 'CHANGE 😊', 'ENJOY', 'THE', 'RIDE 😊', '😊'];
let scaleFactors = [1, 1.5, 2, 2.5, 3, 3.5];
let gradients = [
    "linear-gradient(90deg, #FF0066, #FF66FF)",
    "linear-gradient(90deg, #FF6600, #FFCC00)",
    "linear-gradient(90deg, #66FF66, #00FF66)",
    "linear-gradient(90deg, #00FFCC, #00CCFF)",
    "linear-gradient(90deg, #0066FF, #6600FF)",
    "linear-gradient(90deg, #FF0066, #FF6600)"
];
let currentWordIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    changeWord();
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    let wordElement = document.getElementById('word');
    wordElement.innerHTML = words[currentWordIndex];
    wordElement.style.fontSize = `${50 * scaleFactors[currentWordIndex]}px`;
    wordElement.style.backgroundImage = gradients[currentWordIndex];
    wordElement.style.webkitBackgroundClip = 'text';
    wordElement.style.color = 'transparent';
    wordElement.style.textShadow = `3px 3px 5px ${gradients[currentWordIndex]}`;
}

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.background = gradients[currentWordIndex];
    document.body.appendChild(circle);

    const maxDimension = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight);
    const animationDuration = 600;

    anime({
        targets: circle,
        width: [0, maxDimension * 2],
        height: [0, maxDimension * 2],
        left: [x + "px", x - maxDimension + "px"],
        top: [y + "px", y - maxDimension + "px"],
        duration: animationDuration,
        easing: "easeInOutQuad",
        complete: () => {
            document.body.removeChild(circle);
        }
    });
}

function initAnimation() {
    setInterval(() => {
        changeWord();
        animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
    }, 1500);
}

initAnimation();
