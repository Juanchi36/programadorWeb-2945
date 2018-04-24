$(document).ready(function () {
  $('#contact').click(function () {
    $('#root')
      .fadeOut(500, function () {
        $('#root').load('../partials/contact.html')
      })
      .fadeIn(300)
  })

  $('#firstName,  #comments').one('blur', function () {
    var inputNode = $(this)
    var value = inputNode.val()
    inputNode.next().remove()

    if (value) {
      inputNode.removeClass('is-invalid')
      inputNode.addClass('is-valid')
    } else {
      inputNode.addClass('is-invalid')
      inputNode.removeClass('is-valid')

      var parentNode = inputNode.parent()

      parentNode.append('<p>Debe tener contenido</p>')
    }
    validateFields()

    $('#firstName,  #comments').on('input', function () {
      var inputNode = $(this)
      var value = inputNode.val()
      inputNode.next().remove()

      if (value) {
        inputNode.removeClass('is-invalid')
        inputNode.addClass('is-valid')
      } else {
        inputNode.addClass('is-invalid')
        inputNode.removeClass('is-valid')

        var parentNode = inputNode.parent()
        parentNode.append('<p>Debe tener contenido</p>')
      }
      validateFields()
    })
  })

  $('#email').one('blur', function () {
    var emailNode = $(this)
    var emailValue = emailNode.val()
    emailNode.next().remove()
    if (emailValue) {
      if (emailValue.indexOf('@') !== -1 && emailValue.indexOf('.') !== -1) {
        emailNode.removeClass('is-invalid')
        emailNode.addClass('is-valid')
      } else {
        emailNode.addClass('is-invalid')
        emailNode.removeClass('is-valid')
        var parentEmailNode = emailNode.parent()

        parentEmailNode.append('<p>Debe contener @ y un .</p>')
      }
    } else {
      emailNode.addClass('is-invalid')
      emailNode.removeClass('is-valid')

      var parentEmailNode = emailNode.parent()

      parentEmailNode.append('<p>Debe tener contenido</p>')
    }
    validateFields()

    $('#email').on('keyup', function () {
      var emailNode = $(this)
      var emailValue = emailNode.val()
      emailNode.next().remove()
      if (emailValue) {
        if (emailValue.indexOf('@') !== -1 && emailValue.indexOf('.') !== -1) {
          emailNode.removeClass('is-invalid')
          emailNode.addClass('is-valid')
        } else {
          emailNode.addClass('is-invalid')
          emailNode.removeClass('is-valid')
          var parentEmailNode = emailNode.parent()

          parentEmailNode.append('<p>Debe contener un arroba y un punto</p>')
        }
      } else {
        emailNode.addClass('is-invalid')
        emailNode.removeClass('is-valid')

        var parentEmailNode = emailNode.parent()

        parentEmailNode.append('<p>Debe tener contenido</p>')
      }
      validateFields()
    })
  })

  $('#submitButton').on('click', function () {
    $('#firstName,  #comments').removeClass('is-valid').val('')
    $('#email').removeClass('is-valid').val('')
  })

  function validateFields () {
    var validFields = $('.is-valid')

    if (validFields.length === 3) {
      $('#submitButton').prop('disabled', false)
    } else {
      $('#submitButton').prop('disabled', true)
    }
  }
})
