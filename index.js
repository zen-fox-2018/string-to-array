//your code here
function stringToArray(str){
  let output = []
  let arrStr = str.split(',')
  for (let i = 0 ; i < arrStr.length ; i++){
    let arrDalam = []
    for (let j = 0 ; j <arrStr[i].length ; j++){
      arrDalam.push(arrStr[i][j])
    }
    output.push(arrDalam)
  }
  return output
}

console.log(stringToArray("aqrst,ukaei,ffooo"))
console.log(stringToArray("qwer,tyui,asdf,ghjk"))
