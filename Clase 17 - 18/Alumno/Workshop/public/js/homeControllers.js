$('#home').click(function () {
  $('#root')
    .fadeOut(500, function () {
      $('#root').load('../partials/home.html')
    })
    .fadeIn(300)
})
