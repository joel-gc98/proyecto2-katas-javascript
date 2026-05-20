const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
    let longestWord = ""
    for (let index = 0; index < stringList.length; index++) {
        if (stringList[index].length > longestWord.length) {
            longestWord = stringList[index]
        }
    }
    return longestWord
}

console.log(findLongestWord(avengers));
