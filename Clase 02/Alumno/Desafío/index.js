var daysOfTheWeek = [
  'Lunes',
  'Martes',
  'Miércoles',
  'Jueves',
  'Viernes',
  'Sábado',
  'Domingo'
]

for (var i = 0; i < daysOfTheWeek.length; i++) {
  if (daysOfTheWeek[i] === 'Sábado' || daysOfTheWeek[i] === 'Domingo') {
    console.log(daysOfTheWeek[i], ' es fin de semana!!!')
  } else {
    console.log(daysOfTheWeek[i], ' no es fin de semana')
  }
}
