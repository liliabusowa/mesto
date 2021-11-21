const popupElement = document.querySelector('.popup');
const closeButton = document.querySelector('.popup__close-button');
const openButton = document.querySelector('.profile__edit');
let nameInput = document.querySelector('.popup__field-name');
let jobInput = document.querySelector('.popup__field-description');
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