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

addStudent()
showStudents()

function addStudent () {
  var localStudentsList = localStorage.getItem('studentList')

  if (localStudentsList) {
    parsedStudentsList = JSON.parse(localStudentsList)
  } else {
    parsedStudentsList = []
  }
}
function createStudentLi (firstName, dni) {
  var li = document.createElement('li')

  li.className = 'list-group-item '

  li.id = dni

  li.innerHTML = '<h3>Nombre: ' + firstName + '</h3><h4>DNI: ' + dni + '</h4>'

  return li
}

function showStudents () {
  var student
  //var rootContainer = document.getElementById('mainList')
  //rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
  var listContainer = document.getElementById('mainList')
  for (var i = 0; i < parsedStudentsList.length; i++) {
    student = parsedStudentsList[i]

    var liStudent = createStudentLi(student.firstName, student.dni)

    listContainer.appendChild(liStudent)
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
