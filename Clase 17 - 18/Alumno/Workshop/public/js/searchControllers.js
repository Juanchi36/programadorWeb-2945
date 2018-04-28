$(document).ready(function () {
  $('#search-form').on('keypress', function (event) {
    if (event.which == 13) {
      var searchText = $('#search-form').val()
      searchCaracter(searchText)
    }
  })

  var searchCaracter = function (searchText) {
    var url = 'https://swapi.co/api/people/?search=' + searchText
    $.ajax(url)
      .done(function (data) {
        var caracter = data.results
        showCaracters(caracter)
      })
      .fail(function () {
        console.log('Error de comunicación')
      })
  }

  var showCaracters = function (caracter) {
    $('#root').children().remove()
    $('#root').append(
      '<div><table class="table table-dark"><thead><tr><th scope="col">#</th><th scope="col">Nombre</th><th scope="col">Género</th><th scope="col">Altura</th><th scope="col">Peso</th><th scope="col">Color de ojos</th></tr></thead><tbody id="tableBody"></tbody></table>'
    )
    for (var i = 0; i < caracter.length; i++) {
      var number = i + 1
      var name = caracter[i].name
      var gender = caracter[i].gender
      var height = caracter[i].height
      var eye_color = caracter[i].eye_color
      var mass = caracter[i].mass

      $('#tableBody').append(
        '<tr id="tr' +
          number +
          '"><th scope="row" id="th-number' +
          number +
          '">' +
          number +
          '</th><td>' +
          name +
          '</td><td>' +
          gender +
          '</td><td>' +
          height +
          ' cm</td><td>' +
          mass +
          ' kg</td><td>' +
          eye_color
      )
    }
  }
})
