function stringArr (input) {
  var split = [];
  var tempKata = []

  for (var i = 0; i < input.length; i++) {
    if (input[i] !== ',') {
      tempKata.push(input[i]);
    } else if (input[i] === ',') {
      split.push(tempKata);
      tempKata = [];
    }
  }
  if (tempKata.length > 0) {
    split.push(tempKata);
  }
  return split;
}

console.log(stringArr("aqrst,ukaei,ffooo"));
console.log(stringArr("qwer,tyui,asdf,ghfj"));