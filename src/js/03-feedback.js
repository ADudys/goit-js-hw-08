import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const { email, message } = form.elements;

form.addEventListener('input', throttle(getInputData, 500));
form.addEventListener('submit', submit);

function getInputData(event) {
  const inputData = { email: email.value, message: message.value };
  localStorage.setItem('feedback-form-state', JSON.stringify(inputData));
}

function submit(event) {
  event.preventDefault();
  console.log({ email: email.value, message: message.value });
  form.reset();
  localStorage.removeItem(email);
  localStorage.removeItem(message);
}
