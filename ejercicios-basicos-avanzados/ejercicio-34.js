const movies = [
  { title: 'Inception', duration: 148 },
  { title: 'The Dark Knight', duration: 152 },
  { title: 'Interstellar', duration: 169 },
  { title: 'Dunkirk', duration: 106 },
  { title: 'The Prestige', duration: 130 },
  { title: 'Memento', duration: 113 },
  { title: 'Batman Begins', duration: 140 },
  { title: 'The Dark Knight Rises', duration: 164 },
  { title: 'Tenet', duration: 150 },
  { title: 'Insomnia', duration: 118 }
];

// Sumamos todas las duraciones y dividimos entre el numero de peliculas.
function averageMovieDuration(movies) {
  let totalDuration = 0;

  for (let i = 0; i < movies.length; i++) {
    totalDuration = totalDuration + movies[i].duration;
  }

  let average = totalDuration / movies.length;

  return average;
}

console.log(averageMovieDuration(movies));