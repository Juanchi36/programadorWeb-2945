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

var emailNodes = $('#email')

emailNodes.blur(function (event) {
  var emailNode = $(this)
  var valueEmail = emailNode.val()
  if (
    (valueEmail && valueEmail.indexOf('@') === -1) ||
    valueEmail.indexOf('.') === -1
  ) {
    emailNode.removeClass('is-valid')
    emailNode.addClass('is-invalid')
  } else {
    emailNode.removeClass('is-invalid')
    emailNode.addClass('is-valid')
  }
  validateFilelds()
})

function validateFilelds () {
  var validField = $('.is-valid')
  if (validField && validField.length === 3) {
    $('#submitButton').attr('disabled', false)
  } else {
    $('#submitButton').attr('disabled', true)
  }
}

var myButton = $('#submitButton')
myButton.click(function (event) {
  var buttonClicked = event.target
  if (buttonClicked) {
    $('.form-control').val('')
  }
})
