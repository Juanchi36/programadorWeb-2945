/*
#  Crear una función que cambie a mayúsculas un nombre

- La función recibe como parámetro un nombre de un alumno y debe devolverlo en mayúsculas.
*/
function nameToUpperCase () {
  var name = prompt('Ingrese un nombre')
  var nameUpperCase = name.toUpperCase()
  console.log(nameUpperCase)
}

/*
# Crear una función que busque un alumno en un array de alumnos

- La función no debe distinguir mayúsculas de minúsculas.
- Tiene que poder encontrar coincidencias parciales.
- En caso de encontrarlo devolver la posición del alumno en el array.
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
manageAnArray()

function searchStudent () {
  var promptedName = prompt('Ingrese el nombre del alumno buscado')
  var promptedNameUpperCase = promptedName.toUpperCase()

  if (studentsList.indexOf(promptedNameUpperCase) !== -1) {
    console.log(
      'El alumno buscado se encuentra en la posición',
      studentsList.indexOf(promptedNameUpperCase)
    )
  } else {
    console.log('No ha habido coincidencias')
  }
}

/*
# Crear una función que permita agregar un alumno a un array

- Debe validar que el dato ingresado sea un string no nulo, en caso contrario pedirlo de nuevo.
- La función tiene que guardar el nombre del alumno en mayúsculas.

*/

function addAStudent () {
  do {
    var name = prompt('Ingrese el nombre del alumno a agregar en el array')
    var nameToUpperCase = name.toUpperCase()
  } while (
    typeof nameToUpperCase !== 'string' &&
    typeof nameToUpperCase === 'object'
  )
  studentsList.push(nameToUpperCase)
  console.log(studentsList)
}

/*
# Crear una función que permita eliminar un nombre de un array de alumnos

- La función debe recibir como parámetro un nombre, buscarlo y eliminarlo del array.
- La función no debe distinguir mayúsculas de minúsculas.
*/

function deleteAStudent (name) {
  var nameToUpperCase = name.toUpperCase()
  if (studentsList.indexOf(nameToUpperCase) !== -1) {
    studentsList.splice(studentsList.indexOf(nameToUpperCase), 1)
    console.log('El alumno se ha eliminado')
  } else {
    console.log('No se ha enconctrado el alumno que quería eliminar')
  }
}

/*
# Crear una función que permita gestionar un array de alumnos

- Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones anteriores para hacer los cambios.
*/
function manageAnArray () {
  var operation = prompt(
    'Ingrese la operación a realizar, 1. Buscar, 2. Agregar, 3. Eliminar'
  )
  switch (operation) {
    case '1':
      searchStudent()
      break
    case '2':
      addAStudent()
      break
    case '3':
      var name = prompt('Ingrese el alumno a borrar')
      deleteAStudent(name)
      break
    default:
      console.log('Operación no válida')
      break
  }
}
