var url = 'https://swapi.co/api/planets/'
$(document).ready(function () {
  getData(url)

  function getData (url) {
    $.ajax(url)
      .done(function (data) {
        showPlanets(data)
        if (data.next) {
          $('#showMore').one('click', function () {
            data = $.ajax(data.next)
              .done(function (data) {
                getData(data.next)
              })
              .fail(function () {
                alert('error')
              })
          })
        } else {
          console.log('Fin de la carga')
          $('#showMore').attr('disabled', true)
        }
      })
      .fail(function () {
        alert('error')
      })
  }

  function showPlanets (data) {
    if (data) {
      var planets = data.results
      for (var i = 0; i < planets.length; i++) {
        console.log(planets[i].name)
      }
    }
  }
})
