var number1 = prompt('Ingrese el primer número')
var number2 = prompt('Ingrese el segundo número')
var parsedNum1 = parseInt(number1, 10)
var parsedNum2 = parseInt(number2, 10)
console.log('La suma es: ', parsedNum1 + parsedNum2)
console.log('La resta es: ', parsedNum1 - parsedNum2)
console.log('La multiplicación es: ', parsedNum1 * parsedNum2)
if (parsedNum2 === 0) {
    console.log('No se puede realizar una división por 0')
} else {
    console.log('La división es: ', parsedNum1 / parsedNum2)
}
console.log('La división es: ', parsedNum1 / parsedNum2)