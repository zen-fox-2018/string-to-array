function stringToArray(str) {
    str = str.split(',')
    // let result = []
    // str.forEach(e => {
    //     result.push(e.split(''))
    // });
    return str.map(e => {
        return e.split('')
    })
    // return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));