$(document).ready(function () {
  console.log('Init')
  $('#home').click(function () {
    $('#root').fadeOut(300, function () {
      $('#root').load('../partials/home.html', homeController).fadeIn(300)
    })
  })
  $('#contact').click(function () {
    $('#root').fadeOut(300, function () {
      $('#root')
        .load('../partials/contact.html', function () {
          console.log('Carga Contact')
        })
        .fadeIn(300)
    })
  })
  $('#people').click(function () {
    $('#root').fadeOut(300, function () {
      $('#root')
        .load('../partials/people.html', function () {
          console.log('Carga People')
        })
        .fadeIn(300)
    })
  })
  $('#localStorage').click(function () {
    $('#root').fadeOut(300, function () {
      $('#root')
        .load('../partials/local-storage.html', function () {
          console.log('Carga LS')
        })
        .fadeIn(300)
    })
  })
})
