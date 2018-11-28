function stringArray(input) {
  return input.split(',').map(x => x.split(''));
}

let input1 = 'aqrst,ukaei,ffooo'
let input2 = 'qwer,tyui,asdf,ghjk'

console.log(stringArray(input1));
console.log(stringArray(input2));