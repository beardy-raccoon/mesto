let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let aboutInput = popup.querySelector('.popup__input_type_about');



function openPopup() {
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileSubtitle.textContent;
  popup.classList.add('popup_opened');
}

function closePopup() {
  popup.classList.remove('popup_opened');

}

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileSubtitle.textContent = aboutInput.value;
  closePopup();
}

profileEditButton.addEventListener('click', openPopup);

popupCloseButton.addEventListener('click', closePopup);

popupForm.addEventListener('submit', formSubmitHandler);

// Закрытие модального окна по клику вне его области
/*popup.addEventListener('click', function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup();
  }
});*/
