import { Popup } from "./Popup.js";

export class PopupDeleteCard extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleDeleteCard();
      console.log('хотя бы это сарботало');
    });
  }

  _handleDeleteCard(evt) {
    evt.currentTarget.closest('element').remove();
  }
}
