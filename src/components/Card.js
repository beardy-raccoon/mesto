export class Card {
  constructor(data, elementTemplateSelector, handleCardClick, handleDelCardBtnClick, handleLikeClick) {
    this._elementTemplate = document.querySelector(elementTemplateSelector).content;
    this._name = data.name;
    this._link = data.link;
    this._likes = data.likes;
    this._id = data.id;
    this._userId = data.userId;
    this._ownerId = data.ownerId;
    this._handleCardClick = handleCardClick;
    this._handleDelCardBtnClick = handleDelCardBtnClick;
    this._handleLikeClick = handleLikeClick;
  }

  handleDeleteCard = () => {
    this._cardElement.remove();
  }

  _handleLikedCard() {
    this._cardElement.querySelector('.element__like-button').classList.remove('element__like-button_active');
  }

  _handleUnLikedCard() {
    this._cardElement.querySelector('.element__like-button').classList.add('element__like-button_active');
  }


  isLiked() {
    const userHasLikedCard = this._likes.some(like => like._id === this._userId);
    return userHasLikedCard
  }

  displayLikes(newLikes) {
    this._likes = newLikes;
    const likeCounter = this._cardElement.querySelector('.element__like-counter');
    likeCounter.textContent = this._likes.length;
    if(!this.isLiked()) {
      this._handleLikedCard();
    } else {
      this._handleUnLikedCard();
    }

  }

  _addListeners(el) {
    el.querySelector('.element__delete-button').addEventListener('click', () => this._handleDelCardBtnClick(this._id));
    el.querySelector('.element__like-button').addEventListener('click',() => this._handleLikeClick(this._id));
    el.querySelector('.element__image').addEventListener('click', this._handleCardClick);
  }

  createCard() {
    this._cardElement = this._elementTemplate.querySelector('.element').cloneNode(true);
    const elementImage = this._cardElement.querySelector('.element__image');
    elementImage.src = this._link;
    elementImage.alt = this._name;
    this._cardElement.querySelector('.element__image-name').textContent = this._name;
    this._addListeners(this._cardElement);
    this.displayLikes(this._likes);

    if (this._ownerId !== this._userId) {
      this._cardElement.querySelector('.element__delete-button').style.display = 'none';
    }


    return this._cardElement;
  }
}


