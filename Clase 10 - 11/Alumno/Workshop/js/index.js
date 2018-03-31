//Carga inicial para pruebas

// var student = [
//   {
//     firstName: 'Javier',
//     lastName: 'Perez',
//     dni: 34567829,
//     email: 'javi@gmail.com'
//   },
//   {
//     firstName: 'Pablo',
//     lastName: 'Perez',
//     dni: 34556829,
//     email: 'amarilla@hotmail.com'
//   }
// ]
// var strStudentList = JSON.stringify(student)

// localStorage.setItem('studentList', strStudentList)

//Defino variables locales, deshabilito los botones, cargo los datos del LocalStorage, y los muestro

document.getElementById('addStudentButton').disabled = true
document.getElementById('deleteStudentButton').disabled = true
document.getElementById('searchStudentButton').disabled = true
var inputName = document.getElementById('firstName')
var inputEmail = document.getElementById('email')
var inputLastName = document.getElementById('lastName')
var inputDni = document.getElementById('dni')
var addButton = document.getElementById('addStudentButton')
var deleteButton = document.getElementById('deleteStudentButton')
var deleteDni = document.getElementById('deleteDni')
var searchName = document.getElementById('searchText')
var searchButton = document.getElementById('searchStudentButton')
addStudentsFromLocalStorage()

function addStudentsFromLocalStorage () {
  var localStudentsList = localStorage.getItem('studentList')
  if (localStudentsList) {
    parsedStudentsList = JSON.parse(localStudentsList)
  } else {
    parsedStudentsList = []
  }
  showStudents()
}

function showStudents () {
  var student
  var listContainer = document.getElementById('mainList')
  for (var i = 0; i < parsedStudentsList.length; i++) {
    student = parsedStudentsList[i]
    var liStudent = createStudentLi(
      student.firstName,
      student.lastName,
      student.dni,
      student.email
    )
    listContainer.appendChild(liStudent)
  }
}

function createStudentLi (firstName, lastName, dni, email) {
  var li = document.createElement('li')
  li.className = 'list-group-item '
  li.id = dni
  li.innerHTML =
    '<h2>' +
    firstName +
    '</h2><h3>' +
    lastName +
    '</h3><h4>DNI: ' +
    dni +
    '</h4>' +
    '<h5>' +
    email +
    '</h5>'
  return li
}

// Campo Nombre

inputName.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
  document.getElementById('searchText').disabled = true
  var inputName = document.getElementById('firstName')
  var inputNodeName = event.target
  valueName = inputNodeName.value
  var parsedValue = parseInt(valueName)
  var parentTextInputNodeName = inputNodeName.parentElement
  var textErrorNodeName = document.getElementById('textErrorName')
  if (textErrorNodeName) {
    parentTextInputNodeName.removeChild(textErrorNodeName)
  }
  if (isNaN(parsedValue)) {
    if (valueName) {
      inputName.classList.remove('is-invalid')
      inputName.classList.add('is-valid')
    } else {
      inputName.classList.remove('is-valid')
      inputName.classList.add('is-invalid')
      textErrorNodeName = document.createElement('span')
      textErrorNodeName.id = 'textErrorName'
      textErrorNodeName.innerHTML = 'Debe completar el nombre'
      parentTextInputNodeName.appendChild(textErrorNodeName)
    }
  } else {
    inputName.classList.remove('is-valid')
    inputName.classList.add('is-invalid')
    textErrorNodeName = document.createElement('span')
    textErrorNodeName.id = 'textErrorName'
    textErrorNodeName.innerHTML = 'Error al ingresar'
    parentTextInputNodeName.appendChild(textErrorNodeName)
  }
  validateAllFields()
}

// Campo Apellido

