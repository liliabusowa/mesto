const popupElement = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const openButton = document.querySelector('.profile__edit');
let nameInput = document.querySelector('.popup__field_type_name');
let jobInput = document.querySelector('.popup__field_type_description');
let nameProfile = document.querySelector('.profile__name');
let jobProfile = document.querySelector('.profile__description');
let formElement = document.querySelector('.popup__container');

function openPopup() { //открытие попапа
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popupElement.classList.remove('popup_closed');
}

function closePopup() { //закрытие попапа
    popupElement.classList.add('popup_closed');
}

function savePopup(evt) { //сохранение попапа
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}

openButton.addEventListener('click', openPopup)
closeButton.addEventListener('click', closePopup)
formElement.addEventListener('submit', savePopup); 


const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];

  const list = document.querySelector('.elements');

  const createHTMLString = (item) => {
      return `<article class="element">
      <button type="button" class="element__trash"></button>
      <img 
        class="element__photo" 
        src="${item.link}" 
        alt="Карачаевск">
            <div class="element__description">
                <h2 class="element__mesto">${item.name}</h2>
                <button type="button" class="element__like element__like_active"></button>
            </div>
      </article>`;
  }

  const result = initialCards.map((item) => {
      return createHTMLString(item);
  });

  list.insertAdjacentHTML('afterbegin', result.join(''));