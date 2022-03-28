import { Popup } from './Popup.js';

export class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = this._popup.querySelector('.popup__image-link');
    this._popupName = this._popup.querySelector('.popup__image-name');
  }

  open({ name, link }) {
    super.open();
    this._popupName.textContent = name;
    this._popupImage.src = link;
  }
}

/*
export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(name, link){
    const popupImage = this._popup.querySelector('.popup__image-link');
    const popupName = this._popup.querySelector('.popup__image-name');
    popupName.textContent = name;
    popupImage.src = link;
    super.open();
  }
}*/
