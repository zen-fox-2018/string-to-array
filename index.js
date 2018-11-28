//your code here
function stringToArray(str) {
  let result = []
  let kata = ''
  let resultIndex = 0

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ',' || i === str.length - 1) {
      if (i === str.length - 1) {
        kata += str[i]  
      }
      result.push([])
      result[resultIndex].push(kata)
      kata = ''
      resultIndex++
    }
    else {
      kata += str[i]
    }
  }
  return result
}

console.log(stringToArray('aqrst,ukaei,ffoo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))