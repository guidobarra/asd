//algoritmo de ordenamiento: radix
//no necesita comparaciones, es aplicable a numeros (para este caso numeros enteros positvos),
//palabras, fechas e incluso numeros con coma y negativos si agrega un poco de logica.
//numeros negativos: se tendria que separar a los negativos en un array aparte y 
//despues aplicar el RADIX, hacer un revert del array y multiplicarlo por -1, finaliza 
//concatenando con el arrat positivo. 
//numeros con coma: se tendria que mejorar las funciones "countDigit" y "getDigit" para 
//que acepten numeros con coma y listo

// complejidad computacional:
// tiempo maximo: O(n*k)
// tiempo promedio: O(n*k)
// timepo minimo: O(n*k)
// espacio : O(n + k)


// [222,333,4444,51212] ====> 5
function mostDigits(nums) {
    var maxDigit = 0
    for (let num of nums) {
        maxDigit = Math.max(countDigit(num),maxDigit)
    }
    return maxDigit;
}

// 12345,0===>5
// 12345,1===>4
// 12345,2===>3
// 12345,3===>2
// 12345,4===>1
// 12345,5===>0
function getDigit(num, i) {
    return Math.floor(Math.abs(num)/Math.pow(10,i))%10
}

// 1==>1
// 25==>2
// 314==>3
function countDigit(num) {
    if (num === 0) {return 1}
    return Math.floor(Math.log10(Math.abs(num))) + 1
}

function radixSort(arr) {
    let maxDigit = mostDigits(arr)
    let arrLength = arr.length
    for (let k=0; k<maxDigit; k++) {
        let digitBuckets = Array.from({length: 10}, () => [])//inicia 10 array con []
        for(let i=0; i<arrLength;i++) {
            digitBuckets[getDigit(arr[i],k)].push(arr[i])
        }
        arr = [].concat(...digitBuckets)//transforma n array a uno solo 
    }
    return arr
}
console.log("RadixSort")
let numeros=[1,5,-1,10,-1,-10]
console.log(radixSort(numeros))
console.log(radixSort([1,2]))
console.log(radixSort([1,-2]))
console.log(radixSort([2]))
console.log(radixSort([2,1,0]))
console.log(radixSort([2,1,0,-1,-20,100]))
console.log(radixSort([1,2,3,4,5,6,7,7,8,9,20,-1]))
console.log(radixSort([-1,-2,-3,-4,-5,-6,-7,-7,-8,-9,-20,-1]))
console.log(radixSort([-1,-2,-3,-4,-5,-6,-7,7,8,9,20,1]))
console.log(radixSort([23,345,5467,12,2345,9852]))
