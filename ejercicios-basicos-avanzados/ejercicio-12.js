const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {

    const arraySinDuplicados = [];

    for (let item of list) {
        if (!arraySinDuplicados.includes(item)){
            arraySinDuplicados.push(item);
        }
    }

    return arraySinDuplicados;
}

console.log(removeDuplicates(duplicates));
