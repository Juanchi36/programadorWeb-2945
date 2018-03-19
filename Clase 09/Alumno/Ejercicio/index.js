/*
# Crear un formulario que valide campos antes de enviar la información

- El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco.
   - Nombre: Deberá tener contenido.
   - Apellido: Deberá tener contenido.
   - Email: Deberá contener arroba, punto y contenido.

- Deberá tener un botón para enviar la información que deberá habilitarse solo si todos los campos son validos.

> Si usamos Boostrap podemos mostrar que el campo es valido agregando la clase `is-valid` y mostrar que es invalido agregando la clase `is-invalid`. Para deshabilitar el botón hay que poner en `true` la propiedad `disabled` en el botón y para habilitarlo hay que cambiarla a `false`. Ej: `document.getElementById('myButton').disabled = true`.


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

  var elementsWithIsInvalid = document.getElementsByClassName('is-valid')

  if (elementsWithIsInvalid && elementsWithIsInvalid.length === 3) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}
