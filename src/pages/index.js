import './index.css';

import {
  profileEditButton,popupProfileForm,
  nameInput, aboutInput, buttonAddCard,
  popupAddCardForm, valSet
} from '../utils/consts.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { initialCards } from '../utils/initialCards.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';

const popupAddCardFormValidator = new FormValidator(valSet, popupAddCardForm);
const popupProfileFormValidator = new FormValidator(valSet, popupProfileForm);

popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();

const createCardElement = (data) => {
  const card = new Card(data, '#element-template', () => {
    previewImagePopup.open({ name: data.name, link: data.link })
});
  const cardElement = card.createCard();
  return cardElement;
}

const addNewCard = (data) => {
  const cardElement = createCardElement({
    name: data['card-name'],
    link: data['card-link']
  });
  section.addItem(cardElement);
}

const handleAddCardFormSubmit = (data) => {
  addNewCard(data);
  addCardPopup.close();
}

const  handleProfileFormSubmit = (data) => {
  userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
  editProfilePopup.close();
}

const renderCard = (item, container) => {
  const card = createCardElement(item);
  container.append(card);
}

const section = new Section({
  items: initialCards,
  renderer: renderCard
}, '.elements-list');


const previewImagePopup = new PopupWithImage('.popup_type_image');

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile',handleProfileFormSubmit);

const addCardPopup = new PopupWithForm('.popup_type_add-card',handleAddCardFormSubmit);

const userInfo = new UserInfo({ profileNameSelector: '.profile__title', profileAboutSelector: '.profile__subtitle' });

section.renderItems();

previewImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const { userName, userAbout } = userInfo.getUserInfo();
  nameInput.value = userName;
  aboutInput.value = userAbout;
  editProfilePopup.open()
  popupProfileFormValidator.resetValidation();
});

buttonAddCard.addEventListener('click', () => {
  addCardPopup.open();
  popupAddCardFormValidator.resetValidation();
});




