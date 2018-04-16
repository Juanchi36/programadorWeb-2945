$(document).ready(function () {
  var count = 0

  $(window).keydown(function (event) {
    var keyPress = event.which
    switch (keyPress) {
      case 13:
        $('#counter').html('0')
        count = 0
        break
      case 38:
        count++
        $('#counter').html(count)
        break
      case 40:
        count--
        $('#counter').html(count)
        break
    }
  })
})
