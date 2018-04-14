var counter = 0

var squares = $('.square')

squares.click(function () {
  var squareNode = $(this)
  if (counter === 9) {
    squares.removeClass('circle cross')
    counter = 0
  }

  if (!(squareNode.hasClass('circle') || squareNode.hasClass('cross'))) {
    if (counter % 2) {
      squareNode.addClass('circle')
    } else {
      squareNode.addClass('cross')
    }
    counter++
  }
})