inputLastName.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
  document.getElementById('searchText').disabled = true
  var inputLastName = document.getElementById('lastName')
  var inputNodeLastName = event.target
  valueLastName = inputNodeLastName.value
  var parsedValue = parseInt(valueLastName)
  var parentTextInputNodeName = inputNodeLastName.parentElement
  var textErrorNodeLastName = document.getElementById('textErrorLastName')
  if (textErrorNodeLastName) {
    parentTextInputNodeName.removeChild(textErrorNodeLastName)
  }
  if (isNaN(parsedValue)) {
    if (valueLastName) {
      inputLastName.classList.remove('is-invalid')
      inputLastName.classList.add('is-valid')
    } else {
      inputLastName.classList.remove('is-valid')
      inputLastName.classList.add('is-invalid')
      textErrorNodeLastName = document.createElement('span')
      textErrorNodeLastName.id = 'textErrorLastName'
      textErrorNodeLastName.innerHTML = 'Debe completar el apellido'
      parentTextInputNodeName.appendChild(textErrorNodeLastName)
    }
  } else {
    inputLastName.classList.remove('is-valid')
    inputLastName.classList.add('is-invalid')
    textErrorNodeLastName = document.createElement('span')
    textErrorNodeLastName.id = 'textErrorName'
    textErrorNodeLastName.innerHTML = 'Error al ingresar'
    parentTextInputNodeName.appendChild(textErrorNodeLastName)
  }
  validateAllFields()
}

// Campo DNI

inputDni.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
  document.getElementById('searchText').disabled = true
  var inputDni = document.getElementById('dni')
  var inputNodeDni = event.target
  valueDni = inputNodeDni.value
  var parentTextInputNodeDni = inputNodeDni.parentElement
  var textErrorNodeDni = document.getElementById('textErrorDni')
  var textErrorNodeDniExist = document.getElementById('textErrorDniExist')
  var parsedValue = parseInt(valueDni)
  if (textErrorNodeDni) {
    parentTextInputNodeDni.removeChild(textErrorNodeDni)
  }
  if (textErrorNodeDniExist) {
    parentTextInputNodeDni.removeChild(textErrorNodeDniExist)
  }
  if (!isNaN(parsedValue) && parsedValue > 999999) {
    if (valueDni) {
      for (var i = 0; i < parsedStudentsList.length; i++) {
        var student = parsedStudentsList[i]
        var dni = student.dni.toString()
        if (valueDni === dni) {
          inputDni.classList.remove('is-valid')
          inputDni.classList.add('is-invalid')
          textErrorNodeDniExist = document.createElement('span')
          textErrorNodeDniExist.id = 'textErrorDniExist'
          textErrorNodeDniExist.innerHTML = 'Dni existente'
          parentTextInputNodeDni.appendChild(textErrorNodeDniExist)
          break
        } else {
          inputDni.classList.remove('is-invalid')
          inputDni.classList.add('is-valid')
        }
      }
    } else {
      inputDni.classList.remove('is-valid')
      inputDni.classList.add('is-invalid')
      textErrorNodeDni = document.createElement('span')
      textErrorNodeDni.id = 'textErrorDni'
      textErrorNodeDni.innerHTML = 'Debe completar el DNI del alumno'
      parentTextInputNodeDni.appendChild(textErrorNodeDni)
    }
  } else {
    inputDni.classList.remove('is-valid')
    inputDni.classList.add('is-invalid')
    textErrorNodeDni = document.createElement('span')
    textErrorNodeDni.id = 'textErrorDni'
    textErrorNodeDni.innerHTML =
      'Debe ingresar un número de siete o mas cifras '
    parentTextInputNodeDni.appendChild(textErrorNodeDni)
  }
  validateAllFields()
}

// Campo e-mail

inputEmail.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
  document.getElementById('searchText').disabled = true
  var inputEmail = document.getElementById('email')
  var inputNodeEmail = event.target
  valueEmail = inputNodeEmail.value
  var parentTextInputNodeEmail = inputNodeEmail.parentElement
  var textErrorNodeEmail = document.getElementById('textErrorEmail')
  if (textErrorNodeEmail) {
    parentTextInputNodeEmail.removeChild(textErrorNodeEmail)
  }
  if (
    valueEmail &&
    valueEmail.indexOf('@') !== -1 &&
    valueEmail.indexOf('.') !== -1
  ) {
    inputEmail.classList.remove('is-invalid')
    inputEmail.classList.add('is-valid')
  } else {
    inputEmail.classList.remove('is-valid')
    inputEmail.classList.add('is-invalid')
    textErrorNodeEmail = document.createElement('span')
    textErrorNodeEmail.id = 'textErrorEmail'
    textErrorNodeEmail.innerHTML = 'Email invalido'
    parentTextInputNodeEmail.appendChild(textErrorNodeEmail)
  }

  validateAllFields()
}

