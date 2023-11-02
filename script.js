let words = ['EMBRACE 😊', 'CHANGE 😊', 'ENJOY THE RIDE 😊', '😊'];
let scaleFactors = [1, 2, 3, 4];
let colors = ['#5A24B4', '#D53CF5', '#3498db', '#e74c3c'];
let currentWordIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    changeWord();
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function changeWord() {
    currentWordIndex = (currentWordIndex + 1) % words.length;
    document.getElementById('word').innerHTML = words[currentWordIndex];
    document.getElementById('word').style.fontSize = `${50 * scaleFactors[currentWordIndex]}px`;
    document.getElementById('word').style.color = colors[currentWordIndex];
    document.getElementById('word').style.textShadow = `0 0 10px ${colors[currentWordIndex]}, 0 0 20px ${colors[currentWordIndex]}, 0 0 30px ${colors[currentWordIndex]}`;
}

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.background = colors[currentWordIndex];
    circle.style.boxShadow = `0 0 10px ${colors[currentWordIndex]}, 0 0 20px ${colors[currentWordIndex]}, 0 0 30px ${colors[currentWordIndex]}`;
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
        animateColorDrop();
    }, 1500);
}

initAnimation(); // This will start the animation when the page is loaded
