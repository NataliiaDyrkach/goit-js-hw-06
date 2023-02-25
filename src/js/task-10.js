const CreateBtn = document.querySelector("[data-create]");
const DestroyBtn = document.querySelector("[data-destroy]");
const boxesDiv = document.querySelector("#boxes");
const input = document.querySelector('input');

let amount = input.value;

let boxWidth = 20;
let boxHeight = 20;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

CreateBtn.addEventListener("click", createBoxes);
DestroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  for (let i = 0; i < amount; i += 1) {
    boxWidth += 10;
    boxHeight += 10;

    const newBox = document.createElement("div");
    newBox.style.width = `${boxWidth}px`;
    newBox.style.height = `${boxHeight}px`;
    newBox.style.background = getRandomHexColor();
     boxesDiv.append(newBox);
  }
}
// createBoxes(5);

function destroyBoxes() {
  boxesDiv.innerHTML = '';
}
