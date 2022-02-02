const profiletitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup_type_image');
const popupImageLink = popupImage.querySelector('.popup__image-link');
const popupImageName = popupImage.querySelector('.popup__image-name');
const popupImageCloseButton = popupImage.querySelector('.popup__close-button');
const popupCloseButton = popup.querySelector('.popup__close-button');
const popupForm = popup.querySelector('.popup__form');
const nameInput = popup.querySelector('.popup__input_type_name');
const aboutInput = popup.querySelector('.popup__input_type_about');
const addCardButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_add-card');
const popupNewCardCloseButton = popupNewCard.querySelector('.popup__close-button');
const inputCardName = popupNewCard.querySelector('.popup__input_card_name');
const inputCardLink = popupNewCard.querySelector('.popup__input_card_link');
const createCardSubmit = popupNewCard.querySelector('.popup__form');
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
  el.querySelector('.element__delete-button').addEventListener('click', handleDeconste);
  el.querySelector('.element__like-button').addEventListener('click', handleLike);
  el.querySelector('.element__image').addEventListener('click', handleOpenImgPopup);
}

function handleDeconste(evt) {
  evt.target.closest('.element').remove();
}

function handleLike(evt) {
  evt.currentTarget.classList.toggle('element__like-button_active');
}

function handleOpenImgPopup(evt) {
  popupImage.classList.add('popup_opened');
  popupImageLink.src = evt.target.src;
  popupImageName.textContent = evt.target.alt;
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  profiletitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup();
}

function handleAddCardSubmit(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard(inputCardName.value, inputCardLink.value));
  inputCardName.value = '';
  inputCardLink.value = '';
  closePopup();
}

function handleAddCard() {
  popupNewCard.classList.add('popup_opened');
}

function openPopup() {
  nameInput.value = profiletitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupImage.classList.remove('popup_opened');
  popupNewCard.classList.remove('popup_opened');
}

render();

profileEditButton.addEventListener('click', openPopup);
popupCloseButton.addEventListener('click', closePopup);
popupForm.addEventListener('submit', handleFormSubmit);
popupImageCloseButton.addEventListener('click', closePopup);
popupNewCardCloseButton.addEventListener('click', closePopup);
addCardButton.addEventListener('click', handleAddCard);
createCardSubmit.addEventListener('submit', handleAddCardSubmit);

// Закрытие модального окна по клику вне его области
popup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
});

popupImage.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
});

popupNewCard.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
});
