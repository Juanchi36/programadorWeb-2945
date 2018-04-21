$('#localStorage').click(function () {
  $('#root')
    .fadeOut(500, function () {
      $('#root').load('../partials/local-storage.html')
    })
    .fadeIn(300)
})
