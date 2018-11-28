function stringToArray(input) {
  let inputComma = input.split(",")
  let array = []
  for (let i = 0; i < inputComma.length; i++) {
    array.push(inputComma[i].split(""))
  }
  return array
}

console.log(stringToArray("qwer,tyui,asdf,ghjk"));

// function stringToArrayNoSplit(input) {
//   let inputComma = []
//   let str = ""
//   let array = []
//   for (let i = 0; i < input.length; i++) {
//     if (input[i] === ",") {
//       inputComma.push(str)
//       str = ""
//     }
//     else {
//       str = str+input[i]
//     }
//   }
//
//   for (let i = 0; i < inputComma.length; i++) {
//     let temp = []
//     for (let j = 0; j < inputComma[i].length; j++) {
//       temp.push(inputComma[i][j])
//     }
//     array.push(temp)
//   }
//   return array
// }
//
// console.log(stringToArrayNoSplit("qwer,tyui,asdf,ghjk"));

// function stringToArrayMap(input) {
//   let inputComma = input.split(",")
//
//   return inputComma.map(function(element) {
//     return element.split("")
//   })
// }
//
// console.log(stringToArrayMap("qwer,tyui,asdf,ghjk"));

