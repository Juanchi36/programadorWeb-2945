// # Crear un ta te ti

// - Se deberá utilizar el HMTL, CSS e imágenes incluidas en esta carpeta (no es necesario la imagen).
// - Cada vez que el usuario hace click sobre un cuadrado se tiene que agregar la clase `circle` o la clase `cross`, alternando entre una u otra.

// [Solución](https://www.useloom.com/share/97d9a0dd3ba44cfda158606c0a4f793b)

var squaresNodes = $('.square')
var flag = true
var i = 0
squaresNodes.click(function (event) {
  var squareNode = $(this)
  if (i < 9) {
    if (flag) {
      squareNode.addClass('circle')
      flag = false
      i++
    } else {
      squareNode.addClass('cross')
      flag = true
      i++
    }
  } else {
    i = 0
    squaresNodes.removeClass()
    squaresNodes.addClass('square')
    console.log('fin')
  }
})
