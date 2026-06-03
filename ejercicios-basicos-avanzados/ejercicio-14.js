const palabras = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    const contador = {}

    for(const palabra of list){
        if(contador[palabra]){
            contador[palabra]++
        } else {
            contador [palabra] = 1
        }
    }
    return contador;
}

console.log(repeatCounter(palabras));
