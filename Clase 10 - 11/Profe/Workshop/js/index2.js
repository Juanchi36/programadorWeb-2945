// Busco el botón de agregar estudiante y lo deshabilito

var addStudentButton = document.getElementById('addStudentButton')

addStudentButton.disabled = true

// Busco el botón de eliminar estudiante y lo deshabilito

var deleteStudentButton = document.getElementById('deleteStudentButton')

deleteStudentButton.disabled = true

// VE: Busco el botón de buscar estudiante

var searchStudentButton = document.getElementById('searchStudentButton')

// Función que inicia la lista en pantalla y carga una si existe en el localStorage

function init () {
  var mainList = document.getElementById('mainList')
  var studentsList = getLocalStorageList()

  for (var i = 0; i < studentsList.length; i++) {
    var studentNode = createStudentNodeExtended(studentsList[i])
    mainList.appendChild(studentNode)
  }
}

init()

// Función que crea un nodo list-item a partir de un objeto estudiante

function createStudentNodeExtended (student) {
  var li = document.createElement('li')

  // VE: Agrego los campos extra

  li.innerHTML =
    '<h1>' +
    student.firstName +
    '</h1><h1>' +
    student.lastName +
    '</h1><h3>DNI: ' +
    student.dni +
    '</h3><p>' +
    student.email +
    '</p>'

  li.className = 'list-group-item'

  li.id = student.dni

  return li
}

// Función que valida si tengo que habilitar el botón de agregar estudiante, solo habilita si estñan todos los campos validados

function validateButtonSimple () {
  var validFields = document.getElementsByClassName('is-valid')

  // VE: Valido por 4 campos
  if (validFields.length === 4) {
    addStudentButton.disabled = false
  } else {
    addStudentButton.disabled = true
  }
}

// Agrego el evento onblur al campo nombre para validarlo

document.getElementById('firstName').onblur = function (event) {
  var firstNameNode = event.target

  if (firstNameNode.value) {
    firstNameNode.classList.remove('is-invalid')
    firstNameNode.classList.add('is-valid')
  } else {
    firstNameNode.classList.remove('is-valid')
    firstNameNode.classList.add('is-invalid')
  }

  // Cada vez que corro la validación verifico si puedo habilitar el botón de agregar
  validateButtonSimple()
}

// VE: Agrego el evento onblur al campo apellido para validarlo

document.getElementById('lastName').onblur = function (event) {
  var lastNameNode = event.target

  if (lastNameNode.value) {
    lastNameNode.classList.remove('is-invalid')
    lastNameNode.classList.add('is-valid')
  } else {
    lastNameNode.classList.remove('is-valid')
    lastNameNode.classList.add('is-invalid')
  }

  // Cada vez que corro la validación verifico si puedo habilitar el botón de agregar
  validateButtonSimple()
}

// Agrego el evento onblur al campo dni para validarlo

document.getElementById('dni').onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  var parsedDni = parseInt(value, 10)

  if (
    parsedDni &&
    !isNaN(parsedDni) &&
    parsedDni >= 0 &&
    searchIndexByDni(parsedDni) === -1
  ) {
    dniNode.classList.remove('is-invalid')
    dniNode.classList.add('is-valid')
  } else {
    dniNode.classList.remove('is-valid')
    dniNode.classList.add('is-invalid')
  }

  // Cada vez que corro la validación verifico si puedo habilitar el botón de agregar
  validateButtonSimple()
}

// VE: Agrego el evento onblur al campo email para validarlo

document.getElementById('email').onblur = function (event) {
  var emailNode = event.target

  var value = emailNode.value

  if (
    value &&
    typeof value === 'string' &&
    value.indexOf('@') !== -1 &&
    value.indexOf('.') !== -1
  ) {
    emailNode.classList.remove('is-invalid')
    emailNode.classList.add('is-valid')
  } else {
    emailNode.classList.remove('is-valid')
    emailNode.classList.add('is-invalid')
  }

  // Cada vez que corro la validación verifico si puedo habilitar el botón de agregar
  validateButtonSimple()
}

// Agrego el evento onclick para agregar un estudiante

// VE: Agrego los campos lastName e email

