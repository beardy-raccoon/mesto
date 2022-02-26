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

const setEvtListeners = (popupForm) => {

  const popupInputs = popupForm.querySelectorAll(valSet.inputSelector);
  const popupSubmitButton = popupForm.querySelector(valSet.submitButtonSelector);

  handleSubmitButton(popupInputs, popupSubmitButton);

  Array.from(popupInputs).forEach((popupInput) => {
    popupInput.addEventListener('input', () => {
      validateInput(popupForm, popupInput);
      handleSubmitButton(popupInputs, popupSubmitButton);
    });
  });
}

const enableButton = (popupSubmitButton) => {
  popupSubmitButton.removeAttribute('disabled');
  popupSubmitButton.classList.remove(valSet.inactiveButtonClass);
}

const disableButton = (popupSubmitButton) => {
  popupSubmitButton.setAttribute('disabled', '');
  popupSubmitButton.classList.add(valSet.inactiveButtonClass);
}

const toggleButtonState = (popupForm, popupSubmitButton) => {
  if (popupForm.checkValidity()) {
    enableButton(popupSubmitButton);
  } else {
    disableButton(popupSubmitButton);
  }
}

function enableInputErr(popupInput, popupForm, validationMessage) {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  errorMessage.textContent = validationMessage;
  popupInput.classList.add(valSet.inputErrorClass);
  errorMessage.classList.add(valSet.errorClass);
}

function disableInputErr(popupInput, popupForm) {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  errorMessage.textContent = "";
  popupInput.classList.remove(valSet.inputErrorClass);
  errorMessage.classList.remove(valSet.errorClass);
}

function validateInput(popupForm, popupInput) {
  if (popupInput.validity.valid) {
    disableInputErr(popupInput, popupForm);
  } else {
    enableInputErr(popupInput, popupForm, popupInput.validationMessage);
  }
}

function handleSubmitButton(popupInputs, popupSubmitButton) {
  if (Array.from(popupInputs).filter(popupInput => !popupInput.validity.valid).length === 0) {
    enableButton(popupSubmitButton);
  } else {
    disableButton(popupSubmitButton);
  }
}

function enableValidation() {
  const popupForms = document.querySelectorAll(valSet.formSelector);

  Array.from(popupForms).forEach((popupForm) => {

    popupForm.addEventListener('submit', handleFormSubmit);

    setEvtListeners(popupForm);
  });
}

enableValidation();
