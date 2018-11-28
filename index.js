//your code here
function stringToArray(input) {
    let output = []
    let pisah = input.split(',')
    // console.log(pisah);
    
    for (let i = 0; i < pisah.length; i++) {
        let box = []
        for (let j = 0; j < pisah[i].length; j++) {
            box.push(pisah[i][j])
            
        }
        output.push(box)
        
    }
    
    return output
}


console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwer,tyui,asdf,ghjk'));
