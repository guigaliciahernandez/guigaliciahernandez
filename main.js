document.getElementById("dark-mode-toggle").addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");
});

document.getElementById("print-toggle").addEventListener("click", function () {
  window.print();
});

function adjustMarginsForPrint() {
  const container = document.querySelector(".container");
  container.style.padding = "0";
  container.style.margin = "0";
}

document.getElementById("print-toggle").addEventListener("click", function () {
  adjustMarginsForPrint();
  window.print();
});

let colorIndex = 0;
const colorSchemes = [
  { text: 'rgb(255,130,226)', background: 'rgb(0,18,168)', font: 'Nunito' },
  { text: 'rgb(49,253,96)', background: 'rgb(254,49,197)', font: 'Roboto' },
  { text: 'rgb(51,70,255)', background: 'rgb(255,116,21)', font: 'Playfair Display' },
  { text: 'rgb(0,18,168)', background: 'rgb(250,255,0)', font: 'Raleway' },
  { text: 'rgb(49,253,96)', background: 'rgb(95,1,76)', font: 'Cormorant Garamond' },
  { text: 'rgb(243,46,37)', background: 'rgb(116,255,184)', font: 'Lato' },
  { text: 'rgb(255,116,21)', background: 'rgb(38,133,73)', font: 'Montserrat' },
  { text: 'rgb(51,70,255)', background: 'rgb(250,255,0)', font: 'Quicksand' },
  { text: 'rgb(49,253,96)', background: 'rgb(255,130,226)', font: 'Merriweather' }
];

function updateColorScheme() {
  document.body.style.color = colorSchemes[colorIndex].text;
  document.body.style.backgroundColor = colorSchemes[colorIndex].background;
  document.body.style.fontFamily = colorSchemes[colorIndex].font;
  colorIndex = (colorIndex + 1) % colorSchemes.length;
}

function animateColorDrop() {
  const circle = document.createElement("div");
  circle.style.position = "fixed";
  circle.style.width = "0";
  circle.style.height = "0";
  circle.style.borderRadius = "50%";
  circle.style.zIndex = "9999";
  document.body.appendChild(circle);

  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  const maxDimension = Math.max(
    document.documentElement.clientWidth,
    document.documentElement.clientHeight
  );
  const animationDuration = 1500;

  anime({
    targets: circle,
    width: [0, maxDimension * 2],
    height: [0, maxDimension * 2],
    left: [x + "px", x - maxDimension + "px"],
    top: [y + "px", y - maxDimension + "px"],
    backgroundColor: colorSchemes[colorIndex].background,
    duration: animationDuration,
    easing: "easeInOutQuad",
    complete: () => {
      document.body.style.color = colorSchemes[colorIndex].text;
      document.body.style.backgroundColor = colorSchemes[colorIndex].background;
      document.body.style.fontFamily = colorSchemes[colorIndex].font;
      colorIndex = (colorIndex + 1) % colorSchemes.length;
      document.body.removeChild(circle);
    },
  });
}

setInterval(animateColorDrop, 5000);


