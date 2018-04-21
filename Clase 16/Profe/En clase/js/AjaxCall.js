var AjaxCall = (function () {
  var exposed = {}

  exposed.getData = function (url, cbk) {
    $.ajax(url)
      .done(function (data) {
        cbk(null, data)
      })
      .fail(function (error) {
        cbk(error)
      })
  }

  return exposed
})()
