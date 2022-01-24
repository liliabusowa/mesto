let nameInput = document.querySelector('.popup__field_type_name');
let nameProfile = document.querySelector('.profile__name');
let jobInput = document.querySelector('.popup__field_type_description');
let jobProfile = document.querySelector('.profile__description');
const popupElement = document.querySelector('.popup');
const popupElementPicture = document.querySelector('.popup__picture'); // nash popap
const openButton = document.querySelector('.profile__edit');
const openButtonPicture = document.querySelector('.profile__button');
const closeButton = document.querySelector('.popup__close-button');
const closeButtonPicture = document.querySelector('.popup__picture__close-button');
let formElement = document.querySelector('.popup__container');


function openPopup() { //открытие попапа
    nameInput.value = nameProfile.textContent;
    jobInput.value = jobProfile.textContent;
    popupElement.classList.remove('popup_closed');
}
function openPopupPicture() { //открытие попапа
  popupElementPicture.classList.remove('popup_closed');
}
function closePopup() { //закрытие попапа
    popupElement.classList.add('popup_closed');
}
function closePopupPicture() { //закрытие попапа
  popupElementPicture.classList.add('popup_closed');
}
function savePopup(evt) { //сохранение попапа
    evt.preventDefault();
    nameProfile.textContent = nameInput.value;
    jobProfile.textContent = jobInput.value;
    closePopup();
}


closeButton.addEventListener('click', closePopup)
closeButtonPicture.addEventListener('click', closePopupPicture)
openButton.addEventListener('click', openPopup)
openButtonPicture.addEventListener('click', openPopupPicture)
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






  //vtoroy popup sohranenie


//let mestoInput = document.querySelector('.popup__field_type_mesto'); //1 stroka v popape
//let nameProfile = document.querySelector('.profile__name'); //gde berem znachenie
//let jobInput = document.querySelector('.popup__field_type_description'); //2 stroka v popape
//let jobProfile = document.querySelector('.profile__description'); //gde berem znachenie


function savePopupPicture(evt) { //сохранение попапа
  evt.preventDefault();
  //nameProfile.textContent = nameInput.value;
  //jobProfile.textContent = jobInput.value;
  closePopupPicture();
}

let formElementPicture = document.querySelector('.popup__picture__container');
formElementPicture.addEventListener('submit', savePopupPicture);