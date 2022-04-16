import { Popup } from "./Popup.js";

export class DeleteCardPopup extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  handleConfirmDeleteCard(newHandleConfirmDeleteCard) {
    this._handleConfirmDeleteCard = newHandleConfirmDeleteCard;
  }

  _handleEntSubmit = (evt) => {
    if (evt.key === 'Enter') {this._handleConfirmDeleteCard()};
  }

  open() {
    super.open();
    document.addEventListener('keydown', this._handleEntSubmit);
  }

  close() {
    super.close();
    document.removeEventListener('keydown', this._handleEntSubmit);
  }


  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', () => {
      this._handleConfirmDeleteCard();
    });
  }
}
