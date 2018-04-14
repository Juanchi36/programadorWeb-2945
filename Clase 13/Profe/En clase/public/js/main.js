$(document).ready(function () {
  $('#main-logo').click(function () {
    console.log('Me hicieron click')
    $('#root').load('../partials/content.html', function () {
      console.log('Load partial main')
    })
  })

  $('#contact').click(function () {
    $('#root').load('../partials/contact.html', function () {
      $('#submitButton').click(function () {
        $('#root').load('../partials/greetings.html')
      })
    })
  })
})
