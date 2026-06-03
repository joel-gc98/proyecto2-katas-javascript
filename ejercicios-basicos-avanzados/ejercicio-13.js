const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];

function nameFinder(nameList, name) {
  const position = nameList.indexOf(name);

  if (position !== -1) {
    return {
      exists: true,
      position: position
    };
  } else {
    return {
      exists: false,
      position: -1
    };
  }
}

// Pruebas
console.log(nameFinder(names, 'Logan'));
console.log(nameFinder(names, 'Wanda'));