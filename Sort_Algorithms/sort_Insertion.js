
//algoritmo de ordenamiento: insersion
//
// complejidad computacional:
// tiempo maximo: O(n^2)
// tiempo promedio: O(n^2)
// tiempo minimo: O(n)
// espacio : O(1)

function insertionSort(arr){
    if (!arr || !arr.length) {return []}
    for (let i=0; i<arr.length-1; i++) {
        let posInsertion = i
        let elem = arr[i+1]
        while(arr[posInsertion]>elem && posInsertion>=0) {
            arr[posInsertion+1] = arr[posInsertion--]
            //posInsertion--
        }
        arr[posInsertion+1] = elem
    }
    return arr
}

//como lo hizo el del curso
function insertionSortF(arr){
    if (!arr || !arr.length) {return []}
    for (var i=1; i<arr.length; i++) {
        let elem = arr[i]
        for (var j=i-1;arr[j]>elem && j>=0;j--) {
            arr[j+1] = arr[j]
        }
        arr[j+1] = elem
    }
    return arr
}

console.log("insertionSort")
let numeros=[1,5,-1,10,-1,-10]
console.log(insertionSort(numeros))
console.log(insertionSort([1,2]))
console.log(insertionSort([1,-2]))
console.log(insertionSort([2]))
console.log(insertionSort([2,1,0]))
console.log(insertionSort([2,1,0,-1,-20,100]))
console.log(insertionSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(insertionSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(insertionSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))
console.log("insertionSortF")
console.log(insertionSortF(numeros))
console.log(insertionSortF([1,2]))
console.log(insertionSortF([1,-2]))
console.log(insertionSortF([2]))
console.log(insertionSortF([2,1,0]))
console.log(insertionSortF([2,1,0,-1,-20,100]))
console.log(insertionSortF([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(insertionSortF([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(insertionSortF([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))