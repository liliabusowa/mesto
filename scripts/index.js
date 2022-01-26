let nameInput = document.querySelector('.popup__field_type_name');
let nameProfile = document.querySelector('.profile__name');
let jobInput = document.querySelector('.popup__field_type_description');
let jobProfile = document.querySelector('.profile__description');
const popupElement = document.querySelector('.popup');
const openButton = document.querySelector('.profile__edit');
const closeButton = document.querySelector('.popup__close-button');
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

closeButton.addEventListener('click', closePopup)
openButton.addEventListener('click', openPopup)
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



const popupElementPicture = document.querySelector('.popup__picture'); // nash popap
const openButtonPicture = document.querySelector('.profile__button');
const closeButtonPicture = document.querySelector('.popup__picture__close-button');
let formElementPicture = document.querySelector('.popup__picture__container');

function openPopupPicture() { //открытие попапа
  popupElementPicture.classList.remove('popup_closed');
}
function closePopupPicture() { //закрытие попапа
  popupElementPicture.classList.add('popup_closed');
}

closeButtonPicture.addEventListener('click', closePopupPicture)
openButtonPicture.addEventListener('click', openPopupPicture)


const list = document.querySelector('.elements');

const template = document.querySelector('.template');


const createTaskDomNode = (item) => {
  const taskTemplate = template.content.querySelector('.element').cloneNode(true);
  taskTemplate.querySelector('.element__mesto').textContent = item.name;
  taskTemplate.querySelector('.element__photo').src = item.link;

  const deleteButton = taskTemplate.querySelector('.element__trash');
  deleteButton.addEventListener('click', () => {
    taskTemplate.remove();
  });

  
  const likeButton = taskTemplate.querySelector('.element__like');
  
  function clickLike() {
    if (likeButton.classList.contains('element__like_active') == false)
      likeButton.classList.add('element__like_active');
    else
      likeButton.classList.remove('element__like_active');
  }
  likeButton.addEventListener('click', clickLike)
  
  return taskTemplate;
}



const result = initialCards.map((item) => {
    return createTaskDomNode(item);
});

let mestoInput = document.querySelector('.popup__field_type_mesto'); //1 stroka v popape
let linkInput = document.querySelector('.popup__field_type_link'); //2 stroka v popape

const submitFormHendler = (evt) => {
    evt.preventDefault();
    const mestoInputValue = mestoInput.value;
    const linkInputValue = linkInput.value;
    const taskString = createTaskDomNode({name: mestoInputValue, link: linkInputValue});
    closePopupPicture();
    list.prepend(taskString);
    mestoInput.value = 'Название';
    linkInput.value = 'Ссылка на картинку';
}

formElementPicture.addEventListener('submit', submitFormHendler);  

list.append(...result);

