const profileTitle = document.querySelector('.profile__title');
const profileSubtitle = document.querySelector('.profile__subtitle');
const profileEditButton = document.querySelector('.profile__edit-button');
const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_type_edit-profile');
const popupImage = document.querySelector('.popup_type_image');
const popupImageLink = popupImage.querySelector('.popup__image-link');
const popupImageName = popupImage.querySelector('.popup__image-name');
const popupProfileForm = popupProfile.querySelector('.popup__form');
const popupProfileSubmitBtn = popupProfile.querySelector('.popup__submit-button')
const nameInput = popupProfile.querySelector('.popup__input_type_name');
const aboutInput = popupProfile.querySelector('.popup__input_type_about');
const buttonAddCard = document.querySelector('.profile__add-button');
const popupAddCard = document.querySelector('.popup_type_add-card');
const popupAddCardSubmitBtn = popupAddCard.querySelector('.popup__submit-button');
const inputCardName = popupAddCard.querySelector('.popup__input_card_name');
const inputCardLink = popupAddCard.querySelector('.popup__input_card_link');
const popupAddCardForm = popupAddCard.querySelector('.popup__form');
const elementTemplate = document.querySelector('#element-template').content;
const elementsList = document.querySelector('.elements-list');

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
  toggleButtonState(popupProfileForm, popupProfileSubmitBtn);
}

function openPopupAddCard() {
  openPopup(popupAddCard);
  toggleButtonState(popupAddCardForm, popupAddCardSubmitBtn);
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


