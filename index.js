
function stringToArray(input) {
    // console.log(input)
    let result = [];
    let strSplitted = input.split(",");
    for(let i = 0; i < strSplitted.length; i++) {
        result.push([]);
        for(let j = 0; j < strSplitted[i].length; j++) {
            result[i].push(strSplitted[i][j]);
        }
    }
    return result;
}
const str1 = "aqrst,ukaei,ffooo";
const str2 = "qwer,tyui,asdf,ghjk";

console.log(stringToArray(str1));
console.log(stringToArray(str2));