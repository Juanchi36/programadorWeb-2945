// # Mostrar un contandor

// - El contador deberá:
//    - Empezar en cero.
//    - Si el usuario presiona Enter tiene que empezar de nuevo.
//    - Sumar uno si el usuario presiona arriba.
//    - Restar uno si el usuario presiona abajo.

// [Evento keydown jQuery](https://api.jquery.com/keydown/)

$(document).ready(function () {
  $(window).keydown(function (event) {
    var valueCount = event.which

    switch (valueCount) {
      case 13:
        var numero = $('#counter').html()
        if (numero && numero !== 00) {
          numero = '00'
          $('#counter').html(numero)
        }
        break
      case 38:
        var numero = $('#counter').html()
        numeroInt = parseInt(numero)
        numeroInt = numeroInt + 1
        $('#counter').html(numeroInt)

        break
      case 40:
        var numero = $('#counter').html()
        numeroInt = parseInt(numero)
        numeroInt = numeroInt - 1
        $('#counter').html(numeroInt)

        break
    }
  })
})
