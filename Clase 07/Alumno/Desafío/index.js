/*
## Crea una función que permita eliminar un nombre de una lista en el localStorage

- La función tiene que poder buscar y eliminar un nombre en una lista tipo array almacenada en el localStorage sin importar mayúsculas ni minúsculas. Se provee una lista inicial que podría estar cargada o no, la función tiene que poder verificarlo y no romper si la lista no existe.

- Datos iniciales opcionales:
*/

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

//studentsList =localStorage.getItem('studentsList')
var localStudents = localStorage.getItem('studentsList')
var stringfiedStudents = JSON.stringify(localStudents)
localStorage.setItem('studentsList', stringfiedStudents)

function deleteNameInLocalStorage () {
  var flag = true
  var nameToSearch = prompt('Ingrese el nombre del alumno que busca')
  var nameToSearchUpperCase = nameToSearch.toUpperCase()
  var localStudents = localStorage.getItem('studentsList')
  var parsedStudents
  if (JSON.parse(localStudents)) {
    parsedStudents = JSON.parse(localStudents)
    for (var i = 0; i < parsedStudents.length; i++) {
      if (parsedStudents[i].indexOf(nameToSearchUpperCase) !== -1) {
        var indexHit = parsedStudents.indexOf(studentsList[i])
        parsedStudents.splice(indexHit, 1)
        flag = false
      }
    }
    if (flag) {
      document.write('No hay coincidencias')
    }

    var stringfiedStudents = JSON.stringify(parsedStudents)
    localStorage.setItem('studentsList', stringfiedStudents)
  }
}

deleteNameInLocalStorage()
