const valSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const handleFormSubmit = (evt) => {
  evt.preventDefault();
}

const setEvtListeners = (popupForm, config) => {

  const popupInputs = popupForm.querySelectorAll(config.inputSelector);
  const popupSubmitButton = popupForm.querySelector(config.submitButtonSelector);

  handleSubmitButton(popupInputs, popupSubmitButton, config);

  Array.from(popupInputs).forEach((popupInput) => {
    popupInput.addEventListener('input', () => {
      validateInput(popupForm, popupInput, config);
      handleSubmitButton(popupInputs, popupSubmitButton, config);
    });
  });
}

const enableButton = (popupSubmitButton, config) => {
  popupSubmitButton.removeAttribute('disabled');
  popupSubmitButton.classList.remove(config.inactiveButtonClass);
}

const disableButton = (popupSubmitButton, config) => {
  popupSubmitButton.setAttribute('disabled', '');
  popupSubmitButton.classList.add(config.inactiveButtonClass);
}

const toggleButtonState = (popupForm, popupSubmitButton, config) => {
  if (popupForm.checkValidity()) {
    enableButton(popupSubmitButton, config);
  } else {
    disableButton(popupSubmitButton, config);
  }
}

function enableInputErr(popupInput, popupForm, validationMessage, config) {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  errorMessage.textContent = validationMessage;
  popupInput.classList.add(config.inputErrorClass);
  errorMessage.classList.add(config.errorClass);
}

function disableInputErr(popupInput, popupForm, config) {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  errorMessage.textContent = "";
  popupInput.classList.remove(config.inputErrorClass);
  errorMessage.classList.remove(config.errorClass);
}

function validateInput(popupForm, popupInput, config) {
  if (popupInput.validity.valid) {
    disableInputErr(popupInput, popupForm, config);
  } else {
    enableInputErr(popupInput, popupForm, popupInput.validationMessage, config);
  }
}

function handleSubmitButton(popupInputs, popupSubmitButton, config) {
  if (Array.from(popupInputs).filter(popupInput => !popupInput.validity.valid).length === 0) {
    enableButton(popupSubmitButton, config);
  } else {
    disableButton(popupSubmitButton, config);
  }
}

function enableValidation(config) {
  const popupForms = document.querySelectorAll(config.formSelector);

  Array.from(popupForms).forEach((popupForm) => {

    popupForm.addEventListener('submit', handleFormSubmit);

    setEvtListeners(popupForm, config);
  });
}

enableValidation(valSet);
