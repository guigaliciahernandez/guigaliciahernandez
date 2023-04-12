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

