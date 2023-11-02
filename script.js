const words = ["EMBRACE", "CHANGE", "AND", "ENJOY", "THE", "RIDE", "😀"];
const gradients = [
    "linear-gradient(90deg, #FF0066, #FF66FF)",
    "linear-gradient(90deg, #FF6600, #FFCC00)",
    "linear-gradient(90deg, #66FF66, #00FF66)",
    "linear-gradient(90deg, #00FFCC, #00CCFF)",
    "linear-gradient(90deg, #0066FF, #6600FF)",
    "linear-gradient(90deg, #FF0066, #FF6600)",
    "linear-gradient(90deg, #FF6600, #FF66FF)"
];
let currentWordIndex = 0;

function changeWord() {
    const textElement = document.getElementById("animated-text");
    textElement.textContent = words[currentWordIndex];
    textElement.style.backgroundImage = gradients[currentWordIndex];
    currentWordIndex = (currentWordIndex + 1) % words.length;

    setTimeout(changeWord, 1000);
}

document.body.addEventListener("click", function (event) {
    animateColorDrop(event.clientX, event.clientY);
});

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

changeWord();
