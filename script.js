let words = ['Happy', 'Joy', 'Laugh', 'Cheerful', 'Delight'];

let colorSchemes = [
    {background: '#FF5733', text: 'white', font: 'Arial, sans-serif'},
    {background: '#33FF57', text: 'white', font: 'Arial, sans-serif'},
    {background: '#5733FF', text: 'white', font: 'Arial, sans-serif'},
    {background: '#FF33F1', text: 'white', font: 'Arial, sans-serif'},
    {background: '#33FFF1', text: 'white', font: 'Arial, sans-serif'},
];

let colorIndex = 0;

document.getElementById('smileWord').addEventListener('click', function() {
    colorIndex = Math.floor(Math.random() * colorSchemes.length);
    this.innerHTML = words[colorIndex];
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
    const animationDuration = 1200;

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
            circle.style.boxShadow = "0 0 100px 30px " + colorSchemes[colorIndex].text;
        },
        complete: () => {
            document.body.style.backgroundColor = colorSchemes[colorIndex].background;
            document.body.removeChild(circle);
        }
    });
}

function rectsIntersect(rect1, rect2) {
  return !(rect2.left > rect1.right ||
           rect2.right < rect1.left ||
           rect2.top > rect1.bottom ||
           rect2.bottom < rect1.top);
}
