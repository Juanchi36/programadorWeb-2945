$(document).ready(function () {
  console.log('Document ready')
  // $('.contenedor-inicial').click(function () {
  //   $('.buscador').show(2000, function () {
  //     console.log('Mostré la barra')
  //   })
  // })
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()
  //   console.log(scrollTop)
  //   if (scrollTop >= 400) {
  //     $('.buscador').show(400, function () {
  //       console.log('Mostré la barra')
  //     })
  //   }
  // })
  // var flag = true

  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()
  //   console.log(scrollTop)
  //   if (scrollTop >= 800 && flag) {
  //     $('.servicios-destacados img').addClass('scaleButtons')
  //     $('.servicios-destacados img').removeClass('scaleButtonsSmall')
  //     flag = false
  //   }
  // })
  // var flag = true
  // var position = $('#servicios').position()
  // console.log(position)
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()
  //   console.log(scrollTop)
  //   if (scrollTop >= position.top - 150 && flag) {
  //     $('.servicios-destacados img').addClass('scaleButtons')
  //     $('.servicios-destacados img').removeClass('scaleButtonsSmall')
  //     flag = false
  //   }
  // })

  // var flag = true
  // var position = $('#precios').position()

  // $('#precios .cuadros').fadeOut()
  // console.log(position)
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()

  //   console.log(scrollTop)
  //   if (scrollTop >= position.top - 200 && flag) {
  //     $('#precios .cuadros').fadeIn(3000, function () {
  //       console.log('Mostré elementos')
  //     })
  //     flag = false
  //   }
  // })

  // var flag = true
  // var position = $('#precios').position()
  // console.log(position)
  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()

  //   console.log(scrollTop)
  //   if (scrollTop >= position.top - 200 && flag) {
  //     $('#precios .cuadros').animate(
  //       {
  //         opacity: 1
  //       },
  //       5000,
  //       function () {
  //         console.log('Terminó')
  //       }
  //     )
  //     flag = false
  //   }
  // })

  // $(window).scroll(function () {
  //   var scrollTop = $(window).scrollTop()
  //   console.log(scrollTop)
  //   if (scrollTop >= 350) {
  //     $('.buscador').slideDown(1000, function () {
  //       console.log('Mostré la barra')
  //     })
  //   }
  // })

  $(window).scroll(function () {
    var scrollTop = $(window).scrollTop()
    console.log(scrollTop)
    $('#background1').css('top', -(scrollTop * 0.25) + 'px')
    $('#background2').css('top', -(scrollTop * 0.75) + 'px')
    $('#background3').css('top', -(scrollTop * 2) + 'px')
  })
})
