export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._submitBtn = this._popup.querySelector('.popup__submit-button');
  }

  open() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  changeBtnText(text) {
    this._submitBtn.textContent = text;
  }

  close() {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('mousedown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') { this.close() }
  }

  setEventListeners() {
    this._popup.addEventListener('mousedown', (evt) => {
      if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-button")) {
        this.close();
      }
    });
  }
}
