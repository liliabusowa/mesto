import Popup from './Popup.js';

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, formSubmitHandler }) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;   ///handleformsubnit
    this._formElement = this._popupElement.querySelector('.popup__form'); ///formpopup
    this._inputElements = Array.from(this._formElement.querySelectorAll('input')); ///inputlist
    this._bindedHandleFormSubmit = this._handleFormSubmit.bind(this);
    this._userNameInputElement = this._formElement.querySelector('.popup__input_type_name');
    this._userDescriptionInputElement = this._formElement.querySelector('.popup__input_type_job');
  }

  setInputValues({ userName, userDescription }) {
    this._userNameInputElement.value = userName;
    this._userDescriptionInputElement.value = userDescription;
  }
  _getInputValues() {
    const inputValues = {};
    this._inputElements.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  
  _handleFormSubmit(evt) {
    evt.preventDefault;
    const inputValues = this._getInputValues();
    this._formSubmitHandler(inputValues);
  }
  setEventListeners() {
    super.setEventListeners();
    this._popupElement.addEventListener('submit', this._bindedHandleFormSubmit);
  }
  close() {
    super.close();
    this._formElement.reset();
  }
}
