// # Crear un formulario que valide campos antes de enviar la información

// - El formulario deberá contar con los siguientes campos y validarlos cada vez que el usuario pierda el foco usando jQuery para manipular el DOM.
//    - Nombre: Deberá tener contenido.
//    - Email: Deberá contener arroba, punto y contenido.
//    - Comentarios: Deberá tener contenido.

// Si existe algún error deberá mostrar el campo en rojo

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
