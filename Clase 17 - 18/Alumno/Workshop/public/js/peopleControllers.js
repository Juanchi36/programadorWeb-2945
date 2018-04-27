$(document).ready(function () {
  $('#people').click(function () {
    $('#root')
      .fadeOut(500, function () {
        $('#root').load('../partials/people.html')
      })
      .fadeIn(300)
  })

  var url = 'https://swapi.co/api/people/'
  var number = 0
  var alterNumber = 75
  id = 0
  getData(url)

  function getData (url) {
    $.ajax(url)
      .done(function (data) {
        showCaracters(data.results)

        if (data.next) {
          url = data.next
          $('#seeMore').one('click', function () {
            $.ajax(data.next)
              .done(function (data) {
                getData(url)
              })
              .fail(function () {
                console.log('Error de comunicación')
              })
          })
        } else {
          $('#seeMore').attr('disabled', true)
        }
      })
      .fail(function () {
        console.log('Error de comunicación')
      })
  }

  var showCaracters = function (caracters) {
    for (var i = 0; i < caracters.length; i++) {
      number++
      if (number < 75) {
        if (number === 17 || number === 35 || number === 47) {
          number++
        }

        var name = caracters[i].name
        var gender = traslate(caracters[i].gender)
        var height = traslateHeightMass(caracters[i].height)
        var eye_color = traslate(caracters[i].eye_color)
        var mass = traslateHeightMass(caracters[i].mass)
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
            eye_color +
            '</td><td><button type="button" class="btn btn-primary btn-save" id="' +
            number +
            '">guardar</button></td>  '
        )
      }
      if (number === 75) {
        var gender = traslate(caracters[i].gender)
        var height = traslateHeightMass(caracters[i].height)
        var eye_color = traslate(caracters[i].eye_color)
        var mass = traslateHeightMass(caracters[i].mass)

        $('#tableBody').append(
          '<tr id="tr47"><th scope="row" id="th-number">' +
            47 +
            '</th><td>' +
            name +
            '</td><td>' +
            gender +
            '</td><td>' +
            height +
            ' cm</td><td>' +
            mass +
            ' kg</td><td>' +
            eye_color +
            '</td><td><button type="button" class="btn btn-primary btn-save" id="47">guardar</button></td>  '
        )
      }
      if (number > 75) {
        var name = caracters[i].name
        var gender = traslate(caracters[i].gender)
        var height = traslateHeightMass(caracters[i].height)
        var eye_color = traslate(caracters[i].eye_color)
        var mass = traslateHeightMass(caracters[i].mass)
        $('#tableBody').append(
          '<tr id="tr' +
            alterNumber +
            '"><th scope="row" id="th-number' +
            alterNumber +
            '">' +
            alterNumber +
            '</th><td>' +
            name +
            '</td><td>' +
            gender +
            '</td><td>' +
            height +
            ' cm</td><td>' +
            mass +
            ' kg</td><td>' +
            eye_color +
            '</td><td><button type="button" class="btn btn-primary btn-save" id="' +
            alterNumber +
            '">guardar</button></td>  '
        )
        alterNumber++
      }
    }
  }
})
var traslateHeightMass = function (text) {
  if (text === 'unknown') {
    return '?'
  } else {
    return text
  }
}
var traslate = function (text) {
  switch (text) {
    case 'unknown':
      return 'desconocido'
    case 'male':
      return 'hombre'
    case 'female':
      return 'mujer'
    case 'n/a':
      return 'no aplica'
    case 'blue':
      return 'azul'
    case 'yellow':
      return 'amarillo'
    case 'red':
      return 'rojo'
    case 'brown':
      return 'marron'
    case 'blue-gray':
      return 'azul-gris'
    case 'black':
      return 'negro'
    case 'white':
      return 'blanco'
    case 'orange':
      return 'naranja'
    case 'hazel':
      return 'avellana'
    case 'dark':
      return 'oscuro'
    case 'pink':
      return 'rosa'
    case 'red, blue':
      return 'rojo-azul'
    case 'gold':
      return 'dorado'
    case 'green, yellow':
      return 'verde-amarillo'
    default:
      return text
  }
}
$('#root').on('click', function (event) {
  event.stopImmediatePropagation()

  var urlPeople = 'https://swapi.co/api/people/' + event.target.id
  $.ajax(urlPeople)
    .done(function (data) {
      var comparePeople = localStorage.getItem('peopleList')
      var parsedComparePeople
      var nameArray = []
      if (JSON.parse(comparePeople)) {
        parsedComparePeople = JSON.parse(comparePeople)
      } else {
        parsedComparePeople = []
      }
      for (var i = 0; i < parsedComparePeople.length; i++) {
        var caracterName = parsedComparePeople[i].name
        nameArray.push(caracterName)
      }
      if (nameArray.indexOf(data.name) === -1) {
        addCaractersInLocalStorage(data)
        id++
      }
    })
    .fail(function () {
      console.log('Error de comunicación')
    })
  $('#tr' + event.target.id).remove()
})

function addCaractersInLocalStorage (data) {
  var localPeople = localStorage.getItem('peopleList')
  var parsedPeople
  var caracterObjet = {}
  if (JSON.parse(localPeople)) {
    parsedPeople = JSON.parse(localPeople)
  } else {
    parsedPeople = []
  }
  caracterObjet.id = id
  var name = data.name
  caracterObjet.name = name
  var gender = traslate(data.gender)
  caracterObjet.gender = gender
  var height = traslateHeightMass(data.height)
  caracterObjet.height = height
  var mass = traslateHeightMass(data.mass)
  caracterObjet.mass = mass
  var eye_color = traslate(data.eye_color)
  caracterObjet.eye_color = eye_color
  parsedPeople.push(caracterObjet)
  var stringfiedPeople = JSON.stringify(parsedPeople)
  localStorage.setItem('peopleList', stringfiedPeople)
}
