// Validación de campos más copada

var REQUIRED_FIELD = 'Campo obligatorio'

// $(document).ready(function () {
//   $('#submitButton').on('click', function () {
//     console.log('Click en ', this.id)
//   })

//   // $('#firstName').on('change', function () {
//   //   console.log('Cambio en ', $(this).val())
//   // })

//   // $('#firstName').change(function () {
//   //   console.log('Cambio en ', $(this).val())
//   // })

//   // $('#firstName').on('input', function () {
//   //   console.log('Cambio en ', $(this).val())
//   // })

//   $('#firstName').one('blur', function () {
//     var inputNode = $(this)

//     validateField(inputNode)

//     $('#firstName').on('input', function () {
//       var inputNode = $(this)

//       validateField(inputNode)
//     })
//   })
// })

// function validateField (inputNode) {
//   var value = inputNode.val()

//   inputNode.next().remove()

//   if (value) {
//     inputNode.removeClass('is-invalid')
//     inputNode.addClass('is-valid')
//   } else {
//     inputNode.removeClass('is-valid')
//     inputNode.addClass('is-invalid')

//     var parentNode = inputNode.parent()
//     parentNode.append('<span class="text-danger">' + REQUIRED_FIELD + '</span>')
//   }
// }

// Eventos en teclas

// $(document).ready(function (event) {
//   $(window).keydown(function (event) {
//     var keyPress = event.which

//     if (keyPress === 13) {
//       var inputNode = $('#searchInput')

//       var value = inputNode.val()

//       console.log('Voy a buscar por el valor ', value)
//     }
//   })
// })

// $(document).ready(function (event) {
//   $('#showModal').click(function () {
//     $('#modal').css('display', 'block')

//     $(window).keydown(function (event) {
//       var keyPress = event.which

//       if (keyPress === 27) {
//         var modalNode = $('#modal')

//         modalNode.css('display', 'none')
//       }
//     })
//     $('#modal').click(function (event) {
//       var modalNode = $('#modal')

//       modalNode.css('display', 'none')
//     })

//     $('#dialog').click(function (event) {
//       event.stopPropagation()
//     })
//   })
// })

$(document).ready(function () {
  // $('#searchInput').blur(function (event) {
  //   var buttonNode = $(this)
  //   console.log('Target del evento', event.target.value)
  //   // console.log('This ', this.val())
  //   console.log('$(this) ', buttonNode.val())

  // })
  $('#pato').html('<span>40</span>')
})
