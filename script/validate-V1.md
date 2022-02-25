
const valSet = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__submit-button',
  inactiveButtonClass: 'popup__submit-button_inactive',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}

const formSubmit = (evt) => {
  evt.preventDefault();
}

const checkInputValidity = (popupForm, popupInput) => {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  if (popupInput.validity.valid) {
  errorMessage.textContent = "";
  popupInput.classList.remove(valSet.inputErrorClass);
  errorMessage.classList.remove(valSet.errorClass);
  } else {
    errorMessage.textContent = popupInput.validationMessage;
    popupInput.classList.add(valSet.inputErrorClass);
    errorMessage.classList.add(valSet.errorClass);
  }
}

const handleSubmitButton = (popupForm, popupSubmitButton) => {
  if (popupForm.checkValidity()) {
    popupSubmitButton.removeAttribute('disabled');
    popupSubmitButton.classList.remove(valSet.inactiveButtonClass);
  } else {
    popupSubmitButton.setAttribute('disabled', '');
    popupSubmitButton.classList.add(valSet.inactiveButtonClass);
  }
}

function setEvtListeners(popupForm) {

  const popupInputs = popupForm.querySelectorAll(valSet.inputSelector);
  const popupSubmitButton = popupForm.querySelector(valSet.submitButtonSelector);

  handleSubmitButton(popupInputs, popupSubmitButton);

  Array.from(popupInputs).forEach((popupInput) => {
    popupInput.addEventListener('input', (evt) => {
      checkInputValidity(popupForm, popupInput);
      handleSubmitButton(popupForm, popupSubmitButton);
    });
  });
}


function enableValidation() {
  const currentForm = document.querySelector('.popup_opened');
  const popupForm = currentForm.querySelector('.popup__form')
  popupForm.addEventListener('submit', formSubmit)
  setEvtListeners(popupForm)
}



