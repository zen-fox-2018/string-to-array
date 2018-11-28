//your code here
function convertStringtoArr(input) {
    let arr = input.split(',')
    let result = []
    arr.forEach(element => {
        let arr = []
        for (let j = 0 ; j < element.length ; j++) {
            arr.push(element[j])
        }
        result.push(arr)
    });
    return result
}

let kata = "aqrst,ukaei,ffooo"
let kata2 = "qwer,tyui,asdf,ghjk"
console.log(convertStringtoArr(kata))
console.log(convertStringtoArr(kata2))
