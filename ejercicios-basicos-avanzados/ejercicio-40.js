
function findArrayIndex(array, text) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === text) {
      return i;
    }
  }

  return -1;
}

const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

// Ejemplos de findArrayIndex
console.log(findArrayIndex(mainCharacters, "Luke"));      // 0
console.log(findArrayIndex(mainCharacters, "Han Solo"));  // 2
console.log(findArrayIndex(mainCharacters, "Rey"));       // 4
console.log(findArrayIndex(mainCharacters, "Yoda"));      // -1


function removeItem(array, text) {
  const index = findArrayIndex(array, text);

  if (index !== -1) {
    array.splice(index, 1);
  }

  return array;
}

// Ejemplos de removeItem
console.log(removeItem(mainCharacters, "Luke"));
console.log(removeItem(mainCharacters, "Rey"));
console.log(removeItem(mainCharacters, "Yoda"));

