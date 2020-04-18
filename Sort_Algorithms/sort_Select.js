//algoritmo de ordenamiento: seleccion
//
// complejidad computacional:
// tiempo maximo: O(n^2)
// tiempo promedio: O(n^2)
// timepo minimo: O(n^2)
// espacio : O(1)

function selectSort(arr) {
    if (!arr) {return [] }
    const swap = (arr, ind1, ind2) => {[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]}
    for (let i=0; i<arr.length-1; i++) {
        let minInd=i
        for (let j=i+1; j<arr.length; j++) {
            if (arr[minInd]>arr[j]) { minInd = j }
        }
        if (minInd!==i) { swap(arr, minInd, i) }
    }
    return arr
}

console.log("insertionSelect")
let numeros=[1,5,-1,10,-1,-10]
console.log(selectSort(numeros))
console.log(selectSort([1,2]))
console.log(selectSort([1,-2]))
console.log(selectSort([2]))
console.log(selectSort([2,1,0]))
console.log(selectSort([2,1,0,-1,-20,100]))
console.log(selectSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(selectSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(selectSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))