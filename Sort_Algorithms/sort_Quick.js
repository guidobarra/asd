//algoritmo de ordenamiento: Quick
//
// complejidad computacional:
// tiempo maximo: O(n*log(n))
// tiempo promedio: O(n*log(n))
// timepo minimo: O(n^2)
// espacio : O(log(n))

function pivot(arr, start=0, end=arr.length-1){
    let pivot = arr[start]
    let indexPivot = start
    const swap = (arr, ind1, ind2) => {[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]}
    for (let i = start +1;i<= end;i++) {
        if (pivot>arr[i]) { swap(arr, i, ++indexPivot) }
    }
    if (pivot>arr[indexPivot]) { swap(arr, start, indexPivot) }
    return indexPivot
}

function quickSort(arr, start=0, end=arr.length-1) {
    if(start < end) {
        let pivodIndex = pivot(arr,start,end)
        //left
        quickSort(arr,0,pivodIndex-1)
        //right
        quickSort(arr,pivodIndex+1,end)
    }
    return arr
}
// let arrayUno =  [26,23,27,44,17,47,39,42,43,1]
// let arrayDos =  [28,41,4,11,16,1,40,14,36,37,42,18]
// console.log(pivot(arrayUno))//3
// console.log(pivot(arrayDos))//6
// console.log(arrayUno)// [1,23,17,26,27,47,39,42,43,44] 
// console.log(arrayDos)// [18,4,11,16,1,14,28,41,36,37,42,40]
// console.log(pivot(arrayDos.slice(0,2)))
// console.log(arrayDos)

console.log("QuickSort")
let numeros=[1,5,-1,10,-1,-10]
console.log(quickSort(numeros))
console.log(quickSort([1,2]))
console.log(quickSort([1,-2]))
console.log(quickSort([2]))
console.log(quickSort([2,1,0]))
console.log(quickSort([2,1,0,-1,-20,100]))
console.log(quickSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(quickSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(quickSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))
console.log(quickSort([26,23,27,44,17,47,39,42,43,1]))
console.log(quickSort([28,41,4,11,16,1,40,14,36,37,42,18]))
console.log(quickSort([4,6,9,1,2,5,3]))
// [4,6,9,1,2,5,3]
// [3,2,1,4,6,9,5]
//        4
//  3,2,1   6,9,5
//      3     6
//  2,1     5   9
//    2
//  1     