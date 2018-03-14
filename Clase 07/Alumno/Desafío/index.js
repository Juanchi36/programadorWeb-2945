/*
var studentsList = [
  'CARLOS',
  'GERONIMO',
  'NICOLAS',
  'LUCAS',
  'MARIA',
  'FEDERICO',
  'ANTONIO',
  'LORNA',
  'JULIAN',
  'DIEGO',
  'DANIELA',
  'JUAN',
  'MATEO',
  'BARBARA',
  'AGUSTIN',
  'MARIO',
  'MARIEL',
  'ANA',
  'FLORENCIA'
]

var stringfiedStudents = JSON.stringify(studentsList)
localStorage.setItem('studentsList', stringfiedStudents)
*/
function deleteNameInLocalStorage () {
  var flag = true
  var nameToSearch = prompt(
    'Ingrese el nombre del alumno que desea eliminar del Local Storage'
  )
  var nameToSearchUpperCase = nameToSearch.toUpperCase()
  var localStudents = localStorage.getItem('studentsList')
  var indexHit = -1
  var parsedStudents
  if (JSON.parse(localStudents)) {
    parsedStudents = JSON.parse(localStudents)
    for (var i = 0; i < parsedStudents.length; i++) {
      var student = parsedStudents[i]
      if (student.indexOf(nameToSearchUpperCase) !== -1) {
        indexHit = i
        parsedStudents.splice(indexHit, 1)
        flag = false
        break
      }
    }
    if (flag) {
      console.log('No hay coincidencias')
    }

    var stringfiedStudents = JSON.stringify(parsedStudents)
    localStorage.setItem('studentsList', stringfiedStudents)
  } else {
    parsedStudents = []
  }
}

deleteNameInLocalStorage()
