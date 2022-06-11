function wordPuzzle(text) {
  return text.replace(/[aeiou]/gi,"-") //gi:case insensitve, g: case sensitive
}

// function wordPuzzle(text) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const textArr = text.split("");
//   const puzzleArr =textArr.map(function(letter) {
//     if (vowels.includes(letter)) {
//       return "-";
//     } else {
//       return letter;
//     }
//   });
//   return puzzleArr.join("");
// };

// function wordPuzzle(text) {
//   const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
//   const textArr = text.split("");
//   let newArr = [];
//   textArr.forEach(function(letter) {
//     if (vowels.includes(letter)) {
//       newArr.push("-");
//     } else {
//       newArr.push(letter);
//     }
//   });
//   return newArr.join("");
// }