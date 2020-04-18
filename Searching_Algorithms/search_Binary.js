
// Busca el valor pasado como parametro dentro del 
// array y retorna el indice de la ubicacion si lo 
// encontro. Si no lo encontro retorna -1.
// El array pasado como parametro tiene que estar ordenado
// complejidad computacional:
// maximo: O(log(n))
// promedio: O(log(n))
// minimo: O(1)
function binarySearch(arr, val) {
    if (!arr || !arr.length) {return -1}
    let der=0
    let izq=arr.length-1
    while (der<=izq) {
        let medio=Math.floor((der + izq)/2)
        if (arr[medio]===val) {return medio}
        else if (arr[medio]<val) {der=medio+1}
        else {izq=medio-1}
    }
    return -1
}

var numerosOrd=[1,2,3,5,6,7,8,11,14,33,222,1000]

console.log(binarySearch(numerosOrd, 3))
console.log(binarySearch(numerosOrd, 11))
console.log(binarySearch(numerosOrd, 1000))
console.log(binarySearch(numerosOrd, 50))
console.log(binarySearch(numerosOrd, -50))
console.log(binarySearch([-50], -50))