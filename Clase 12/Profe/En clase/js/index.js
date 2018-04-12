// Vanilla JavaScript traer elemento
// var inputNode = document.getElementById('firstName')

// jQuery
// var inputNode = $('#firstName')

// Vanilla JavaScript traer valor
// var inputNodeValue = inputNode.value

// jQuery
// var inputNodeValue = inputNode.val()

// Vanilla JavaScript setear valor
// inputNode.value = 'Pato'

// jQuery
// inputNode.val('Pato')

// Vanilla JavaScript setear valor en un solo paso
// document.getElementById('firstName').value = 'Pato ñato'

// jQuery
// $('#firstName').val('Pato ñato')

// console.log(inputNode.val())

// Vanilla JavaScript setear valor en un solo paso
// document.getElementById('submitButton').onclick = func...

// jQuery
// $('#submitButton').click(function (event) {
//   var id = event.target.id
//   var id2 = this.id
//   console.log(id, id2)
// })

// $('#submitButton').click(function (event) {
//   var val = $(this).val()
//   console.log(val)
// })

// Vanilla JavaScript traer por clase
// var inputTextNodes = document.getElementsByClassName('form-control')

// jQuery
// var inputTextNodes = $('.form-control')

// inputTextNodes.click(function () {
//   var id = this.id
//   console.log(id)
// })

// Validación por vanilla JS

// document.getElementById('firstName').onblur = function (event) {
//   var firstNameNode = event.target

//   if (firstNameNode.value) {
//     firstNameNode.classList.remove('is-invalid')
//     firstNameNode.classList.add('is-valid')
//   } else {
//     firstNameNode.classList.remove('is-valid')
//     firstNameNode.classList.add('is-invalid')
//   }
// }

var inputTextNodes = $('input[type="text"]')

inputTextNodes.blur(function (event) {
  var inputTextNode = $(this)

  var value = inputTextNode.val()

  if (value) {
    inputTextNode.removeClass('is-invalid')
    inputTextNode.addClass('is-valid')

    // firstNameNode.classList.remove('is-invalid')
    // firstNameNode.classList.add('is-valid')

    inputTextNode.next().remove()
  } else {
    inputTextNode.removeClass('is-valid')
    inputTextNode.addClass('is-invalid')

    // firstNameNode.classList.remove('is-valid')
    // firstNameNode.classList.add('is-invalid')

    // Mostrar un error
    var parentNode = inputTextNode.parent()

    parentNode.append('<p>Campo vacio</p>')

    // var parentNode = inputNode.parentNode
    // var errorNode = document.createElement('p')
    // errorNode.innerHTML = errorText
    // parentNode.appendChild(errorNode)
  }
})
