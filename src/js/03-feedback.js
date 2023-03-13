import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const emailArea = document.querySelector('[name="email"]');
const messageArea = document.querySelector('[name="message"]');
const storageKey = 'feedback-form-state';
const formValues = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

function onFormSubmit(event) {
    event.preventDefault();
    if (emailArea.value && messageArea.value) {
        event.currentTarget.reset();
        localStorage.removeItem(storageKey);
        console.log(formValues);
        return
    }
    alert('Шановний користувач! Будьте ласкаві заповните всі поля форми.');
}

function onFormInput(event) {
    formValues.email = emailArea.value;
    formValues.message = messageArea.value;
    localStorage.setItem(storageKey, JSON.stringify(formValues));
}

updateFormValues();

function updateFormValues() {
    const savedValues = JSON.parse(localStorage.getItem(storageKey));
    if (savedValues) {
        emailArea.value = savedValues.email;
        messageArea.value = savedValues.message;
    }
}