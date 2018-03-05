/*# Crear una función constructora de objetos películas
​
- El objeto película deberá tener un id (generado automáticamente), titulo, año, director y actores (deberá ser un array).
- Deberá tener métodos para editar todas sus propiedades (get y set), menos su id, y para los actores tendrá que ir agregando uno a uno.
- Agregar dos actores por película.
*/
function Movie (title, year, director, casting) {
  var id = Math.floor(Math.random() * 1000000000000)
  this.getId = function () {
    return id
  }

  this.getTitle = function () {
    return title
  }
  this.setTitle = function (movieTitle) {
    title = movieTitle
  }
  this.getYear = function () {
    return year
  }
  this.setYear = function (movieYear) {
    year = movieYear
  }
  this.getDirector = function () {
    return director
  }
  this.setDirector = function (movieDirector) {
    director = movieDirector
  }
  this.getCasting = function () {
    return casting
  }
  this.setCasting = function () {
    var movieCasting = []
    movieCasting[0] = prompt('Ingrese el primer actor/actriz de la película')
    movieCasting[1] = prompt('Ingrese el segund@ actor/acrtiz')
    casting = movieCasting
  }
}

var newMovie = new Movie('Volver al futuro', 1985, 'Robert Zemeckis', [
  'Michael Fox',
  'Chistopher Lloyd'
])

newMovie.setCasting()
console.log(newMovie.getId())
console.log(newMovie.getTitle())
console.log(newMovie.getYear())
console.log(newMovie.getDirector())
console.log(newMovie.getCasting())
