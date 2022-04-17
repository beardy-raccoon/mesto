import './index.css';

import {
  profileEditButton, nameInput,
  aboutInput, buttonAddCard,
  valSet, buttonSetAvatar
} from '../utils/consts.js';

import { Card } from '../components/Card.js';
import { FormValidator } from '../components/FormValidator.js';
import { Section } from '../components/Section.js';
import { PopupWithImage } from '../components/PopupWithImage.js';
import { PopupWithForm } from '../components/PopupWithForm.js';
import { UserInfo } from '../components/UserInfo.js';
import { api } from '../components/Api.js';
import { DeleteCardPopup } from '../components/DeleteCardPopup.js';

const popupAddCardFormValidator = new FormValidator(valSet, '.popup_type_add-card');
const popupProfileFormValidator = new FormValidator(valSet, '.popup_type_edit-profile');
const popupSetAvatarFormValidator = new FormValidator(valSet, '.popup_type_set-avatar');

let userId

const getCardElement = (item) => {
  const cardElement = createCardElement({
    name: item.name,
    link: item.link,
    likes: item.likes,
    id: item._id,
    userId: userId,
    ownerId: item.owner._id
  });
  return cardElement
}

Promise.all([api.getProfile(), api.getInitialCards()])
  .then(([userData, initialCards]) => {
    userInfo.setUserInfo({ userName: userData.name, userAbout: userData.about });
    userInfo.setUserAvatar({ userAvatar: userData.avatar });
    userId = userData._id;
    // getInitialCards это возвращенный res сервера в виде массива объектов
    initialCards.forEach((item) => {
      section.addItem(getCardElement(item));
    });
  })
  .catch(console.log)

popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();
popupSetAvatarFormValidator.enableValidation();

const createCardElement = (data) => {
  const card = new Card(data, '#element-template', () => {
    previewImagePopup.open({ name: data.name, link: data.link })
  }, (id) => {
    deleteCardPopup.open();
    deleteCardPopup.handleConfirmDeleteCard(() => {
      deleteCardPopup.changeBtnText('Удаление');
      api.deleteCard(id)
        .then(() => {
          card.handleDeleteCard();
          deleteCardPopup.changeBtnText('Готово');
          deleteCardPopup.close();
        })
        .catch(console.log)
        .finally(() => deleteCardPopup.changeBtnText('Да'));
    });
  }, (id) => {
    if (card.isLiked()) {
      api.deleteLike(id)
        .then(res => {
          card.displayLikes(res.likes);
        });
    } else {
      api.setLike(id)
        .then(res => {
          card.displayLikes(res.likes);
        });
    }
  });
  const cardElement = card.createCard();
  return cardElement;
}

const addNewCard = (data) => {
  addCardPopup.changeBtnText('Сохранение...');
  api.addCard(data['card-name'], data['card-link'])
    .then(res => {
      section.addNewItem(getCardElement(res));
      addCardPopup.changeBtnText('Готово');
      addCardPopup.close();
    })
    .catch(console.log)
    .finally(() => addCardPopup.changeBtnText('Создать'));
}

const handleAddCardFormSubmit = (data) => {
  addNewCard(data);
}

const handleProfileFormSubmit = (data) => {
  editProfilePopup.changeBtnText('Сохранение...');
  api.editProfile(data)
    .then(() => {
      userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
      editProfilePopup.changeBtnText('Готово');
      editProfilePopup.close();
    })
    .catch(console.log)
    .finally(() => editProfilePopup.changeBtnText('Сохранить'));
}

const handleSetAvatarFormSubmit = (data) => {
  setAvatarPopup.changeBtnText('Сохранение...');
  api.editProfileAvatar(data)
    .then(() => {
      userInfo.setUserAvatar({ userAvatar: data.avatarlink });
      setAvatarPopup.changeBtnText('Готово');
      setAvatarPopup.close();
    })
    .catch(console.log)
    .finally(() => setAvatarPopup.changeBtnText('Сохранить'));
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

const userInfo = new UserInfo({ profileNameSelector: '.profile__title', profileAboutSelector: '.profile__subtitle', profileAvatarSelector: '.profile__avatar-edit-button' });

const deleteCardPopup = new DeleteCardPopup('.popup_type_rYouSure');

const setAvatarPopup = new PopupWithForm('.popup_type_set-avatar', handleSetAvatarFormSubmit);

section.renderItems();

previewImagePopup.setEventListeners();
editProfilePopup.setEventListeners();
addCardPopup.setEventListeners();
deleteCardPopup.setEventListeners();
setAvatarPopup.setEventListeners();

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

buttonSetAvatar.addEventListener('click', () => {
  popupSetAvatarFormValidator.resetValidation();
  setAvatarPopup.open();
});





