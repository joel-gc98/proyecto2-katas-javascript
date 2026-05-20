const mixedElements = [
  6,
  1,
  "Marvel",
  1,
  "hamburguesa",
  "10",
  "Prometeo",
  8,
  "Hola mundo",
];

function averageWord(list) {
  let sumaTotal = 0
  for (let i = 0; i < list.length; i++) {
    if (typeof list[i] === "string") {
      let numeroLetras = list[i].length
      sumaTotal += numeroLetras
    } else{
      sumaTotal += list[i]
    }
  }
  return sumaTotal / list.length
}

console.log(averageWord(mixedElements));
