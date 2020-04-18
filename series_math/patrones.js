// escribir un funcion llamada same, la cual acepta 2 array
// la funcion debera retornar true si cada valor en el array
// tiene su correspondiente valor cuadrado en el segundo array.

ejemplo:
// same([1,2,3], [4,1,9]) true
// same([1,2,3], [1,9]) false
// same([1,2,1], [4,4,1]) false

function some(numbers, numbersSquare) {
    if(!numbers || !numbersSquare || numbers.length!==numbersSquare.length){
        return false
    } 
    var sumTotalNumbers=0
    var sumTotalnNumbersSquare=0
    for (var i=0; i<numbers.length; i++) {
        sumTotalNumbers+= numbers[i]*numbers[i]
        sumTotalnNumbersSquare+= numbersSquare[i]
    }
    return sumTotalNumbers==sumTotalnNumbersSquare
}
console.log("text some")
console.log(some([1,2,3,10], [4,1,9,100]))
console.log(some([1,2,3], [1,9]))
console.log(some([1,2,1], [4,4,1]))
console.log(some([], []))
console.log(some(null, [4,4,1]))

function isAnagrama(strUno, strDos) {
    if(!strUno || !strDos || strUno.length!==strDos.length || !strUno.length){
        return false
    }
    var frecuenciaCharStrUno={}

    for (var i=0; i<strUno.length; i++) {
        //cuento la cantidad de veces que aparece un caracter
        frecuenciaCharStrUno[strUno[i]] ? frecuenciaCharStrUno[strUno[i]]+=1:frecuenciaCharStrUno[strUno[i]]=1
    }

    for (var char of strDos) {
        if (frecuenciaCharStrUno[char]) { //encuentro un caracter del strUno y lo decremento
            frecuenciaCharStrUno[char]-=1
        } else {return false}
    }
    return true
}
console.log("text anagramas")
console.log(isAnagrama("",""))
console.log(isAnagrama("aaz","zza"))
console.log(isAnagrama("anagram","nagaram"))
console.log(isAnagrama("rat","cat"))
console.log(isAnagrama("awesome","awesom"))
console.log(isAnagrama("qwerty","qeywrt"))
console.log(isAnagrama("texttwisttime","timetwisttext"))


function sumaZero(array) {
    if (!array || !array.length ) {
        return []
    }
    var frecuencia = {}
    for (var element of array) {
        element = element>0?element:-element
        frecuencia[element] ? frecuencia[element]++:frecuencia[element]=1
    }

    for (var element of array) {
        element = element>0?element:-element
        if (frecuencia[element] === 2) {
            return [-element, element]
        } 
    }
    return []
}

function sumaZeroOptimazer(array) {
    if (!array || !array.length ) {
        return []
    }
    var derecha=0
    var izquierda=array.length-1
    while (derecha<izquierda) {
        var suma = array[derecha] + array[izquierda]
        if (suma === 0) {
            return [array[derecha], array[izquierda]]
        } else if (suma>0){
            izquierda--
        } else {
            derecha++
        }
    }
    return []
}
console.log("-------------------------------------")

console.log(sumaZeroOptimazer([-3,-2,-1,0,1,2,3]))
console.log(sumaZeroOptimazer([-2,0,1,3]))
console.log(sumaZeroOptimazer([1,2,3]))
console.log("-------------------------------------")
console.log(sumaZero([-3,-2,-1,0,1,2,3]))
console.log(sumaZero([-2,0,1,3]))
console.log(sumaZero([1,2,3]))

// implementar un funcion llamada contarUnicosValores, la cual acepta
// un array ordenado, y cuenta el unico valores en el array. Puede a ver
// numeros negativos en el array, pero siempre estara ordenado.length

function contarUnicosValoresFor(array) {
    if (!array || !array.length) {
        return 0
    }
    let frecuenciaNumeros= {}
    for (let numero of array) {
        frecuenciaNumeros[numero]?frecuenciaNumeros[numero]+=1:frecuenciaNumeros[numero]=1
    }
    return Object.keys(frecuenciaNumeros).length
}

function contarUnicosValores(array) {
    if (!array || !array.length) {
        return 0
    }
    let cantValoresUnicos=1
    let valorAnt=array[0]
    for (let valorSig of array) {
        if( valorAnt !== valorSig ) {
            valorAnt=valorSig
            cantValoresUnicos++
        }
        
    }
    return cantValoresUnicos
}

console.log("-------------------------------------")
console.log(contarUnicosValoresFor([1,1,1,1,1,2])) //2
console.log(contarUnicosValoresFor([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(contarUnicosValoresFor([])) //0
console.log(contarUnicosValoresFor(null)) //0
console.log(contarUnicosValoresFor([-2,-1,-1,-1,0,1])) //4

console.log("-------------------------------------")
console.log(contarUnicosValores([1,1,1,1,1,2])) //2
console.log(contarUnicosValores([1,2,3,4,4,4,7,7,12,12,13])) //7
console.log(contarUnicosValores([])) //0
console.log(contarUnicosValores(null)) //0
console.log(contarUnicosValores([-2,-1,-1,-1,0,1])) //4

// Escribir una funcion llamada maxSubArraySum en el cual acepta un array de integers
// y un numero llamado n. La funcion debera calcular la maxima suma de n elementos 
// consecutivos en el array

function maxSubArraySum(array, n) {
    if(!array || !array.length || !n || array.length<n) {
        return 0
    }
    let maxSuma=0
    let tempSuma=0
    for(let izq = 0; izq<array.length;izq++) {
        if (izq<n) {
            maxSuma+=array[izq]
            tempSuma=maxSuma
        } else {
            tempSuma = -array[izq-n] + tempSuma + array[izq]
            maxSuma = Math.max(tempSuma,maxSuma)
        }
    }
    return maxSuma
}
console.log("-------------------------------------")
console.log(maxSubArraySum([1,2,5,2,8,1,5],2)) //10
console.log(maxSubArraySum([1,2,5,2,8,1,5],4)) //17
console.log(maxSubArraySum([4,2,1,6],1)) //6
console.log(maxSubArraySum([4,2,1,6,2],4)) //13
console.log(maxSubArraySum(null,2)) //0
console.log(maxSubArraySum([],4)) //0
console.log(maxSubArraySum([0],1)) //0

// dado un array de interger ordenado, escribir una funcion llamada 
// buscar, que acepte un valor y retorne el indice del valor pasado a funcion, 
// si no se encuentra el valor, return -1 

function buscar(array, valor) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] === valor) {
            return i
        }
    }
    return -1
}

function buscarBiseccion(array, valor) {

    let min=0
    let max=array.length - 1
    while(min<=max) {
        medio=Math.floor((min+max)/2)
        if (array[medio]===valor) {
            return medio
        } else if(array[medio]>valor) {
            max=medio-1
        } else {
            min=medio+1
        }
    }
    return -1
}

console.log("-----------------buscarBiseccion--------------------")
console.log(buscarBiseccion([1,2,3,4,8,10,15],15)) //6
console.log(buscarBiseccion([1,2,3,4,5,6],4)) //3
console.log(buscarBiseccion([1,2,3,4,5,6],6)) //5
console.log(buscarBiseccion([1,2,3,4,5,6],11)) //-1
console.log("-----------------buscar--------------------")
console.log(buscar([1,2,3,4,8,10,15],15)) //6
console.log(buscar([1,2,3,4,5,6],4)) //3
console.log(buscar([1,2,3,4,5,6],6)) //5
console.log(buscar([1,2,3,4,5,6],11)) //-1

