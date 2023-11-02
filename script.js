let words = ['EMBRACE', 'LIVE', 'LOVE', 'SMILE', 'BELIEVE'];
let colorSchemes = [
    {background: '#FF5733', text: 'white'},
    {background: '#33FF57', text: 'white'},
    {background: '#5733FF', text: 'white'},
    {background: '#FF33F1', text: 'white'},
    {background: '#33FFF1', text: 'white'},
];

let currentWordIndex = 0;

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
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
            document.getElementById('dynamicWord').innerText = words[currentWordIndex];
            document.getElementById('dynamicWord').style.fontSize = 50 + (currentWordIndex * 20) + "px";
            document.body.style.color = colorSchemes[currentWordIndex].text;
            circle.style.backgroundColor = colorSchemes[currentWordIndex].background;
        },
        complete: () => {
            document.body.style.backgroundColor = colorSchemes[currentWordIndex].background;
            document.body.removeChild(circle);
            currentWordIndex = (currentWordIndex + 1) % words.length;
        }
    });
}

// Automatic Animation Every 2 seconds
setInterval(() => {
    animateColorDrop();
}, 2000);

// Animation on Body Click
document.body.addEventListener("click", (event) => {
    animateColorDrop(event.clientX, event.clientY);
});


