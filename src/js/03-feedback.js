import throttle from 'lodash.throttle';

const inputForm = document.querySelector('.feedback-form');
const emailItem = document.querySelector('.feedback-form input');
const messageItem = document.querySelector('.feedback-form textarea');

inputForm.addEventListener('input', throttle(onFormInput, 500));
inputForm.addEventListener('submit', onFormSubmit);
inputFildsOutput();

function onFormInput() {
  const saveData = {
    email: emailItem.value,
    message: messageItem.value,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(saveData));
  console.log(saveData);
}

function onFormSubmit(evt) {
  evt.preventDefault();
  evt.currentTarget.reset();
  localStorage.removeItem('feedback-form-state');
}

function inputFildsOutput() {
  const savedData = localStorage.getItem('feedback-form-state');
  if (savedData) {
    const dataToInsert = JSON.parse(
      localStorage.getItem('feedback-form-state')
    );
    emailItem.value = dataToInsert.email;
    messageItem.value = dataToInsert.message;
  }
}
