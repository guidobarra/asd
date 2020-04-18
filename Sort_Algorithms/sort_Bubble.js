
//algoritmo de ordenamiento: burbujeo optimizado
//
// complejidad computacional:
// tiempo maximo: O(n^2)
// tiempo promedio: O(n^2)
// tiempo minimo: O(n)
// espacio : O(1)

function bubbleSort(arr) {
    if (!arr) {return []}
    const swap = (arr, ind1, ind2) => {[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]; return false}
    for(let i=0;i<arr.length-1;i++) {
        let noSwap=true
        for(let j=0;j<arr.length-1-i;j++) {
            if (arr[j]>arr[j+1]) { noSwap = swap(arr, j, j+1) }
        }
        if (noSwap) { break }
    }
    return arr
}

console.log("insertionBubble")
let numeros=[1,5,-1,10,-1,-10]
console.log(bubbleSort(numeros))
console.log(bubbleSort([1,2]))
console.log(bubbleSort([1,-2]))
console.log(bubbleSort([2]))
console.log(bubbleSort([2,1,0]))
console.log(bubbleSort([2,1,0,-1,-20,100]))
console.log(bubbleSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(bubbleSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(bubbleSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))