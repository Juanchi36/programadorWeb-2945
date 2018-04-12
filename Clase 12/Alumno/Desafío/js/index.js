$('#submitButton').attr('disabled', true)
var inputTextNodes = $('.form-control')
inputTextNodes.blur(function (event) {
  var inputTextNode = $(this)
  var value = inputTextNode.val()

  if (value) {
    inputTextNode.removeClass('is-invalid')
    inputTextNode.addClass('is-valid')
  } else {
    inputTextNode.removeClass('is-valid')
    inputTextNode.addClass('is-invalid')
  }
  validateFilelds()
})

function validateFilelds () {
  var validField = $('.is-valid')
  if (validField && validField.length === 3) {
    $('#submitButton').attr('disabled', false)
  }
}

var myButton = $('#submitButton')
myButton.click(function (event) {
  var buttonClicked = event.target
  if (buttonClicked) {
    $('.form-control').val('')
  }
})
