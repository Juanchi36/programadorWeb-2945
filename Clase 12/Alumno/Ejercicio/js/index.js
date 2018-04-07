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
  }
})
