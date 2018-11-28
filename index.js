//your code here
function stringToArray(input){

    let arr = []
    let temp = ''
    for(let i=0; i<input.length; i++){
        if(input[i].toLowerCase() !== input[i].toUpperCase()){
            temp += input[i]
        }else if(input[i].toLowerCase() === input[i].toUpperCase() && temp.length !== 0){
            arr.push(temp)
            temp = ''
        }
    }
    if (temp.length !== 0){
        arr.push(temp)
    }
    
    let row = []
    for(let i=0; i<arr.length; i++){
        let col = []
        for(let j=0; j<arr[i].length;j++){
            col.push(arr[i][j])
        }
        row.push(col)
    }
  
    return row
}

console.log(stringToArray('asds,sjhd,asas,asdk, djhj'))
console.log(stringToArray('nama,saya,siap'))