// Campo eliminar por DNI

deleteDni.onblur = function (event) {
  document.getElementById('firstName').disabled = true
  document.getElementById('dni').disabled = true
  document.getElementById('lastName').disabled = true
  document.getElementById('email').disabled = true
  document.getElementById('searchText').disabled = true
  var deletDni = document.getElementById('deleteDni')
  var inputNodeDni = event.target
  valueDeleteDni = inputNodeDni.value
  var parentTextInputNodeDni = inputNodeDni.parentElement
  var textErrorNodeDni = document.getElementById('textErrorDni')
  var parsedValue = parseInt(valueDeleteDni)
  if (textErrorNodeDni) {
    parentTextInputNodeDni.removeChild(textErrorNodeDni)
  }
  if (!isNaN(parsedValue) && parsedValue > 999999) {
    if (searchDni(valueDeleteDni)) {
      dniHit = searchDni(valueDeleteDni)
      deletDni.classList.remove('is-invalid')
      deletDni.classList.add('is-valid')
      document.getElementById('deleteStudentButton').disabled = false
    } else {
      deletDni.classList.remove('is-valid')
      deletDni.classList.add('is-invalid')
      textErrorNodeDni = document.createElement('span')
      textErrorNodeDni.id = 'textErrorDni'
      textErrorNodeDni.innerHTML = 'Alumno inexistente'
      parentTextInputNodeDni.appendChild(textErrorNodeDni)
      document.getElementById('deleteStudentButton').disabled = true
    }
  } else {
    deletDni.classList.remove('is-valid')
    deletDni.classList.add('is-invalid')
    textErrorNodeDni = document.createElement('span')
    textErrorNodeDni.id = 'textErrorDni'
    textErrorNodeDni.innerHTML =
      'Debe ingresar un número de siete o mas cifras '

    parentTextInputNodeDni.appendChild(textErrorNodeDni)
  }
}

// Campo Buscar alumno

searchName.onblur = function (event) {
  document.getElementById('firstName').disabled = true
  document.getElementById('dni').disabled = true
  document.getElementById('lastName').disabled = true
  document.getElementById('email').disabled = true
  document.getElementById('deleteDni').disabled = true
  document.getElementById('searchText')
  var inputNodeSearch = event.target
  searchValue = inputNodeSearch.value
  var parentTextInputNodeSearch = inputNodeSearch.parentElement
  var textErrorSearch = document.getElementById('textErrorSearch')
  var parsedValue = parseInt(searchValue)
  if (textErrorSearch) {
    parentTextInputNodeSearch.removeChild(textErrorSearch)
  }
  if (isNaN(parsedValue)) {
    if (searchValue) {
      searchName.classList.remove('is-invalid')
      searchName.classList.add('is-valid')
      document.getElementById('searchStudentButton').disabled = false
    } else {
      searchName.classList.remove('is-valid')
      searchName.classList.add('is-invalid')
      textErrorSearch = document.createElement('span')
      textErrorSearch.id = 'textErrorSearch'
      textErrorSearch.innerHTML = 'Debe completar el nombre'
      parentTextInputNodeSearch.appendChild(textErrorSearch)
    }
  } else {
    searchName.classList.remove('is-valid')
    searchName.classList.add('is-invalid')
    textErrorSearch = document.createElement('span')
    textErrorSearch.id = 'textErrorSearch'
    textErrorSearch.innerHTML = 'Error al ingresar'
    parentTextInputNodeSearch.appendChild(textErrorSearch)
  }
}

// Botón Agregar alumno

addButton.onclick = function (event) {
  var firstName = valueName
  var dni = valueDni
  var lastName = valueLastName
  var email = valueEmail
  parsedStudentsList.push({ firstName, lastName, dni, email })
  var stringfiedStudents = JSON.stringify(parsedStudentsList)
  localStorage.setItem('studentsList', stringfiedStudents)
  var localStudentsList = localStorage.getItem('studentList')
  var listContainer = document.getElementById('mainList')
  while (listContainer.hasChildNodes()) {
    listContainer.removeChild(listContainer.firstChild)
  }
  showStudents()
  resetAddFields()
  var strStudentList = JSON.stringify(parsedStudentsList)
  localStorage.setItem('studentList', strStudentList)
}

