const profiletitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');
//const closeButtons = document.querySelectorAll('.popup__close-button');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupImage = document.querySelector('.popup_type_image');
const popupImageLink = popupImage.querySelector('.popup__image-link');
const popupImageName = popupImage.querySelector('.popup__image-name');
//const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
//const popupProfileCloseButton = popupProfile.querySelector('.popup__close-button');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const aboutInput = popupProfile.querySelector('.popup__input_type_about');
const addCardButton = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
//const popupNewCardCloseButton = popupAddCard.querySelector('.popup__close-button');
const inputCardName = popupAddCard.querySelector('.popup__input_card_name');
const inputCardLink = popupAddCard.querySelector('.popup__input_card_link');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const elementTemplate = document.querySelector('#element-template').content;
const elementsList = document.querySelector('.elements-list');
const initialCards = [
  {
    name: 'Саратов',
    link: './images/saratov.jpeg'
  },
  {
    name: 'Гудаури',
    link: './images/gudauri.jpeg'
  },
  {
    name: 'Венеция',
    link: './images/venice.jpeg'
  },
  {
    name: 'Куршская коса',
    link: './images/kosa.jpeg'
  },
  {
    name: 'Мурманск',
    link: './images/murmansk.jpg'
  },
  {
    name: 'Платформа Псырцха',
    link: './images/psircha.jpeg'
  },
];

function createCard(cardName, imageLink) {
  const newCard = elementTemplate.cloneNode(true);
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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

/*function closePopups() {
popups.forEach((popup) => {
  closePopup(popup);
});
}

closeButtons.forEach((button) => {
  button.addEventListener('click', closePopups)
});*/

function openPopupProfile() {
  nameInput.value = profiletitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  openPopup(popupProfile);
}

function openPopupAddCard() {
  openPopup(popupAddCard);
}

function openPopupImage(evt) {
  openPopup(popupImage);
  popupImageLink.src = evt.target.src;
  popupImageName.textContent = evt.target.alt;
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profiletitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup(popupProfile);
}

function handleAddCardFormSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(inputCardName.value, inputCardLink.value));
  inputCardName.value = '';
  inputCardLink.value = '';
  closePopup(popupAddCard);
}

render();

profileEditButton.addEventListener('click', openPopupProfile);
//popupProfileCloseButton.addEventListener('click', closePopup);
popupProfileForm.addEventListener('submit', handleProfileFormSubmit);
//popupImageCloseButton.addEventListener('click', closePopup);
//popupNewCardCloseButton.addEventListener('click', closePopup);
addCardButton.addEventListener('click', openPopupAddCard);
popupAddCardForm.addEventListener('submit', handleAddCardFormSubmit);

//Закрытие модального окна по клику вне его области объединенное с кнопкой закрытия
popups.forEach((popup) => {
  popup.addEventListener('mousedown', function (evt) {
    if (evt.target === evt.currentTarget) {
      closePopup(evt.target);
    } else if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup)
    }
  })
});
/*
popupImage.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
});

popupAddCard.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
});*/
