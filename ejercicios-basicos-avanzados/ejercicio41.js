
function rollDice(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Ejemplos
console.log(rollDice(6))
console.log(rollDice(8))
console.log(rollDice(12))