const tracks = [
  { title: 'Enter Sandman', genre: 'Metal' },
  { title: 'Back in Black', genre: 'Rock' },
  { title: 'Bohemian Rhapsody', genre: 'Rock' },
  { title: 'Blinding Lights', genre: 'Pop' },
  { title: 'Old Town Road', genre: 'Country' },
  { title: 'Smells Like Teen Spirit', genre: 'Grunge' },
  { title: 'Bad Guy', genre: 'Pop' },
  { title: 'Thunderstruck', genre: 'Rock' },
  { title: 'Hotel California', genre: 'Rock' },
  { title: 'Stairway to Heaven', genre: 'Rock' }
];

// Si el genero no existe, creamos un array para guardar sus canciones.
const songsByGenre = {};

for (let i = 0; i < tracks.length; i++) {
  let genre = tracks[i].genre;
  let title = tracks[i].title;

  if (songsByGenre[genre] === undefined) {
    songsByGenre[genre] = [];
  }

  songsByGenre[genre].push(title);
}

console.log(songsByGenre);