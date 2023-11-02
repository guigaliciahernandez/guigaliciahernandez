let words = ['EMBRACE', 'CHANGE', 'ENJOY THE RIDE'];
let scaleFactors = [1, 2, 3];

let colorSchemes = [
    {background: '#FF5733', text: 'white'},
    {background: '#33FF57', text: 'black'},
    {background: '#5733FF', text: 'white'}
];

let colorIndex = 0;

document.getElementById('word').addEventListener('click', function() {
    colorIndex = (colorIndex + 1) % words.length;
    this.innerHTML = words[colorIndex];
    this.style.fontSize = `${50 * scaleFactors[colorIndex]}px`;
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
});

function animateColorDrop(x, y) {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.backgroundColor = colorSchemes[colorIndex].background;
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
        begin: () => {
            document.body.style.color = colorSchemes[colorIndex].text;
            circle.style.backgroundColor = colorSchemes[colorIndex].background;
        },
        complete: () => {
            document.body.style.backgroundColor = colorSchemes[colorIndex].background;
            document.body.removeChild(circle);
        }
    });
}

setInterval(() => {
    animateColorDrop();
}, 2000);


// Animation on Body Click
document.body.addEventListener("click", (event) => {
    animateColorDrop(event.clientX, event.clientY);
});


