//your code here
function stringToArray (str) {
  str = str.split(',');
  for (let i = 0; i < str.length; i++) {
    str[i] = str[i].split('');
  }
  return str;
}

console.log(stringToArray('aqrst,ukaei,ffooo'));
console.log(stringToArray('qwert,tyui,asdf,ghjk'));
