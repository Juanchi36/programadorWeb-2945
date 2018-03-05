/*# Crear una función constructora de objetos películas
​
- El objeto película deberá tener un id (generado automáticamente), titulo, año, director y actores (deberá ser un array).
- Deberá tener métodos para editar todas sus propiedades (get y set), menos su id, y para los actores tendrá que ir agregando uno a uno.
- Agregar dos actores por película.
*/
function Movie (titulo, año, director, actores) {
  var id = Math.floor(Math.random() * 1000000000000)
  this.getId = function () {
    return id
  }

  this.getTitulo = function () {
    return titulo
  }
  this.setTitulo = function (tituloPeli) {
    titulo = tituloPeli
  }
  this.getAño = function () {
    return año
  }
  this.setAño = function (añoPeli) {
    año = añoPeli
  }
  this.getDirector = function () {
    return director
  }
  this.setDirector = function (directorPeli) {
    director = directorPeli
  }
  this.getActores = function () {
    return actores
  }
  this.setActores = function () {
    var actoresPeli = []
    actoresPeli[0] = prompt('Ingrese el primer actor/actriz de la película')
    actoresPeli[1] = prompt('Ingrese el segund@ actor/acrtiz')
    actores = actoresPeli
  }
}

var newMovie = new Movie('Volver al futuro', 1985, 'Robert Zemeckis', [
  'Michael Fox',
  'Chistopher Lloyd'
])

newMovie.setActores()
console.log(newMovie.getId())
console.log(newMovie.getTitulo())
console.log(newMovie.getAño())
console.log(newMovie.getDirector())
console.log(newMovie.getActores())
