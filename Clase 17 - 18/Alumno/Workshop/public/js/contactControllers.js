$('#contact').click(function () {
  $('#root')
    .fadeOut(500, function () {
      $('#root').load('../partials/contact.html')
    })
    .fadeIn(300)
})
