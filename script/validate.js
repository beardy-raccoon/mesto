const formSubmit = (evt) => {
  evt.preventDefault();
}

const checkInputValidity = (popupForm, popupInput) => {
  const errorMessage = popupForm.querySelector(`#error-${popupInput.id}`);
  console.log(errorMessage);
  if (popupInput.validity.valid) {
    popupInput.classList.remove('popup__input_type_error');
    errorMessage.textContent = '';
    errorMessage.classList.remove('popup__error_visible');
  } else {
    popupInput.classList.add('popup__input_type_error');
    errorMessage.classList.add('popup__error_visible');
    errorMessage.textContent = popupInput.validationMessage;
  }
}

const submitButtonToggle = (popupForm, popupSubmitButton) => {
  if (popupForm.checkValidity()) {
    popupSubmitButton.removeAttribute('disabled');
    popupSubmitButton.classList.remove('popup__submit-button_inactive');
  } else {
    popupSubmitButton.setAttribute('disabled', '');
    popupSubmitButton.classList.add('popup__submit-button_inactive');
  }
}

function enableValidation() {
  const popupForm = document.querySelector('.popup__form');
  popupForm.addEventListener('submit', formSubmit)
  const popupInputs = document.querySelectorAll('.popup__input');
  const popupSubmitButton = document.querySelector('.popup__submit-button');
  submitButtonToggle(popupForm, popupSubmitButton);
  popupInputs.forEach(popupInput => {
    popupInput.addEventListener('input', (evt) => {
      checkInputValidity(popupForm, popupInput);
      submitButtonToggle(popupForm, popupSubmitButton);
    });
  });
}

enableValidation();
