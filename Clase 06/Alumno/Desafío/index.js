var students = [
  { firstName: 'Adrián', lastName: 'Ferré' },
  { firstName: 'Mateo', lastName: 'Molina' },
  { firstName: 'Maria', lastName: 'Fernandez' }
]
manageAnArray()

/*# Crea una función que permita buscar un nombre en un array de alumnos

- La función no debe distinguir mayúsculas de minúsculas.
- Tiene que poder encontrar coincidencias parciales.
- Debe encontrar coincidencias en `firstName` o `lastName`.
- En caso de encontrarlo devolver la posición del alumno en el array.
*/

function searchStudentByName () {
  var flag = true
  var nameToSearch = prompt('Ingrese el nombre o apellido del alumno que busca')
  var nameToSearchLowerCase = nameToSearch.toLowerCase()
  for (var i = 0; i < students.length; i++) {
    if (
      typeof students[i].firstName === 'string' &&
      typeof students[i].lastName === 'string'
    ) {
      var firstNameLowerCase = students[i].firstName.toLowerCase()
      var lastNameLowerCase = students[i].lastName.toLowerCase()
    }

    if (
      firstNameLowerCase.indexOf(nameToSearchLowerCase) !== -1 ||
      lastNameLowerCase.indexOf(nameToSearchLowerCase) !== -1
    ) {
      var indexHit = students.indexOf(students[i])
      flag = false
      console.log('Hay una coincidencia en la posición número: ', indexHit)
    }
  }
  if (flag) {
    console.log('No hay coincidencias')
  }
}

/*
# Crear una función que permita agregar un alumno a un array

- Debe recibir como parámetros `firstName` y `lastName`.
- Debe validar que los datos ingresados sean de tipo string no nulo, en caso contrario pedir de nuevo el que corresponda.
- La función tiene que guardar un objeto alumno de la forma `{ firstName: 'Adrián', lastName: 'Ferré' }`.
*/

function addStudent (firstName, lastName) {
  do {
    var addfirstName = prompt('Ingrese el nombre del nuevo alumno')
  } while (typeof firstName === 'string' && typeof firstName !== 'object')
  do {
    var addlastName = prompt('Ingrese el apellido del nuevo alumno')
  } while (typeof firstName === 'string' && typeof lastName !== 'object')
  students.push({ firstname: addfirstName, lastName: addlastName })
  console.log(students)
}

/*
# Crear una función que permita gestionar un array de alumnos

- Las opciones pueden ser buscar, agregar o eliminar y tienen que pedir los datos que correspondan y usar las funciones que sean necesarias del ejercicio anterior.
*/

function manageAnArray () {
  var selectAnOperation = prompt(
    'Ingrese la opcion deseada. 1.Buscar un alumno, 2.Agregar un alumno, 3.Eliminar un alumno'
  )
  switch (selectAnOperation) {
    case '1':
      searchStudentByName()
      break
    case '2':
      addStudent()
      break
    case '3':
      deleteAStudent()
      break
    default:
      console.log('Opción inválida')
  }
}

function deleteAStudent () {
  var flag = true
  var nameToSearch = prompt(
    'Ingrese el nombre o apellido del alumno que quiere eliminar'
  )
  var nameToSearchLowerCase = nameToSearch.toLowerCase()
  for (var i = 0; i < students.length; i++) {
    if (
      typeof students[i].firstName === 'string' &&
      typeof students[i].lastName === 'string'
    ) {
      var firstNameLowerCase = students[i].firstName.toLowerCase()
      var lastNameLowerCase = students[i].lastName.toLowerCase()
    }

    if (
      firstNameLowerCase.indexOf(nameToSearchLowerCase) !== -1 ||
      lastNameLowerCase.indexOf(nameToSearchLowerCase) !== -1
    ) {
      var indexHit = students.indexOf(students[i])
      students.splice(indexHit, 1)
      flag = false
      console.log('El alumno ha sido eliminado')
    }
  }
  if (flag) {
    console.log('No se encontró al alumno que quiere eliminar')
  }
}
