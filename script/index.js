let profileTitle = document.querySelector('.profile__title');
let profileSubtitle = document.querySelector('.profile__subtitle');
let profileEditButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupCloseButton = popup.querySelector('.popup__close-button');
let popupForm = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let aboutInput = popup.querySelector('.popup__input_type_about');

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
    link: './images/murmansk.jpeg'
  },
  {
    name: 'Платформа Псырцха',
    link: './images/psircha.jpeg'
  },
];

function renderCard(cardName, imageLink) {
  const newCard = elementTemplate.cloneNode(true);
  const elementImage = newCard.querySelector('.element__image');
  elementImage.src = imageLink;
  elementImage.alt = cardName;
  newCard.querySelector('.element__image-name').textContent = cardName;
  addListeners(newCard);
  elementsList.appendChild(newCard);
}

function addListeners(el) {
  el.querySelector('.element__delete-button').addEventListener('click', handleDelete);
  el.querySelector('.element__like-button').addEventListener('click', handleLike);
}

function handleDelete(evt) {
  evt.target.closest('.element').remove();
}

function handleLike(evt) {
  evt.currentTarget.classList.toggle('element__like-button_active');
}

function render() {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link)
  });
}

render();

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
/*popup.addEventListener('click', function (e) {
  if (e.target === e.currentTarget) {
    closePopup();
  }
});*/
