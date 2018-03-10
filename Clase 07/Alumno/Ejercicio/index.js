/*
## Crea una función que permita guardar un nombre en una lista en el localStorage

- La función tiene que poder guardar un nombre en mayúsculas en una lista tipo array almacenada en el localStorage. Se provee una lista inicial que podría estar cargada o no, la función tiene que poder verificarlo y no romper si la lista no existe.
Datos iniciales opcionales:

```js 
var studentsList = ['CARLOS','GERONIMO','NICOLAS','LUCAS','MARIA','FEDERICO','ANTONIO','LORNA','JULIAN','DIEGO','DANIELA','JUAN','MATEO','BARBARA','AGUSTIN','MARIO','MARIEL','ANA','FLORENCIA']
```
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

var stringfiedStudents = JSON.stringify(studentsList)

localStorage.setItem('studentsList', stringfiedStudents)
/*
var localStudents = localStorage.getItem('studentsList')
function addNameInLocalStorage () {
  var parsedStudents
  if (JSON.parse(localStudents)) {
    parsedStudents = JSON.parse(localStudents)
  } else {
    parsedStudents = []
  }
  var addedName = prompt('Ingrese el nombre del estudiante que desea agregar')
  var nameUpperCased = addedName.toUpperCase()
  parsedStudents.push(nameUpperCased)
  var stringfiedStudents = JSON.stringify(parsedStudents)
  localStorage.setItem('studentsList', stringfiedStudents)
}

addNameInLocalStorage()*/
