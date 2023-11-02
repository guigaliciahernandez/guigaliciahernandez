let words = ['Happy', 'Joy', 'Laugh', 'Cheerful', 'Delight'];
let colors = ['#FF5733', '#33FF57', '#5733FF', '#FF33F1', '#33FFF1'];

document.getElementById('smileWord').addEventListener('click', function() {
    let randomIndex = Math.floor(Math.random() * words.length);
    this.innerHTML = words[randomIndex];
    document.body.style.backgroundColor = colors[randomIndex];
    animateColorDrop();
});

function animateColorDrop() {
    const circle = document.createElement("div");
    circle.classList.add("circle-animation");
    circle.style.backgroundColor = "white"; // Default circle color
    document.body.appendChild(circle);

    const x = window.innerWidth / 2;
    const y = window.innerHeight / 2;

    circle.style.left = x + "px";
    circle.style.top = y + "px";

    const maxDimension = Math.max(document.documentElement.clientWidth, document.documentElement.clientHeight);
    const animationDuration = 1200;

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
