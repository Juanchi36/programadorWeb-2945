$(document).ready(function () {
  console.log('Init')
  $('#home').click(function () {
    $('#root').load('../partials/home.html', function () {
      console.log('Carga Home')
    })
  })
  $('#contact').click(function () {
    $('#root').load('../partials/contact.html', function () {
      console.log('Carga Contact')
    })
  })
  $('#people').click(function () {
    $('#root').load('../partials/people.html', function () {
      console.log('Carga People')
    })
  })
  $('#localStorage').click(function () {
    $('#root').load('../partials/local-storage.html', function () {
      console.log('Carga LS')
    })
  })
})
