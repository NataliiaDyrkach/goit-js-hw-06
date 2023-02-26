const form = document.querySelector(".login-form");

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputEmail = event.currentTarget.elements.email.value;
  const inputPassword = event.currentTarget.elements.password.value;
  console.log(inputEmail);
  console.log(inputPassword);

  const dataForm = {
    email: inputEmail,
    password: inputPassword,
  };

  if (inputEmail === "" || inputPassword === "") {
    alert("Увага! Всі поля повинні бути заповненні");
  } else {
    console.log(dataForm);
    form.reset();
    return;
  }
}
