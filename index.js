//your code here
function stringToArray(input) {
    let len = input.split(',')
    let result = []
    for(let i = 0; i < len.length; i++) {
        let inner = []
        for(let j = 0; j < len[i].length; j++) {
            inner.push(len[i][j])
        }
        result.push(inner)
    }
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))
