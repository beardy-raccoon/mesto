export class Card {
  constructor(data, elementTemplateSelector, handleCardClick, handleDelCardBtnClick) {
    this._elementTemplate = document.querySelector(elementTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._handleCardClick = handleCardClick;
    this._handleDelCardBtnClick = handleDelCardBtnClick;
  }

  handleDeleteCard = () => {
    console.log(this._cardElement);
    this._cardElement.remove();
  }

  _handleLikeCard(evt) {
    evt.currentTarget.classList.toggle('element__like-button_active');
  }

  _setLike() {
    const likeCounter = this._cardElement.querySelector('.element__like-counter');
    likeCounter.textContent = this._likes.length;
  }

  _addListeners(el) {
    el.querySelector('.element__delete-button').addEventListener('click', () => this._handleDelCardBtnClick(this._id));
    el.querySelector('.element__like-button').addEventListener('click', this._handleLikeCard);
    el.querySelector('.element__image').addEventListener('click', this._handleCardClick);
  }

  createCard() {
    this._cardElement = this._elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = this._cardElement.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._cardElement.querySelector('.element__image-name').textContent = this._name;
    this._addListeners(this._cardElement);
    this._setLike();
    return this._cardElement;
  }
}
