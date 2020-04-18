//algoritmo de ordenamiento: Quick
//
// complejidad computacional:
// tiempo maximo: O(n*log(n))
// tiempo promedio: O(n*log(n))
// timepo minimo: O(n*log(n))
// espacio : O(n)
function merge(arrUno, arrDos) {
    let newArray = []
    let i = 0, j = 0 
    while (i!==arrUno.length && j!==arrDos.length) {
        if (arrUno[i]===arrDos[j]) {
            newArray.push(arrDos[j++])
            newArray.push(arrUno[i++])
        } else if (arrUno[i]<arrDos[j]){
            newArray.push(arrUno[i++])
        } else {
            newArray.push(arrDos[j++])
        }
    }
    while (i!==arrUno.length) {
        newArray.push(arrUno[i++])
    }
    while (j!==arrDos.length) {
        newArray.push(arrDos[j++]) 
    }
    return  newArray
}
// test
// console.log(merge([1,3,5,7],[2,4,6,8]))
// console.log(merge([1,3,5,7],[2,4]))
// console.log(merge([1,3],[2,4,6,8]))
// console.log(merge([1,3,3,3],[2,3,3,8]))
//algoritmo de ordenamiento: Merge
//
// complejidad computacional:
// tiempo maximo: O(n*log(n))
// tiempo promedio: O(n*log(n))
// tiempo minimo: O(n*log(n))
// espacio : O(n)
function mergeSort(arr) {
    if (!arr || arr.length<2) {return arr} 
    let medio = Math.floor((arr.length)/2)
    let arrIzq = mergeSort(arr.slice(0,medio))
    let arrDer = mergeSort(arr.slice(medio))
    return merge(arrIzq, arrDer)
}

console.log("MergeSort")
let numeros=[1,5,-1,10,-1,-10]
console.log(mergeSort(numeros))
console.log(mergeSort([1,2]))
console.log(mergeSort([1,-2]))
console.log(mergeSort([2]))
console.log(mergeSort([2,1,0]))
console.log(mergeSort([2,1,0,-1,-20,100]))
console.log(mergeSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(mergeSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(mergeSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))