//your code here
function stringtoArray(input){
    var output=[]
    let temp=[]
    for(let i=0; i <= input.length ;i++){
       
        if(input[i] == ',' || i == input.length ){
            output.push(temp)
            temp = []
        }else{
            temp.push(input[i])
        }
        
    }
    return output
}
var input= 'aqrst,ukaei,ffooo'
console.log(stringtoArray(input))