const input = document.getElementById("font-size-control");
const span = document.getElementById("text");

input.addEventListener('input', chengeFontSize);

function chengeFontSize(event) {
span.style.fontSize = event.target.value +'px'
};
 