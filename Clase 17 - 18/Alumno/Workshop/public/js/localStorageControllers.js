$(document).ready(function () {
  $('#localStorage').click(function () {
    $('#root')
      .fadeOut(500, function () {
        $('#root').load('../partials/local-storage.html')
      })
      .fadeIn(300)
  })
  $('#root').on('click', '.btn-erase', function (event) {
    event.stopImmediatePropagation()
    var index = event.target.id - 1
    deleteNameInLocalStorage(index)
    $('#tr' + event.target.id).remove()
  })
  var number = 0
  var localPeople = localStorage.getItem('peopleList')
  var parsedPeople
  var caracterObjet = {}
  if (JSON.parse(localPeople)) {
    parsedPeople = JSON.parse(localPeople)
  } else {
    parsedPeople = []
  }
  showCaracters = function () {
    for (var i = 0; i < parsedPeople.length; i++) {
      number++
      var name = parsedPeople[i].name
      var gender = parsedPeople[i].gender
      var height = parsedPeople[i].height
      var eye_color = parsedPeople[i].eye_color
      var mass = parsedPeople[i].mass

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
          '</td><td><button type="button" class="btn btn-primary btn-erase" id="' +
          number +
          '">eliminar</button></td>  '
      )
    }
  }
  showCaracters()

  function deleteNameInLocalStorage (index) {
    var localPeople = localStorage.getItem('peopleList')
    var parsedPeople = JSON.parse(localPeople)
    delete parsedPeople[index]

    if (!parsedPeople) {
      parsedPeople = []
      var stringfiedPeople = JSON.stringify(parsedPeople)
      localStorage.setItem('peopleList', stringfiedPeople)
    }

    var stringfiedPeople = JSON.stringify(parsedPeople)
    localStorage.setItem('peopleList', stringfiedPeople)
  }
})
