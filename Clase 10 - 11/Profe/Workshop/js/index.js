// Busco el botón de agregar estudiante y lo deshabilito

var addStudentButton = document.getElementById('addStudentButton')

addStudentButton.disabled = true

// Busco el botón de eliminar estudiante y lo deshabilito

var deleteStudentButton = document.getElementById('deleteStudentButton')

deleteStudentButton.disabled = true

// Función que inicia la lista en pantalla y carga una si existe en el localStorage

function init () {
  var mainList = document.getElementById('mainList')
  var studentsList = getLocalStorageList()

  for (var i = 0; i < studentsList.length; i++) {
    var studentNode = createStudentNodeSimple(studentsList[i])
    mainList.appendChild(studentNode)
  }
}

init()

// Función que crea un nodo list-item a partir de un objeto estudiante

function createStudentNodeSimple (student) {
  var li = document.createElement('li')

  li.innerHTML =
    '<h1>' + student.firstName + '<h1><h3>DNI: ' + student.dni + '<h3>'

  li.className = 'list-group-item'

  li.id = student.dni

  return li
}

// Función que valida si tengo que habilitar el botón de agregar estudiante, solo habilita si estñan todos los campos validados

function validateButtonSimple () {
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields.length === 2) {
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

// Agrego el evento onclick para agregar un estudiante

addStudentButton.onclick = function (event) {
  var firstNameNode = document.getElementById('firstName')
  var dniNode = document.getElementById('dni')
  var parsedDni = parseInt(dniNode.value, 10)

  addStudentSimple(firstNameNode.value, parsedDni)

  firstNameNode.classList.remove('is-valid')
  dniNode.classList.remove('is-valid')

  addStudentButton.disabled = true

  firstNameNode.value = ''
  dniNode.value = ''
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

  var studenNode = document.getElementById(value)

  var mainList = document.getElementById('mainList')

  mainList.removeChild(studenNode)

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

function addStudentSimple (firstName, dni) {
  var mainList = document.getElementById('mainList')

  var newStudent = {
    firstName: firstName,
    dni: dni
  }

  var studentsList = getLocalStorageList()

  studentsList.push(newStudent)

  setLocalStorageList(studentsList)

  var studentNode = createStudentNodeSimple(newStudent)
  mainList.appendChild(studentNode)
}
