const capitals = {
  Spain: 'Madrid',
  France: 'Paris',
  Italy: 'Rome',
  Germany: 'Berlin',
  Portugal: 'Lisbon',
  Poland: 'Warsaw',
  Greece: 'Athens',
  Austria: 'Vienna',
  Hungary: 'Budapest',
  Ireland: 'Dublin'
};

// Comprobamos si el pais existe antes de devolver su capital.
function getCapital(country) {
  if (capitals[country] !== undefined) {
    return capitals[country];
  } else {
    return 'No se encuentra la capital de ese pais';
  }
}

console.log(getCapital('Spain'));
console.log(getCapital('France'));
console.log(getCapital('Japan'));