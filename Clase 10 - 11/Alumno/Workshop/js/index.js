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
var inputName = document.getElementById('firstName')
var inputDni = document.getElementById('dni')
var addButton = document.getElementById('addStudentButton')
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
      textErrorNodeName.innerHTML =
        'Debe completar el nombre y apellido del alumno'

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
  var inputDni = document.getElementById('dni')
  var inputNodeDni = event.target
  valueDni = inputNodeDni.value
  var parentTextInputNodeDni = inputNodeDni.parentElement
  var textErrorNodeDni = document.getElementById('textErrorDni')
  var parsedValue = parseInt(valueDni)
  if (textErrorNodeDni) {
    parentTextInputNodeDni.removeChild(textErrorNodeDni)
  }
  if (!isNaN(parsedValue) && parsedValue > 999999) {
    if (valueDni) {
      inputDni.classList.remove('is-invalid')
      inputDni.classList.add('is-valid')
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
      'El Dni debe ser un número de siete cifras o mas'

    parentTextInputNodeDni.appendChild(textErrorNodeDni)
  }
  validateAllFields()
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
  console.log(parsedStudentsList)
  var stringfiedStudents = JSON.stringify(parsedStudentsList)
  localStorage.setItem('studentsList', stringfiedStudents)
  var localStudentsList = localStorage.getItem('studentList')
  var listContainer = document.getElementById('mainList')
  while (listContainer.hasChildNodes()) {
    listContainer.removeChild(listContainer.firstChild)
  }
  showStudents()
  resetFields()
  var strStudentList = JSON.stringify(parsedStudentsList)
  localStorage.setItem('studentList', strStudentList)
}

function resetFields () {
  var firstNameClass = document.getElementById('firstName')
  var dniClass = document.getElementById('dni')
  document.getElementById('addStudentButton').disabled = true
  firstNameClass.classList.remove('is-valid')
  dniClass.classList.remove('is-valid')
  firstNameClass.value = ''
  dniClass.value = ''
}
