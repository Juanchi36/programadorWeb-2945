/*
# Hacer un objeto que represente un usuario
​
- Deberá tener las propiedades id `id` (se deberá generar uno automáticamente cuando creo el usuario), nombre `firstName`, apellido `lastName`, edad `age`, dirección `address`.
- Deberá tener los métodos:
   - Mostrar nombre completo `fullName`, deberá mostrar en consola el nombre completo del usuario.
   - Es mayor de edad `isLegalAge` que deberá devolver `true` si tiene 18 años o más y `false` en caso contrario.
- Generar el objeto, pasando los argumentos necesarios y luego llamar a los métodos para ver como funcionan.

Ayuda: Existe una función que devuelve un número random que nos pede servir para hacer un id.

```js
var time = Math.random() // Esto devuelve un número del estilo 0.11296860298890499
```
*/
function User (firstName, lastName, age, address) {
  var id = Math.floor(Math.random() * 1000000)
  this.getId = function () {
    return id
  }
  this.getFristName = function () {
    return firstName
  }
  this.setFirstName = function (userFirstName) {
    firstName = userFirstName
  }
  this.getLastName = function () {
    return lastName
  }
  this.setLastName = function () {
    lastName = userLastName
  }
  this.getAge = function () {
    return age
  }
  this.setAge = function () {
    age = userAge
  }
  this.getAddress = function () {
    return address
  }
  this.setAddress = function () {
    address = userAddress
  }
  this.showFullName = function () {
    var fullName = firstName + ' ' + lastName
    console.log(fullName)
  }
  this.isLegalAge = function () {
    if (age >= 18) {
      console.log('Es mayor de edad')
    } else {
      console.log('No es mayor de edad')
    }
  }
}

var user1 = new User('Carlos', 'Way', 25, 'Sanabria 2107')

user1.showFullName()
user1.isLegalAge()
console.log(user1.getId())
