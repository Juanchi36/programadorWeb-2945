/*# Crear una función para eliminar alumnos:

- Una función que permite eliminar un alumno de una lista en el DOM buscando por nombre o apellido, si importar mayúsculas ni minúsculas y usando el número de id del alumno para eliminarlo.*/
var students = [
  {
    firstName: 'Laura',
    lastName: 'Lopez',
    dni: 45678987,
    address: {
      street: 'Cucha cucha',
      number: 1234
    },
    examResults: [ 7, 5, 6, 4, 3, 2, 8 ]
  },
  {
    firstName: 'Cooper',
    lastName: 'Marshall',
    dni: 45678989,
    address: {
      street: 'La Pampa',
      number: 6754
    },
    examResults: [ 3, 4, 5, 6, 7, 3, 4, 5 ]
  },
  {
    firstName: 'Ines',
    lastName: 'Sotomayor',
    dni: 45678956,
    address: {
      street: 'La vía',
      number: 3737
    },
    examResults: [ 3, 8, 7, 5, 6, 4, 5, 4, 3 ]
  },
  {
    firstName: 'Matias',
    lastName: 'Trunzo',
    dni: 45678943,
    address: {
      street: 'Zapiol',
      number: 1819
    },
    examResults: [ 4, 3, 4, 5, 5, 3 ]
  },
  {
    firstName: 'Pablo',
    lastName: 'Callegari',
    dni: 45678963,
    address: {
      street: 'Juan b. Justo',
      number: 7654
    },
    examResults: [ 1, 2, 1, 3, 2, 4, 2, 4, 5 ]
  },
  {
    firstName: 'Daniela',
    lastName: 'Picciotto',
    dni: 45678983,
    examResults: [ 10, 8, 9, 7, 8, 7, 10 ]
  }
]

var listContainer
var studentHit
showStudents()
var name = prompt('Ingrese el alumno a eliminar del DOM')
var nameLowerCase = name.toLowerCase()
searchStudentByFirstNameAndLastName(nameLowerCase)
removeStudent()

function searchStudentByFirstNameAndLastName (text) {
  studentHit = -1
  var flag = false
  for (var i = 0; i < students.length; i++) {
    var student = students[i]
    if (
      student.firstName.toLowerCase().indexOf(nameLowerCase) !== -1 ||
      student.lastName.toLowerCase().indexOf(nameLowerCase) !== -1
    ) {
      studentHit = i
      flag = true
      break
    }
  }
  if (!flag) {
    console.log('No hay nadie con el nombre o apellido: ' + text)
  }
}

function createStudentLi (firstName, lastName, dni, examResults) {
  var li = document.createElement('li')

  li.className = 'list-group-item '

  li.id = dni

  var fullName = firstName + ' ' + lastName

  var fullDni = 'DNI: ' + dni

  var prom = averageExamResult(examResults)

  li.innerHTML =
    '<h1>' + fullName + '</h1><p>' + fullDni + '</p><p>' + prom + '</p>'

  return li
}
function removeStudent () {
  var idToRemove = students[studentHit].dni
  var liToRemove = document.getElementById(idToRemove)
  var father = liToRemove.parentNode

  father.removeChild(liToRemove)
}

function averageExamResult (examResults) {
  var total = 0
  for (var i = 0; i < examResults.length; i++) {
    var result = examResults[i]
    total = total + result
  }

  return total / examResults.length
}
function showStudents (studentsList) {
  var student
  var rootContainer = document.getElementById('rootContainer')
  rootContainer.innerHTML = '<ul class="list-group" id="list"></ul>'
  listContainer = document.getElementById('list')
  for (var i = 0; i < students.length; i++) {
    student = students[i]

    var liStudent = createStudentLi(
      student.firstName,
      student.lastName,
      student.dni,
      student.examResults
    )

    listContainer.appendChild(liStudent)
  }
}
/*
[Listas en HTML](https://www.w3schools.com/html/html_lists.asp)

[getElementById](https://www.w3schools.com/jsref/met_document_getelementbyid.asp)

[createElement](https://www.w3schools.com/jsref/met_document_createelement.asp)

[appendChild](https://www.w3schools.com/jsref/met_node_appendchild.asp)

[removeChild](https://www.w3schools.com/jsref/met_node_removechild.asp)

```js
// Array ejemplo:


```
*/
