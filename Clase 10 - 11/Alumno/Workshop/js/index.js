//Carga inicial para pruebas

/*var student = [
  {
    firstName: 'Javier',
    dni: 34567829
  },
  {
    firstName: 'Pablo',
    dni: 34556829
  }
]
var strStudentList = JSON.stringify(student)

localStorage.setItem('studentList', strStudentList)*/

//var students = JSON.parse(studentList)
document.getElementById('addStudentButton').disabled = true
document.getElementById('deleteStudentButton').disabled = true
var inputName = document.getElementById('firstName')
var inputDni = document.getElementById('dni')
var addButton = document.getElementById('addStudentButton')
var deleteButton = document.getElementById('deleteStudentButton')
var deleteDni = document.getElementById('deleteDni')
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
    var liStudent = createStudentLi(student.firstName, student.dni)
    listContainer.appendChild(liStudent)
  }
}

function createStudentLi (firstName, dni) {
  var li = document.createElement('li')
  li.className = 'list-group-item '
  li.id = dni
  li.innerHTML = '<h2>' + firstName + '</h2><h4>DNI: ' + dni + '</h4>'
  return li
}

inputName.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
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
      textErrorNodeName.innerHTML = 'Debe completar el nombre y apellido'

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

inputDni.onblur = function (event) {
  document.getElementById('deleteDni').disabled = true
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
        var dni = student.dni
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
searchDni = function (id) {
  document.getElementById('mainList')
  var dniHit = document.getElementById(id)
  if (dniHit) {
    var dniHited = dniHit.id
    return dniHited
  }
}
deleteDni.onblur = function (event) {
  document.getElementById('firstName').disabled = true
  document.getElementById('dni').disabled = true
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

function validateAllFields () {
  var submitButton = document.getElementById('addStudentButton')
  var validFields = document.getElementsByClassName('is-valid')
  if (validFields && validFields.length === 2) {
    submitButton.disabled = false
  } else {
    submitButton.disabled = true
  }
}

addButton.onclick = function (event) {
  var firstName = valueName
  var dni = valueDni
  parsedStudentsList.push({ firstName, dni })
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

function resetAddFields () {
  document.getElementById('deleteDni').disabled = false
  var firstNameClass = document.getElementById('firstName')
  var dniClass = document.getElementById('dni')
  document.getElementById('addStudentButton').disabled = true
  firstNameClass.classList.remove('is-valid')
  dniClass.classList.remove('is-valid')
  firstNameClass.value = ''
  dniClass.value = ''
}

deleteButton.onclick = function (event) {
  var indexDni = -1
  for (var i = 0; i < parsedStudentsList.length; i++) {
    var student = parsedStudentsList[i]
    if (student.dni === dniHit) {
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
function deleteStudent (dni) {
  var dniToDelete = parseInt(dni)
  var listContainer = document.getElementById('mainList')
  var studentNode = document.getElementById(dniToDelete)
  listContainer.removeChild(studentNode)
}
function resetDelField () {
  document.getElementById('firstName').disabled = false
  document.getElementById('dni').disabled = false
  var dniClass = document.getElementById('deleteDni')
  document.getElementById('deleteStudentButton').disabled = true
  dniClass.classList.remove('is-valid')
  dniClass.value = ''
}
