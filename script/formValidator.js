export class FormValidator {
  constructor(config, popupForm) {
    this._popupForm = popupForm;
    this._config = config;
    this._popupSubmitButton = this._popupForm.querySelector(this._config.submitButtonSelector);
    this._popupInputs = this._popupForm.querySelectorAll(this._config.inputSelector);
  }

  _handleFormSubmit(evt) {
    evt.preventDefault();
  }

  _enableInputErr(popupInput, validationMessage) {
    const errorMessage = this._popupForm.querySelector(`#error-${popupInput.id}`);
    errorMessage.textContent = validationMessage;
    popupInput.classList.add(this._config.inputErrorClass);
    errorMessage.classList.add(this._config.errorClass);
  }

  _disableInputErr(popupInput) {
    const errorMessage = this._popupForm.querySelector(`#error-${popupInput.id}`);
    errorMessage.textContent = "";
    popupInput.classList.remove(this._config.inputErrorClass);
    errorMessage.classList.remove(this._config.errorClass);
  }

  _validateInput(popupInput) {
    if (popupInput.validity.valid) {
      this._disableInputErr(popupInput);
    } else {
      this._enableInputErr(popupInput, popupInput.validationMessage);
    }
  }

  _enableButton() {
    this._popupSubmitButton.removeAttribute('disabled');
    this._popupSubmitButton.classList.remove(this._config.inactiveButtonClass);
  }

  _disableButton() {
    this._popupSubmitButton.setAttribute('disabled', '');
    this._popupSubmitButton.classList.add(this._config.inactiveButtonClass);
  }

  _toggleButtonState() {
    if (this._popupForm.checkValidity()) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  _handleSubmitButton() {
    if (Array.from(this._popupInputs).filter(popupInput => !popupInput.validity.valid).length === 0) {
      this._enableButton();
    } else {
      this._disableButton();
    }
  }

  resetErrs() {
    Array.from(this._popupInputs).forEach((popupInput) => {
      this._disableInputErr(popupInput);
    });
    this._toggleButtonState();
  }
  _setEvtListeners() {

    this._handleSubmitButton();

    Array.from(this._popupInputs).forEach((popupInput) => {
      popupInput.addEventListener('input', () => {
        this._validateInput(popupInput);
        this._handleSubmitButton();
      });
    });
  }

  enableValidation() {
    this._popupForm.addEventListener('submit', this._handleFormSubmit);
    this._setEvtListeners();
  };

}
