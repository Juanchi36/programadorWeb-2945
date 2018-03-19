/*
# Usar el formulario del ejercicio anterior y agregarle la siguientes validaciónes

- El formulario deberá contar también con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
   - Contraseña1: Deberá tener un mínimo de 6 caracteres y contenido.
   - Contraseña2: Deberá ser igual a contraseña1.
   - Edad: Deberá ser mayor a 18 años y ser un número.

Si algún campo tiene un error cuando el usuario pierde foco tendrá que agregar un mensaje de error debajo del campo.

> Si existe un error en el onblur agregar un mensaje de error usando el `appendChild`, en caso contrario sacarlo con un `removeChild`.
*/
var firstNameInput = document.getElementById('firstNameInput')

firstNameInput.onblur = function (event) {
  var firstNameInputNode = event.target
  var value = firstNameInput.value
  var parentFirstNameInputNode = firstNameInput.parentElement
  var firstNameErrorNode = document.getElementById('firstNameError')

  if (firstNameErrorNode) {
    parentFirstNameInputNode.removeChild(firstNameErrorNode)
  }
  if (value) {
    firstNameInputNode.classList.remove('is-invalid')
    firstNameInputNode.classList.add('is-valid')
  } else {
    firstNameInputNode.classList.remove('is-valid')
    firstNameInputNode.classList.add('is-invalid')
    firstNameErrorNode = document.createElement('span')
    firstNameErrorNode.id = 'firstNameError'
    firstNameErrorNode.innerHTML = 'Debe completar el nombre'
    parentFirstNameInputNode.appendChild(firstNameErrorNode)
  }
}
var lastNameInput = document.getElementById('lastNameInput')

lastNameInput.onblur = function (event) {
  var lastNameInputNode = event.target
  var value = lastNameInput.value
  var parentLastNameInputNode = firstNameInput.parentElement
  var lastNameErrorNode = document.getElementById('lastNameError')

  if (lastNameErrorNode) {
    parentLastNameInputNode.removeChild(lastNameErrorNode)
  }
  if (value) {
    lastNameInputNode.classList.remove('is-invalid')
    lastNameInputNode.classList.add('is-valid')
  } else {
    lastNameInputNode.classList.remove('is-valid')
    lastNameInputNode.classList.add('is-invalid')
    lastNameErrorNode = document.createElement('span')
    lastNameErrorNode.id = 'lastNameError'
    lastNameErrorNode.innerHTML = 'Debe completar el apellido'
    parentLastNameInputNode.appendChild(lastNameErrorNode)
  }
}
var emailInput = document.getElementById('emailInput')

emailInput.onblur = function (event) {
  var emailInputNode = event.target

  var value = emailInputNode.value

  var parentEmailInputNode = emailInputNode.parentElement

  var emailErrorNode = document.getElementById('emailError')

  if (emailErrorNode) {
    parentEmailInputNode.removeChild(emailErrorNode)
  }
  console.log(value)
  if (
    value &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1 &&
    value.length >= 6
  ) {
    emailInputNode.classList.remove('is-invalid')
    emailInputNode.classList.add('is-valid')
  } else {
    emailInputNode.classList.remove('is-valid')
    emailInputNode.classList.add('is-invalid')

    emailErrorNode = document.createElement('span')

    emailErrorNode.id = 'emailError'
    emailErrorNode.innerHTML = 'El email no es válido'

    parentEmailInputNode.appendChild(emailErrorNode)
  }
  validateAllFields()
}

function validateAllFields () {
  var submitButton = document.getElementById('submitButton')

  var elementsWithIsInvalid = document.getElementsByClassName('is-invalid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 0) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}
