import {
  profileTitle, profileSubtitle, profileEditButton, popups, popupProfile,
  popupImage, popupImageLink, popupImageName, popupProfileForm, popupProfileSubmitBtn,
  nameInput, aboutInput, buttonAddCard, popupAddCard, popupAddCardSubmitBtn, inputCardName,
  inputCardLink, popupAddCardForm, elementTemplate, elementsList, valSet
} from './consts.js'

import { FormValidator } from './formValidator.js';

import { initialCards } from './initialCards.js'

const popupAddCardFormValidator = new FormValidator(valSet, popupAddCardForm);
const popupProfileFormValidator = new FormValidator(valSet, popupProfileForm);

popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();

function createCard(cardName, imageLink) {
  const newCard = elementTemplate.querySelector('.element').cloneNode(true);
  const elementImage = newCard.querySelector('.element__image');
  elementImage.src = imageLink;
  elementImage.alt = cardName;
  newCard.querySelector('.element__image-name').textContent = cardName;
  addListeners(newCard);
  return newCard
}

function render() {
  initialCards.forEach(function (item) {
    elementsList.append(createCard(item.name, item.link))
  });
}

function addListeners(el) {
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
}

function openPopupProfile() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
  //toggleButtonState(popupProfileForm, popupProfileSubmitBtn, valSet);
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  //toggleButtonState(popupAddCardForm, popupAddCardSubmitBtn, valSet);
}

function openPopupImage(evt) {
  openPopup(popupImage);
  popupImageLink.src = evt.target.src;
  popupImageLink.alt = evt.target.alt;
  popupImageName.textContent = evt.target.alt;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(inputCardName.value, inputCardLink.value));
  popupAddCardForm.reset();
  closePopup(popupAddCard);
}

render();



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


