export default class Popup {
  constructor(popupSelector) {
    this._popupSelector = popupSelector;
    this._popupElement = document.querySelector(this._popupSelector);
    this._bindedHandleEscClose = this._handleEscClose.bind(this);
    this._bindedHandleMouseClose = this._handleMouseClose.bind(this);
  }
  open() {
    //this.setEventListeners();
    this._popupElement.classList.add('popup_opened');
    document.addEventListener('keydown', this._bindedHandleEscClose);
  }
  close() {
    this._popupElement.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._bindedHandleEscClose);
  }
  _handleEscClose(evt) {
    if (evt.key === 'Escape') {
      this.close();
    }
  }
  _handleMouseClose(evt) {
    if (
      evt.target.classList.contains('popup_opened') ||
      evt.target.classList.contains('popup__close-button')
    ) {
      this.close();
    }
  }
  setEventListeners() {
    this._popupElement.addEventListener('mousedown', this._bindedHandleMouseClose);
  }
}