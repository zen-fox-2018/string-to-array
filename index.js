function stringToarray(str){
    var cek = str.split(',') 
    var result = []
    for(let i = 0; i < cek.length; i ++){
        var holder = []
        for(let j = 0; j < cek[i].length; j ++){
            holder.push(cek[i][j])
        }
        result.push(holder)
    }
    return result
}
console.log(stringToarray('aqrst,ukaei,ffooo'))
console.log(stringToarray('qwer,tyui,asdf,ghjk'))