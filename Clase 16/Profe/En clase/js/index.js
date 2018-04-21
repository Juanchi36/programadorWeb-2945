$(document).ready(function () {
  var url = 'https://swapi.co/api/starships/'
  console.log('Empiezo a pedir info')

  AjaxCall.getData(url, showStarshipsNames)
})

function showStarshipsNames (error, data) {
  if (!error) {
    var starships = data.results
    for (var i = 0; i < starships.length; i++) {
      var starship = starships[i]
      console.log(starship.name)
    }
    if (data.next) {
      $('#showMore').one('click', function () {
        AjaxCall.getData(data.next, showStarshipsNames)
      })
    } else {
      $('#showMore').attr('disabled', true)
    }
  } else {
    console.log('Hay un error', error)
  }
}

// Pedir todo de una

// function getData (url) {
//   $.ajax(url)
//     .done(function (data) {
//       if (data) {
//         showStarshipsNames(data.results)
//         if (data.next) {
//           getData(data.next)
//         } else {
//           console.log('Termine de pedir data')
//         }
//       }
//     })
//     .fail(function (error) {
//       console.log('error', error)
//     })
// }
