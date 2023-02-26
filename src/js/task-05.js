const inputText = document.getElementById("name-input");
const ouputName = document.getElementById("name-output");

inputText.addEventListener("input", onInputText);

function onInputText(event) {
  ouputName.textContent =
    event.currentTarget.value === "" ? "Anonimous" : event.currentTarget.value;
}
