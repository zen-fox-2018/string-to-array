function generate(string) {
    let str = string.split(`,`)
    let array = []
    let arrayTemp = []

    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str[0].length; j++) {
            arrayTemp.push(str[i][j])
        }
        array.push(arrayTemp)
        arrayTemp = []
        
    }
    return array
    
}

console.log(generate(`taqi,aduh,aziz,tiga`));

