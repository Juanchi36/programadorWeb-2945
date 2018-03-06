/*
# Convertir las operaciones de la calculadora en pequeñas funciones

- Crear una función suma que reciba dos parámetros y devuelva la suma de ambos.
- Crear una función resta que reciba dos parámetros y devuelva la resta de ambos.
- Crear una función multiplicación que reciba dos parámetros y devuelva el producto de ambos.
- Crear una función división que reciba dos parámetros y devuelva el cociente de ambos asumiendo que el segundo nunca es cero.

- Extra: Abstraer el parseInt en otra función.
*/
calculator()
function sum () {
  var num1 = prompt('Ingrese el primer número')
  number1 = parseNumber(num1)
  var num2 = prompt('Ingrese el segundo número')
  number2 = parseNumber(num2)
  console.log('El resultado de la suma es: ', number1 + number2)
}
function substract () {
  var num1 = prompt('Ingrese el primer número')
  number1 = parseNumber(num1)
  var num2 = prompt('Ingrese el segundo número')
  number2 = parseNumber(num2)
  console.log('El resultado de la resta es: ', number1 - number2)
}
function multiply (number1, number2) {
  var num1 = prompt('Ingrese el primer número')
  number1 = parseNumber(num1)
  var num2 = prompt('Ingrese el segundo número')
  number2 = parseNumber(num2)
  console.log('El resultado de la miltiplicación es: ', number1 * number2)
}
function divide (number1, number2) {
  var num1 = prompt('Ingrese el primer número')
  number1 = parseNumber(num1)
  var num2 = prompt('Ingrese el segundo número')
  number2 = parseNumber(num2)
  if (number2 === 0) {
    console.log('No existe la división por 0')
  } else {
    console.log('El resultado de la división es: ', number1 / number2)
  }
}
function parseNumber (num1) {
  var parsedNumber = parseInt(num1, 10)
  return parsedNumber
}
/*# Crear una función que devuelva la operación pedida

- La función debe:

   - Pedir la operación a realizar.
   - Pedir el primer parámetro y pedir el segundo, en caso de haber elegido división y cero volver a pedirlo hasta que ingrese un numero distinto de cero.
   - Usar las funciones del punto anterior para calcular el resultado según corresponda y mostrar en pantalla el mismo.
   */
function calculator () {
  var operation = prompt(
    'Ingrese la operacion a realizar, Suma, Resta, Multilpilcación o División'
  )
  switch (operation) {
    case 'suma':
    case 'Suma':
      sum()
      break
    case 'Multiplicación':
    case 'multiplicación':
    case 'Multipilcacion':
    case 'multiplicacion':
      multiply()
      break
    case 'División':
    case 'división':
    case 'Division':
    case 'division':
      divide()
      break
    case 'resta':
    case 'Resta':
      substract()
  }
}
