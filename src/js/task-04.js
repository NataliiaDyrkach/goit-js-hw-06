

const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const totalValue = document.getElementById('value');

decrementBtn.addEventListener('click', onDecrementBtn);
incrementBtn.addEventListener('click', onIncrementBtn);

let counterValue = 0;

function onDecrementBtn(event) {
    counterValue -= 1;
    totalValue.textContent = counterValue;
}

function onIncrementBtn(event) {
     counterValue += 1;
 totalValue.textContent = counterValue;
}




