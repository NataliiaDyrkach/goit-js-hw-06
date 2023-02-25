const span = document.querySelector(".color");
const button = document.querySelector(".change-color");

button.addEventListener("click", chengeColor);

function chengeColor(event) {
  span.textContent = getRandomHexColor();
  document.body.style.background = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
