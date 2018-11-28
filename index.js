//your code here
function stringToArray (string) {
    var splitComa = string.split (",");
    var result = [];

    for (var i = 0; i <= splitComa.length-1; i++) {
        var split = splitComa[i].split("");
        result.push(split);
    }
    return result;
}

console.log (stringToArray ("aqrst,ukaei,ffooo"));
/*
[
    ["a", "q", "r", "s", "t"],
    ["u", "k", "a", "e", "i"],
    ["f", "f", "o", "o", "o"]
]
*/
console.log (stringToArray ("qwer,tyui,asdf,ghjk"));
/*
[
    ["q", "w", "e", "r"],
    ["t", "y", "u", "i"],
    ["a", "s", "d", "f"],
    ["g", "h", "j", "k"]
]
*/
