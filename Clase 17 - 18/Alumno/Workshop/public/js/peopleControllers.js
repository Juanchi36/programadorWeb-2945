$('#people').click(function () {
  $('#root')
    .fadeOut(500, function () {
      $('#root').load('../partials/people.html')
    })
    .fadeIn(300)
})
