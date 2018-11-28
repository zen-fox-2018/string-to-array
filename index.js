//your code here

function StringToArray(str) {
    let arrOutput = []
    let arrRow=[]
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ',') {
            arrOutput.push(arrRow)
            arrRow =[]
        } else if (i == str.length - 1){
            arrRow.push(str[i])
            arrOutput.push(arrRow)
        }
        else {
            arrRow.push(str[i])
        }
    }
    return arrOutput
}

console.log(StringToArray("aqrst,ukaei,ffooo"))

console.log(StringToArray("qwer,ytui,asdf,ghjk"))
