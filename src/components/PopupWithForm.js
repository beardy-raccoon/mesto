import { Popup } from './Popup.js';

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector('.popup__form');
  }

  _getInputValues() {
    const inputArr = [...this._form.querySelectorAll('.popup__input')];
    const values = {};
    inputArr.forEach((input) => {
      values[input.name] = input.value;
    });
    return values
  }

  switchHandleFormSubmit(newHandleFormSubmit) {
    this._handleFormSubmit = newHandleFormSubmit;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
    document.removeEventListener('keydown', this._handleEntSubmit);
  }
}
