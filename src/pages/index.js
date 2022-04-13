import './index.css';

import {
  profileEditButton, popupProfileForm,
  nameInput, aboutInput, buttonAddCard,
  popupAddCardForm, valSet
} from '../utils/consts.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
//import { initialCards } from '../utils/initialCards.js'
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';
//import { PopupDeleteCard } from '../components/PopupDeleteCard.js';

const popupAddCardFormValidator = new FormValidator(valSet, popupAddCardForm);
const popupProfileFormValidator = new FormValidator(valSet, popupProfileForm);

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ userName: res.name, userAbout: res.about })
  })
api.getInitialCards()
  .then(initialCards => {
    initialCards.forEach(data => {
      const cardElement = createCardElement({
        name: data.name,
        link: data.link,
        likes: data.likes,
        id: data._id
      });
      //console.log('Card Object', data);
      section.addItem(cardElement);
    });
  })
popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();

const createCardElement = (data) => {
  const card = new Card(data, '#element-template', () => {
    previewImagePopup.open({ name: data.name, link: data.link })
  }, (id) => {
    //console.log('Card ID from CreateCardElement', id);
    deleteCardPopup.open();
    deleteCardPopup.switchHandleFormSubmit(() => {
      api.deleteCard(id)
        .then(res => {
          console.log('Feth res to delete', res);
          console.log(id);
          card.handleDeleteCard();
          deleteCardPopup.close()
        })
    });
  });
  const cardElement = card.createCard();
  return cardElement;
}

const addNewCard = (data) => {

  api.addCard(data['card-name'], data['card-link'])
    .then(res => {
      const cardElement = createCardElement({
        name: res.name,
        link: res.link,
        likes: res.likes,
        id: res._id
      })
      section.addItem(cardElement);
    })
}

const handleAddCardFormSubmit = (data) => {
  addNewCard(data);
  addCardPopup.close();
}

const handleProfileFormSubmit = (data) => {
  console.log(data);
  api.editProfile(data)
    .then(() => {
      userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
      editProfilePopup.close();
    })
}


const renderCard = (item) => {
  const card = createCardElement(item);
  section.addItem(card);
}

const section = new Section({
  items: [],
  renderer: renderCard
}, '.elements-list');


const previewImagePopup = new PopupWithImage('.popup_type_image');

const editProfilePopup = new PopupWithForm('.popup_type_edit-profile', handleProfileFormSubmit);

const addCardPopup = new PopupWithForm('.popup_type_add-card', handleAddCardFormSubmit);

const userInfo = new UserInfo({ profileNameSelector: '.profile__title', profileAboutSelector: '.profile__subtitle' });

const deleteCardPopup = new PopupWithForm('.popup_type_sure');

section.renderItems();

previewImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();

profileEditButton.addEventListener('click', () => {
  const { userName, userAbout } = userInfo.getUserInfo();
  nameInput.value = userName;
  aboutInput.value = userAbout;
  popupProfileFormValidator.resetValidation();
  editProfilePopup.open();
});

buttonAddCard.addEventListener('click', () => {
  popupAddCardFormValidator.resetValidation();
  addCardPopup.open();
});



