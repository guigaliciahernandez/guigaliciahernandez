let words = ['EMBRACE', 'CHANGE', 'ENJOY THE RIDE'];
let scaleFactors = [1, 2, 3];
let currentWordIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    // Increment the index for the next word
    currentWordIndex = (currentWordIndex + 1) % words.length;
    
    // Set the word and its size
    this.innerHTML = words[currentWordIndex];
    this.style.fontSize = `${50 * scaleFactors[currentWordIndex]}px`;
    
    // Call the animation
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    document.body.appendChild(circle);

    const maxDimension = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight);
    const animationDuration = 800;

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

setInterval(() => {
    animateColorDrop();
}, 2000);

