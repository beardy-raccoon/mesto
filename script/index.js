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

function render() {
  initialCards.forEach(function (item) {
    renderCard(item.name, item.link)
  });
}


function renderCard(cardName, imageLink) {
  newCard = elementTemplate.cloneNode(true);
  newCard.querySelector('.element__image-name').textContent = cardName;
  newCard.querySelector('.element__image').src = imageLink;
  newCard.querySelector('.element__image').alt = cardName;
  elementsList.appendChild(newCard);
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
