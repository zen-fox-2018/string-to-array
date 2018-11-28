function stringToArray(string) {
    let arrayInput = string.split(',')
    let hasil = []
    for (let i = 0; i < arrayInput.length; i++) {
        let hasilDalam = []
        for (let j = 0; j < arrayInput[i].length; j++){
            hasilDalam.push(arrayInput[i][j])
        }
        hasil.push(hasilDalam)
    }
    return hasil
}

console.log(stringToArray('aqrst,ukaei,ffooo'))
console.log(stringToArray('qwer,tyui,asdf,ghjk'))