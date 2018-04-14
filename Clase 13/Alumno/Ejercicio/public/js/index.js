$('#home').click(function () {
  $('#main').load('../partials/home.html')
})

$('#people').click(function () {
  $('#main').load('../partials/personajes.html')
})

$('#localStorage').click(function () {
  $('#main').load('../partials/guardado.html')
})

$('#contact').click(function () {
  $('#main').load('../partials/contacto.html'),
    console.log($('#submitButton').attr('disabled'))
})
