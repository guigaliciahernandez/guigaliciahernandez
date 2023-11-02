let words = ['Happy', 'Joy', 'Laugh', 'Cheerful', 'Delight'];
let colors = [{
    background: '#FF5733',
    text: 'white',
    font: 'Arial, sans-serif'
  },
  {
    background: '#33FF57',
    text: 'white',
    font: 'Arial, sans-serif'
  },
  // ... add more colors similarly
];
let colorIndex = 0;

document.getElementById('smileWord').addEventListener('click', function(event) {
  let randomIndex = Math.floor(Math.random() * words.length);
  this.innerHTML = words[randomIndex];
  animateColorDrop(event.clientX, event.clientY);
});

function animateColorDrop(x, y) {
  const circle = document.createElement("div");
  circle.style.position = "fixed";
  circle.style.width = "0";
  circle.style.height = "0";
  circle.style.borderRadius = "50%";
  circle.style.zIndex = "-1";
  document.body.appendChild(circle);

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
    backgroundColor: [
      colors[colorIndex].background,
      colors[colorIndex].background
    ],
    boxShadow: [
      "0 0 100px 30px " + colors[colorIndex].text,
      "0 0 100px 30px " + colors[colorIndex].text
    ],
    duration: animationDuration,
    easing: "easeInOutQuad",
    begin: () => {
      document.body.style.color = colors[colorIndex].text;
      circle.style.backgroundColor = colors[colorIndex].background;
      circle.style.boxShadow = "0 0 100px 30px " + colors[colorIndex].text;
    },
    update: (anim) => {
      const circleRect = circle.getBoundingClientRect();
      const textElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6, p, li, a, .separator");
      textElements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        if (rectsIntersect(circleRect, elementRect)) {
          element.style.color = colors[colorIndex].text;
          element.style.fontFamily = colors[colorIndex].font;
        }
      });
    },
    complete: () => {
      document.body.style.backgroundColor = colors[colorIndex].background;
      document.body.style.fontFamily = colors[colorIndex].font;
      colorIndex = (colorIndex + 1) % colors.length;
      document.body.removeChild(circle);
    },
  });
}

function rectsIntersect(rect1, rect2) {
  return !(rect2.left > rect1.right ||
    rect2.right < rect1.left ||
    rect2.top > rect1.bottom ||
    rect2.bottom < rect1.top);
}
