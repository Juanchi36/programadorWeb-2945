var REQUIRED_FIELD = 'Campo obligatorio'
var REQUIRED_CARACTER = 'Tiene que contener al menos un '
var ERROR_TYPE = 'Tiene que ser tipo '

var firstNameInput = document.getElementById('firstName')
var lastNameInput = document.getElementById('lastName')
var emailInput = document.getElementById('email')
var password1Input = document.getElementById('password1')
var password2Input = document.getElementById('password2')
var ageInput = document.getElementById('age')

firstNameInput.onblur = showErrorOnEmptyInput

lastNameInput.onblur = showErrorOnEmptyInput

emailInput.onblur = function (event) {
  var emailInputNode = event && event.target

  var value = emailInputNode && emailInputNode.value

  var errorText = ''

  if (!value) {
    errorText = REQUIRED_FIELD
  } else if (typeof value !== 'string') {
    errorText = ERROR_TYPE + 'String'
  } else if (value.indexOf('@') === -1) {
    errorText = REQUIRED_CARACTER + 'arroba (@)'
  } else if (value.indexOf('.') === -1) {
    errorText = REQUIRED_CARACTER + 'punto (.)'
  }

  if (!errorText) {
    showValidInput(emailInputNode)
  } else {
    showInvalidInput(emailInputNode, errorText)
  }

  validateAllFields()
}

password1Input.onblur = function (event) {
  var password1InputNode = event && event.target

  var value = password1InputNode && password1InputNode.value

  var errorText = ''

  if (!value) {
    errorText = REQUIRED_FIELD
  } else if (typeof value !== 'string') {
    errorText = REQUIRED_TYPE + 'String'
  } else if (value.length < 6) {
    errorText = 'Tiene que tener un minímo de 6 caracteres'
  }

  if (!errorText) {
    showValidInput(password1InputNode)
  } else {
    showInvalidInput(password1InputNode, errorText)
  }

  validateAllFields()
}

password2Input.onblur = function (event) {
  var password2InputNode = event && event.target

  var value = password2InputNode && password2InputNode.value

  var value2 = password1Input.value

  var errorText = ''

  if (!value) {
    errorText = REQUIRED_FIELD
  } else if (typeof value !== 'string') {
    errorText = REQUIRED_TYPE + 'String'
  } else if (value.length < 6) {
    errorText = 'Tiene que tener un minímo de 6 caracteres'
  } else if (value !== value2) {
    errorText = 'Las contraseñas no coinciden'
  }

  if (!errorText) {
    showValidInput(password2InputNode)
  } else {
    showInvalidInput(password2InputNode, errorText)
  }

  validateAllFields()
}

ageInput.onblur = function (event) {
  var ageInputNode = event && event.target

  var value = ageInputNode && ageInputNode.value

  var parsedValue = parseInt(value, 10)

  var errorText = ''

  if (!parsedValue) {
    errorText = REQUIRED_FIELD
  } else if (isNaN(parsedValue)) {
    errorText = REQUIRED_TYPE + 'Number'
  } else if (parsedValue < 18) {
    errorText = 'Debe ser mayor de 18 años'
  }

  if (!errorText) {
    showValidInput(ageInputNode)
  } else {
    showInvalidInput(ageInputNode, errorText)
  }

  validateAllFields()
}

// Función para mostrar campos requeridos

function showErrorOnEmptyInput (event) {
  var inputNode = event && event.target

  var value = inputNode && inputNode.value
  if (value) {
    showValidInput(inputNode)
  } else {
    showInvalidInput(inputNode, REQUIRED_FIELD)
  }
  validateAllFields()
}

// Función que muestra un campo como válido

function showValidInput (inputNode) {
  removeErrorText(inputNode)
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-invalid')
    inputNode.classList.add('is-valid')
  }
}

// Función que muestra un campo como inválido

function showInvalidInput (inputNode, errorText) {
  removeErrorText(inputNode)
  if (inputNode && inputNode.classList) {
    inputNode.classList.remove('is-valid')
    inputNode.classList.add('is-invalid')
  }
  if (errorText) {
    var parentNode = inputNode.parentNode

    var errorNode = document.createElement('p')
    errorNode.innerHTML = errorText
    errorNode.id = inputNode.id + 'Error'

    parentNode.appendChild(errorNode)
  }
}

function removeErrorText (inputNode) {
  var parentNode = inputNode.parentNode
  var errorNode = document.getElementById(inputNode.id + 'Error')
  errorNode && parentNode.removeChild(errorNode)
}

// Fución que valida todos los campos

function validateAllFields () {
  var submitButton = document.getElementById('submitButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 6) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}
