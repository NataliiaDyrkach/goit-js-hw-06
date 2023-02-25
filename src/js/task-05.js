const inputText = document.getElementById("name-input");
const ouputName = document.getElementById("name-output");

inputText.addEventListener('input', onInputText);

function onInputText(event) {
    if (event === '') {
        ouputName = 'Anonymous';
    } else {ouputName.textContent = event.currentTarget.value};
}

