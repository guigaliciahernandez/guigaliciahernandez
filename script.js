let words = ['Happy', 'Joy', 'Laugh', 'Cheerful', 'Delight'];
let colorIndex = 0;

// Function to check if dark mode is enabled
function isDarkModeEnabled() {
  return document.body.classList.contains("dark-mode");
}

// Dark mode toggle button functionality
const darkModeToggle = document.getElementById("dark-mode-toggle");
darkModeToggle.addEventListener("click", function () {
  if (isDarkModeEnabled()) {
    document.body.classList.remove("dark-mode");
  } else {
    document.body.classList.add("dark-mode");
    animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
  }
});

document.getElementById('smileWord').addEventListener('click', function() {
    colorIndex = Math.floor(Math.random() * colorSchemes.length);
    this.innerHTML = words[colorIndex];
    if (isDarkModeEnabled()) {
        animateColorDrop(window.innerWidth / 2, window.innerHeight / 2);
    }
});

// Modified animateColorDrop function to work with dark mode
function animateColorDrop(x, y) {
    if (isDarkModeEnabled()) {
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
}

function rectsIntersect(rect1, rect2) {
  return !(rect2.left > rect1.right ||
           rect2.right < rect1.left ||
           rect2.top > rect1.bottom ||
           rect2.bottom < rect1.top);
}

// Mouse click listener
document.addEventListener("click", (event) => {
    if (event.target !== darkModeToggle) {
        animateColorDrop(event.clientX, event.clientY);
    }
});
