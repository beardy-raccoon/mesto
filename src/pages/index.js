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

api.getProfile()
  .then(res => {
    userInfo.setUserInfo({ userName: res.name, userAbout: res.about });
    userInfo.setUserAvatar({ userAvatar: res.avatar });
    userId = res._id
  })

const getCardElement = (data) => {
  const cardElement = createCardElement({
    name: data.name,
    link: data.link,
    likes: data.likes,
    id: data._id,
    userId: userId,
    ownerId: data.owner._id
  });
  return cardElement
}

api.getInitialCards()
  .then(initialCards => {
    initialCards.forEach(data => {
      section.addItem(getCardElement(data));
    });
  })

popupAddCardFormValidator.enableValidation();
popupProfileFormValidator.enableValidation();
popupSetAvatarFormValidator.enableValidation();

const createCardElement = (data) => {
  const card = new Card(data, '#element-template', () => {
    previewImagePopup.open({ name: data.name, link: data.link })
  }, (id) => {
    deleteCardPopup.changeBtnText('Да');
    deleteCardPopup.open();
    deleteCardPopup.handleConfirmDeleteCard(() => {
      deleteCardPopup.changeBtnText('Удаление');
      api.deleteCard(id)
        .then(() => {
          card.handleDeleteCard();
          deleteCardPopup.close();
        })
        .finally(() => deleteCardPopup.changeBtnText('Готово'));
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
  addCardPopup.changeBtnText('Сохранение');
  api.addCard(data['card-name'], data['card-link'])
    .then(res => {
      section.addNewItem(getCardElement(res));
    })
    .finally(() => addCardPopup.changeBtnText('Готово'));
}

const handleAddCardFormSubmit = (data) => {
  addNewCard(data);
  addCardPopup.close();
}

const handleProfileFormSubmit = (data) => {
  editProfilePopup.changeBtnText('Сохранение...');
  api.editProfile(data)
    .then(() => {
      userInfo.setUserInfo({ userName: data.name, userAbout: data.about });
      editProfilePopup.close();
    })
    .finally(() => editProfilePopup.changeBtnText('Готово'));
}

const handleSetAvatarFormSubmit = (data) => {
  setAvatarPopup.changeBtnText('Сохранение...');
  api.editProfileAvatar(data)
    .then(() => {
      userInfo.setUserAvatar({ userAvatar: data.avatarlink });
      setAvatarPopup.close();
    })
    .finally(() => setAvatarPopup.changeBtnText('Готово'));
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
  editProfilePopup.changeBtnText('Сохранить');
  editProfilePopup.open();
});

buttonAddCard.addEventListener('click', () => {
  popupAddCardFormValidator.resetValidation();
  addCardPopup.changeBtnText('Создать');
  addCardPopup.open();
});

buttonSetAvatar.addEventListener('click', () => {
  popupSetAvatarFormValidator.resetValidation();
  setAvatarPopup.changeBtnText('Сохранить');
  setAvatarPopup.open();
});





