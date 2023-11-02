let words = ['EMBRACE', 'THE', 'MOMENT,', 'FOR', 'EACH', 'DAY', 'BRINGS', 'A', 'NEW', 'BEGINNING.'];
let currentSize = 5;  // font size in em
let scalingFactor = 1.5;  // how much we increase the size each time
let maxSize = 50;  // the size in em when we want to cover the screen
let wordIndex = 0;

let colorSchemes = [
    {background: '#FF5733', text: 'white', font: 'Orbitron'},
    {background: '#33FF57', text: 'white', font: 'Great vibes'},
    {background: '#5733FF', text: 'white', font: 'Alfa Slab One'},
    {background: '#FF33F1', text: 'white', font: 'Cinzel'},
    {background: '#33FFF1', text: 'white', font: 'Quicksand'},
];

let colorIndex = 0;

document.getElementById('liquidWord').addEventListener('click', function() {
    // Word transition logic
    wordIndex = (wordIndex + 1) % words.length;
    currentSize = Math.min(maxSize, currentSize * scalingFactor);
    this.style.fontSize = currentSize + "em";
    this.innerHTML = words[wordIndex];

    // Color transition logic
    colorIndex = Math.floor(Math.random() * colorSchemes.length);
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.backgroundColor = colorSchemes[colorIndex].background;
    document.body.appendChild(circle);

    x = x || Math.floor(Math.random() * window.innerWidth);
    y = y || Math.floor(Math.random() * window.innerHeight);
    circle.style.left = x + "px";
    circle.style.top = y + "px";

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
        begin: () => {
            document.body.style.color = colorSchemes[colorIndex].text;
            document.body.style.fontFamily = colorSchemes[colorIndex].font;
            circle.style.backgroundColor = colorSchemes[colorIndex].background;
            circle.style.boxShadow = "0 0 100px 30px " + colorSchemes[colorIndex].text;
        },
        complete: () => {
            document.body.style.backgroundColor = colorSchemes[colorIndex].background;
            document.body.removeChild(circle);
        }
    });
}

// Automatic Animation Every 2 seconds
setInterval(() => {
    animateColorDrop();
}, 2000);

