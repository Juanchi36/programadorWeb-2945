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
var inputName = document.getElementById('firstName')
var inputDni = document.getElementById('dni')
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
  var value = inputNodeName.value
  var parentTextInputNode = inputNodeName.parentElement
  var textErrorNodeName = document.getElementById('textError')
  if (textErrorNodeName) {
    parentTextInputNodeName.removeChild(textErrorNodeName)
  }
  if (value) {
    inputName.classList.remove('is-invalid')
    inputName.classList.add('is-valid')
  } else {
    inputName.classList.remove('is-valid')
    inputName.classList.add('is-invalid')
    textErrorNodeName = document.createElement('span')
    textErrorNodeName.id = 'textError'
    textErrorNodeName.innerHTML = 'Debe completar este campo'

    parentTextInputNode.appendChild(textErrorNodeName)
  }
}

inputDni.onblur = function (event) {
  var inputDni = document.getElementById('dni')
  var inputNodeDni = event.target
  var value = inputNodeDni.value
  var parentTextInputNodeDni = inputNodeDni.parentElement
  var textErrorNodeDni = document.getElementById('textError')
  if (textErrorNodeDni) {
    parentTextInputNodeDni.removeChild(textErrorNodeDni)
  }
  if (value) {
    inputDni.classList.remove('is-invalid')
    inputDni.classList.add('is-valid')
  } else {
    inputDni.classList.remove('is-valid')
    inputDni.classList.add('is-invalid')
    textErrorNodeDni = document.createElement('span')
    textErrorNodeDni.id = 'textError'
    textErrorNodeDni.innerHTML = 'Debe completar este campo'

    parentTextInputNode.appendChild(textErrorNodeDni)
  }
}

function addButton () {
  var firstName = document.getElementById('firstName')
  var dni = document.getElementById('dni')
  parsedStudentsList.push([ { firstname, dni } ])
  console.log(parsedStudents)
  var stringfiedStudents = JSON.stringify(parsedStudents)
  localStorage.setItem('studentsList', stringfiedStudents)
}
