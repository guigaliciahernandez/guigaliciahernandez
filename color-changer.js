let colorIndex = 0;
const colorSchemes = [
  "color-scheme-1",
  "color-scheme-2",
  "color-scheme-3",
  "color-scheme-4",
  "color-scheme-5",
];

document.body.addEventListener("click", (event) => {
  const circle = document.getElementById("circle");
  const x = event.clientX - circle.clientWidth / 2;
  const y = event.clientY - circle.clientHeight / 2;
  circle.style.left = x + "px";
  circle.style.top = y + "px";

  anime({
    targets: circle,
    width: ["0%", "100vw"],
    height: ["0%", "100vh"],
    left: [x + "px", "0px"],
    top: [y + "px", "0px"],
    duration: 1000,
    easing: "easeInOutCubic",
    complete: () => {
      circle.style.width = "0%";
      circle.style.height = "0%";
      updateColorScheme();
    },
  });
});

function updateColorScheme() {
  const prevColorScheme = colorSchemes[colorIndex];
  document.body.classList.remove(prevColorScheme);

  colorIndex = (colorIndex + 1) % colorSchemes.length;
  const newColorScheme = colorSchemes[colorIndex];
  document.body.classList.add(newColorScheme);
}
