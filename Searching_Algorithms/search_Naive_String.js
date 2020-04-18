

function naiveSearch(str, subStr) {
    if (!str || !subStr) {return 0}
    let fin=str.length - subStr.length
    let cantEnc=0
    if (fin<0) {return 0}
    //if (fin===0) {fin=1}// para el caso cuando son iguales.
    for (let i=0; i<=fin ;i++) {
        let encontrado=true
        for (let j=0; j<subStr.length;j++) {
            if (str[i+j]!==subStr[j] ) {
                encontrado=false
                break
            }
        }
        if (encontrado) {cantEnc++}
    }
    return cantEnc
}


console.log(naiveSearch("qa","a")) //1
console.log(naiveSearch("a","a"))  //1
console.log(naiveSearch("asdwwwwwasdrrrrrasd","asd")) //3
console.log(naiveSearch("lolollol","lol"))
console.log(naiveSearch("wasdwasdwqqqadcd","jumbo"))
console.log(naiveSearch("aqqqq","aaw"))
