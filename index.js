function stringtoArray(input) {
    //your code here
    let result = [];
    let magicSplit = input.split(',')
  
    for (let i = 0; i < magicSplit.length; i++) {
      result.push(magicSplit[i].split(''))
    }
    
    return result
  }
  
  console.log(stringtoArray('aqrst,ukaei,ffooo'));
  console.log(stringtoArray('qwer,tyui,asdf,ghjk'));