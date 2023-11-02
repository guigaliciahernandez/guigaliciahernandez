let words = ['EMBRACE', 'THE', 'DAY', 'BECAUSE', 'EVERY', 'DAY', 'IS', 'A', 'NEW', 'START'];
let currentIndex = 0;

let colorSchemes = [
    {background: '#FF5733', text: 'white'},
    {background: '#33FF57', text: 'white'},
    {background: '#5733FF', text: 'white'},
    {background: '#FF33F1', text: 'white'},
    {background: '#33FFF1', text: 'white'},
];

let colorIndex = 0;
const liquidWord = document.getElementById('liquidWord');

liquidWord.addEventListener('click', function() {
    animateColorDrop(event.clientX, event.clientY);

    if (currentIndex < words.length) {
        liquidWord.innerText = words[currentIndex];
        currentIndex++;
    } else {
        currentIndex = 0;
        liquidWord.innerText = words[currentIndex];
    }

    this.style.transform = "scale(1.5)";
    setTimeout(() => {
        this.style.transform = "scale(1)";
    }, 200);
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
            circle.style.backgroundColor = colorSchemes[colorIndex].background;
        },
        complete: () => {
            document.body.style.backgroundColor = colorSchemes[colorIndex].background;
            document.body.removeChild(circle);
            if (colorIndex < colorSchemes.length - 1) {
                colorIndex++;
            } else {
                colorIndex = 0;
            }
        }
    });
}

// Automatic Animation Every 2 seconds
setInterval(() => {
    animateColorDrop();
}, 2000);


