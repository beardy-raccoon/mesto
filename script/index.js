let profileEditButton = document.querySelector('.profile__edit-button');
let popupCloseButton = document.querySelector('.popup__close-button')
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');

function openPopup () {
  popup.classList.add('popup_opened');
  popupForm.classList.add('popup__form_opened');
}

function closePopup () {
  popup.classList.remove('popup_opened');
  popupForm.classList.remove('popup__form_opened');
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);
