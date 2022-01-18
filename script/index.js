let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');

function openPopup() {
  popup.classList.add('popup_opened');
  popupForm.classList.add('popup__form_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');
  popupForm.classList.remove('popup__form_opened');
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__name');
let aboutInput = document.querySelector('.popup__about');
let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  popup.classList.remove('popup_opened');
  popupForm.classList.remove('popup__form_opened');
}

formElement.addEventListener('submit', formSubmitHandler);
