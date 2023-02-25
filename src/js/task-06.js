const input = document.getElementById("validation-input");


input.addEventListener('blur', outOfFocus);

function outOfFocus(event) {
    if (event.currentTarget.value.length === Number(input.dataset.length)) {
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else {
        input.classList.remove('valid');;
        input.classList.add('invalid');
    }
};
 