// Botón Eliminar alumno

deleteButton.onclick = function (event) {
  var indexDni = -1
  for (var i = 0; i < parsedStudentsList.length; i++) {
    var student = parsedStudentsList[i]
    var dniStrg = student.dni.toString()
    if (dniStrg === dniHit) {
      indexDni = i
      parsedStudentsList.splice(indexDni, 1)
      break
    }
  }
  deleteStudent(dniHit)
  var stringfiedStudents = JSON.stringify(parsedStudentsList)
  localStorage.setItem('studentList', stringfiedStudents)

  var listContainer = document.getElementById('mainList')
  while (listContainer.hasChildNodes()) {
    listContainer.removeChild(listContainer.firstChild)
  }

  showStudents()
  resetDelField()
}

// Botón Buscar alumno

searchButton.onclick = function (event) {
  var searchListContainer = document.getElementById('searchList')
  while (searchListContainer.hasChildNodes()) {
    searchListContainer.removeChild(searchListContainer.firstChild)
  }
  var listContainer = document.getElementById('searchList')
  var index = searchStudentByName(searchValue)
  if (!flag) {
    student = parsedStudentsList[index]
    var liStudent = createStudentLi(
      student.firstName,
      student.lastName,
      student.dni,
      student.email
    )
    listContainer.appendChild(liStudent)
  }
  resetDelField()
  resetAddFields()
}

// FUNCIONES

function searchDni (id) {
  document.getElementById('mainList')
  var dniHit = document.getElementById(id)
  if (dniHit) {
    var dniHited = dniHit.id
    return dniHited
  }
}

function validateAllFields () {
  var submitButton = document.getElementById('addStudentButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 4) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

function resetAddFields () {
  document.getElementById('deleteDni').disabled = false
  var firstNameClass = document.getElementById('firstName')
  var lastNameClass = document.getElementById('lastName')
  var emailNameClass = document.getElementById('email')
  var dniClass = document.getElementById('dni')
  document.getElementById('addStudentButton').disabled = true
  firstNameClass.classList.remove('is-valid')
  lastNameClass.classList.remove('is-valid')
  emailNameClass.classList.remove('is-valid')
  dniClass.classList.remove('is-valid')
  firstNameClass.value = ''
  dniClass.value = ''
  lastNameClass.value = ''
  emailNameClass.value = ''
  document.getElementById('searchText').disabled = false
  var searchClass = document.getElementById('searchText')
  searchClass.classList.remove('is-valid')
  searchClass.value = ''
}

function deleteStudent (dni) {
  var dniToDelete = parseInt(dni)
  var listContainer = document.getElementById('mainList')
  var studentNode = document.getElementById(dniToDelete)
  listContainer.removeChild(studentNode)
}

function resetDelField () {
  document.getElementById('firstName').disabled = false
  document.getElementById('dni').disabled = false
  document.getElementById('lastName').disabled = false
  document.getElementById('email').disabled = false
  var dniClass = document.getElementById('deleteDni')
  document.getElementById('deleteStudentButton').disabled = true
  dniClass.classList.remove('is-valid')
  dniClass.value = ''
  document.getElementById('searchText').disabled = false
}

function searchStudentByName (name) {
  flag = true
  var indexHit = -1
  for (var i = 0; i < parsedStudentsList.length; i++) {
    var student = parsedStudentsList[i]
    var firstName = student.firstName.toLowerCase()
    var lastName = student.lastName.toLowerCase()
    var nameToSearch = name.toLowerCase()
    if (
      firstName.indexOf(nameToSearch) !== -1 ||
      lastName.indexOf(nameToSearch) !== -1
    ) {
      flag = false
      indexHit = i
      return indexHit
    }
  }
  if (flag) {
    var listContainer = document.getElementById('searchList')
    var h5 = document.createElement('h5')
    h5.id = 'searchError'
    h5.innerHTML = 'No hubo coincidencias en la busqueda'
    listContainer.appendChild(h5)
  }
}
