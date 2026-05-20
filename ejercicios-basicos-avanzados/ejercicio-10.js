const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(numberList) {
  let sumaTotal = 0
  let media
    for (let i = 0; i < numberList.length; i++) {
        sumaTotal += numberList[i]
    }
    media = sumaTotal/numberList.length
    return media
}

console.log(average(numbers));
