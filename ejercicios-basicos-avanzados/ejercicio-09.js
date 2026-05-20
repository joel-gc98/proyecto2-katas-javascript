const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumNumbers(numberList) {
    let sumaTotal=0
    for (let i = 0; i < numberList.length; i++) {
        sumaTotal += numberList[i]
    }
    return sumaTotal
}

console.log(sumNumbers(numbers));
