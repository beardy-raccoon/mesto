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

function openPopupProfile() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
  popupProfileFormValidator.resetValidation();
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  popupAddCardForm.reset();
  popupAddCardFormValidator.resetValidation();
}

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


