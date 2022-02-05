const enableValidation = {
    formSelector: '.popup__form',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save-button',
    inactiveButtonClass: 'popup__save-button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
};

function validation(data) {
    const forms = [...document.querySelectorAll(data.formSelector)]
    forms.forEach(form => addFormListering(form, data))
}
function addFormListering(form, config) {
    console.log(form, config)
    form.addEventListener('submit', handlerSubmit)//vizov otmeni otpravki formi
    form.addEventListener('input', () => setSubmitButtonState(form, config))
    const inputs = [...form.querySelectorAll(config.inputSelector)]
    inputs.forEach(input => input.addEventListener('input', () => handleField(form, input, config)))
    setSubmitButtonState(form, config)
}

function handlerSubmit(evt) {
    evt.preventDefault()
}

function handleField(form, input, config) {
    if (input.validity.valid) {
        hideError(form, input, config)
    } else {
        showError(form, input, config)
    }
}

function showError(form, input, config) {
    input.classList.add(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.add(config.errorClass)
    errorElement.textContent = input.validationMessage
}

function hideError(form, input, config) {
    input.classList.remove(config.inputErrorClass)
    const errorElement = form.querySelector(`#${input.id}-error`)
    errorElement.classList.remove(config.errorClass)
    errorElement.textContent = '';
}

function setSubmitButtonState(form, config) {
    const buttons = [...form.querySelectorAll(config.submitButtonSelector)]   
    buttons.forEach(button => {
        button.disabled = !form.checkValidity()
        button.classList.toggle(config.inactiveButtonClass, !form.checkValidity())
    })
}
validation(enableValidation)