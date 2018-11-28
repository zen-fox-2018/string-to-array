//your code here
//your code here
function stringToArray(str) {
  var arrStr = str.split(',')
  var result = [];
  for (var i = 0; i < arrStr.length; i++) {
    var innerResult = [];
    for (var j = 0; j < arrStr[i].length; j++) {
      innerResult.push(arrStr[i][j]);
    }
    result.push(innerResult);
  }
  return result;
}

console.log(stringToArray('abcd,aged,just'));
