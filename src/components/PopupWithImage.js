import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image-link');
    this._popupName = this._popup.querySelector('.popup__image-name');
  }

  open({ name, link }) {
    this._popupName.textContent = name;
    this._popupImage.src = link;
    super.open();
  }
}
