function stringToArray(str) {
    str = str.split(',')
    let result = []
    str.forEach(e => {
        result.push(e.split(''))
    });
    return result
}

console.log(stringToArray('aqrst,ukaei,ffooo'));