addStudentButton.onclick = function (event) {
  var firstNameNode = document.getElementById('firstName')
  var lastNameNode = document.getElementById('lastName')
  var dniNode = document.getElementById('dni')
  var emailNode = document.getElementById('email')

  var parsedDni = parseInt(dniNode.value, 10)

  addStudentExtended(
    firstNameNode.value,
    lastNameNode.value,
    parsedDni,
    emailNode.value
  )

  firstNameNode.classList.remove('is-valid')
  lastNameNode.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')
  emailNode.classList.remove('is-valid')

  addStudentButton.disabled = true

  firstNameNode.value = ''
  lastNameNode.value = ''
  dniNode.value = ''
  emailNode.value = ''
}

// Agrego el evento onblur al campo deleteDni para validarlo y ver si habilito el botón de eliminar

document.getElementById('deleteDni').onblur = function (event) {
  var dniNode = event.target

  var value = dniNode.value

  var parsedDni = parseInt(value, 10)

  if (searchIndexByDni(parsedDni) !== -1) {
    deleteStudentButton.disabled = false
  } else {
    deleteStudentButton.disabled = true
  }
}

// Agrego el evento onclick para buscar y eliminar un estudiante, tanto del localStorage como del DOM

deleteStudentButton.onclick = function () {
  var dniNode = document.getElementById('deleteDni')

  var value = dniNode.value

  var studentNode = document.getElementById(value)

  var mainList = document.getElementById('mainList')

  mainList.removeChild(studentNode)

  var parsedDni = parseInt(value, 10)

  var studentsList = getLocalStorageList()

  var index = searchIndexByDni(parsedDni)

  studentsList.splice(index, 1)

  setLocalStorageList(studentsList)

  deleteStudentButton.disabled = true

  dniNode.value = ''
}

// Función que busca por dni y devuelve la posición del elemento en el Array, si no lo encuentra devuelve -1

function searchIndexByDni (dni) {
  var index = -1
  var studentsList = getLocalStorageList()

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (student.dni === dni) {
      index = i
      break
    }
  }

  return index
}

// Función que me devuelve la lista del localStorage como un Array de JavaScript

function getLocalStorageList () {
  var studentsList = localStorage.getItem('studentsList')

  var parsedList = studentsList ? JSON.parse(studentsList) : []

  return parsedList
}

// Función que pisa la lista del localStorage

function setLocalStorageList (studentsList) {
  var stringList = JSON.stringify(studentsList)

  localStorage.setItem('studentsList', stringList)
}

// Función que agrega un estudiante, tanto al localStorage como al DOM

// VE: Agrego los campos lastName e email

function addStudentExtended (firstName, lastName, dni, email) {
  var mainList = document.getElementById('mainList')

  var newStudent = {
    firstName: firstName,
    lastName: lastName,
    dni: dni,
    email: email
  }

  var studentsList = getLocalStorageList()

  studentsList.push(newStudent)

  setLocalStorageList(studentsList)

  var studentNode = createStudentNodeExtended(newStudent)
  mainList.appendChild(studentNode)
}

// VE: Agrego el evento onclick para el botón de buscar por nombre

searchStudentButton.onclick = function (event) {
  var searchTextNode = document.getElementById('searchText')

  var value = searchTextNode.value

  var index = searchIndexByText(value)

  var searchList = document.getElementById('searchList')

  searchList.innerHTML = ''

  if (index !== -1) {
    var studentsList = getLocalStorageList()

    var studentNode = createStudentNodeExtended(studentsList[index])

    searchList.appendChild(studentNode)
  }
}

// VE: Función que busca por text y devuelve la posición del elemento en el Array, si no lo encuentra devuelve -1

function searchIndexByText (text) {
  var index = -1
  var studentsList = getLocalStorageList()

  for (var i = 0; i < studentsList.length; i++) {
    var student = studentsList[i]
    if (
      text &&
      typeof text === 'string' &&
      (student.firstName.toUpperCase().indexOf(text.toUpperCase()) !== -1 ||
        student.lastName.toUpperCase().indexOf(text.toUpperCase()) !== -1)
    ) {
      index = i
      break
    }
  }

  return index
}
