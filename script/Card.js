import { popupImage, popupImageLink, popupImageName } from './consts.js';
import { openPopup } from './utils.js';

export class Card {
  constructor(data, elementTemplateSelector,) {
    this._elementTemplate = document.querySelector(elementTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
  }

  _handleDeleteCard = () => {
    this._cardElement.remove();
  }

  _handleLikeCard(evt) {
    evt.currentTarget.classList.toggle('element__like-button_active');
  }
  _openPopupImage = () => {
    popupImageLink.src = this._link;
    popupImageLink.alt = this._name;
    popupImageName.textContent = this._name;
    openPopup(popupImage);
  }

  _addListeners(el) {
    el.querySelector('.element__delete-button').addEventListener('click', this._handleDeleteCard);
    el.querySelector('.element__like-button').addEventListener('click', this._handleLikeCard);
    el.querySelector('.element__image').addEventListener('click', this._openPopupImage);
  }

  createCard() {
    this._cardElement = this._elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = this._cardElement.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._cardElement.querySelector('.element__image-name').textContent = this._name;
    this._addListeners(this._cardElement);
    return this._cardElement;
  }
}
