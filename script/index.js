import {
  profileTitle, profileSubtitle, profileEditButton, popups, popupProfile,
  popupProfileForm, nameInput, aboutInput, buttonAddCard, popupAddCard, inputCardName,
  inputCardLink, popupAddCardForm, elementsList, valSet
} from './consts.js';

import { openPopup, closePopup } from './utils.js';

import { Card } from './Card.js';

import { FormValidator } from './FormValidator.js';

import { initialCards } from './initialCards.js'

const popupAddCardFormValidator = new FormValidator(valSet, popupAddCardForm);
const popupProfileFormValidator = new FormValidator(valSet, popupProfileForm);

popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();

/*function createCard(cardName, imageLink) {
  const newCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = newCard.querySelector('.element__image');
  elementImage.src = imageLink;
  elementImage.alt = cardName;
  newCard.querySelector('.element__image-name').textContent = cardName;
  addListeners(newCard);
  return newCard
}*/

const createCardElement = (data) => {
  const card = new Card(data, '#element-template');
  const cardElement = card.createCard();
  return cardElement;
}

const renderCard = (cardElement) => {
  elementsList.append(cardElement);
}

initialCards.forEach((item) => {
  const cardElement = createCardElement(item)
  renderCard(cardElement)
});

/*function addListeners(el) {
  el.querySelector('.element__delete-button').addEventListener('click', handleDeleteCard);
  el.querySelector('.element__like-button').addEventListener('click', handleLikeCard);
  el.querySelector('.element__image').addEventListener('click', openPopupImage);
}

function handleDeleteCard(evt) {
  evt.target.closest('.element').remove();
}

function handleLikeCard(evt) {
  evt.currentTarget.classList.toggle('element__like-button_active');
}


function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleCloseByEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleCloseByEsc);
}

function handleCloseByEsc(evt) {
  if (evt.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_opened');
    closePopup(currentPopup);
  }
}*/

function openPopupProfile() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
  popupProfileFormValidator.resetErrs();
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  popupAddCardFormValidator.resetErrs();
}

/*function openPopupImage(evt) {
  openPopup(popupImage);
  popupImageLink.src = evt.target.src;
  popupImageLink.alt = evt.target.alt;
  popupImageName.textContent = evt.target.alt;
}*/

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function addNewCard() {
  const data = {
    name: inputCardName.value,
    link: inputCardLink.value
  }

  const cardElement = createCardElement(data);
  elementsList.prepend(cardElement);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  popupAddCardForm.reset();
  closePopup(popupAddCard);
}

profileEditButton.addEventListener('click', openPopupProfile);
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
buttonAddCard.addEventListener('click', openPopupAddCard);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

//Закрытие модального окна по клику вне его области объединенное с кнопкой закрытия
popups.forEach((popup) => {
  popup.addEventListener("mousedown", function (evt) {
    if (evt.target === evt.currentTarget || evt.target.classList.contains("popup__close-button")) {
      closePopup(popup);
    }
  })
});


