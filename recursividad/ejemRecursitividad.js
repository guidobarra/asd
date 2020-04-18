function sumaN(n) {
    if (n===1) {return 1}
    return n + sumaN(n-1)
}
console.log("-------------suma----------------")
console.log(sumaN(4))
console.log(sumaN(10))

function factorial(n) {
    if(n===0) {return 1}
    return n*factorial(n-1)
}
console.log("-------------factorial----------------")
console.log(factorial(4))
console.log(factorial(5))


function coleccionValorImpar(array) {
    let newArray = []
    if(array.length===0) {
        return newArray
    }

    if(array[0]%2!==0){
        newArray.push(array[0])
    }
    newArray = newArray.concat(coleccionValorImpar(array.slice(1)))
    return newArray
}

console.log("-------------coleccionValorImpar----------------")
console.log(coleccionValorImpar([1,2,3,4,5,6]))
console.log(coleccionValorImpar([1,2,3,4,5,6,2,2,2,3,5,4]))

function power(base, exponente) {
    if(exponente===0) {return 1}
    return base*power(base, exponente -1)
}

console.log("-------------power----------------")
console.log(power(5,2))
console.log(power(10,5))

function fibonacci(n) {
    if (n<=2) {return 1}
    return fibonacci(n-2) + fibonacci(n-1)
}

console.log("-------------fibonacci----------------")
console.log(fibonacci(5)) //5
console.log(fibonacci(6)) //8
console.log(fibonacci(7)) //13


function reverse(str){
    if (!str || str.length<=1) {return str}
    return reverse(str.slice(1)) + str [0]
  }
  console.log("-------------reverse----------------")
  console.log(reverse('awesome')) // 'emosewa'
  console.log(reverse('rithmschool')) // 'loohcsmhtir'

function isPalindrome(str){
    if (!str || !str.length) {return false}
    if (str.length==1) {return true} 
    if (str.length==2) {return str[0]===str[1]} 
    if (str[0]===str.slice(-1)) {return isPalindrome(str.slice(1,-1))}
    return false
  }
console.log("-------------isPalindrome----------------")
console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false



function someRecursive(array, callBack){
    if (!array || !array.length) {return false}
    if (array.length===1) {return callBack(array[0])}
    if (callBack(array[0])) {return someRecursive(array.slice(1), callBack)}
    return false
}

  // SAMPLE INPUT / OUTPUT
const isOdd = val => val % 2 !== 0;
console.log("-------------someRecursive----------------")
console.log(someRecursive([1,2,3,4], isOdd)) // false
console.log(someRecursive([4,6,8,9], isOdd)) // false
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([1,3,5,7,9,11], isOdd)) // true
console.log(someRecursive([4,6,8], val => val > 10)) // false
console.log(someRecursive([4,6,8], val => val > 2)) // true
console.log(someRecursive([8,10,12], val => val > 7)) // true


function flatten(array){
    var newArray = []
    for (let i = 0; i < array.length; i++) {
        if (Array.isArray(array[i])) {newArray = newArray.concat(flatten(array[i]))}
        else {newArray.push(array[i])}
    }
    return newArray
  }
  console.log("-------------flatten----------------")
  console.log(flatten([1, 2, 3, [4, 5] ])) // [1, 2, 3, 4, 5]
  console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
  console.log(flatten([[1],[2],[3]])) // [1,2,3]
  console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3]


  function capitalizeFirst (array) {
    if (!array || !array.length) {return []}
    let newArray = []
    newArray.push(array[0].charAt(0).toUpperCase() + array[0].substring(1))
    return newArray.concat(capitalizeFirst(array.slice(1)))
  }
  //como lo hizo el tutorial
  function capitalizeFirstT (array) {
    if (array.length ===1 ) {return [array[0][0].toUpperCase() + array[0].substring(1)]}
    const str =  capitalizeFirst(array.slice(0,-1))
    const string = array[array.length-1][0].toUpperCase() + array[array.length-1].substring(1)
    str.push(string)
    return str
  }

  console.log("-------------capitalizeFirst----------------")
  console.log(capitalizeFirst(['car','taco','banana'])) // ['Car','Taco','Banana']
  console.log("-------------capitalizeFirstT----------------")
  console.log(capitalizeFirstT(['car','taco','banana'])) // ['Car','Taco','Banana']

  //sumar los numeros pares
  function nestedEvenSum (obj, sum=0) {
    for (var nom in obj) {
        if (typeof obj[nom] === "object" ) {sum += nestedEvenSum(obj[nom])}
        else if (typeof obj[nom] === "number" && obj[nom]%2===0) {sum += obj[nom]}
    }
    return sum
  }
  
  
  var obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  }
  
  var obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 2}, ee: 'car'}
  };
  console.log("-------------nestedEvenSum----------------")
  console.log(nestedEvenSum(obj1)) // 6
  console.log(nestedEvenSum(obj2)) // 10

  function capitalizeWords (array) {
    if (!array || !array.length) {return []}
    let newArray = []
    newArray.push(array[0].toUpperCase())
    return newArray.concat(capitalizeWords(array.slice(1)))
  }
  console.log("-------------capitalizeWords----------------")
  let words = ['i', 'am', 'learning', 'recursion']
  console.log(capitalizeWords(words)) // ['I', 'AM', 'LEARNING', 'RECURSION']


  //pasar los valores numericos a string
  function stringifyNumbers(obj) {
      var objNumAString = {}
      for (var key in obj) {
          if (typeof obj[key]=== "object") {objNumAString[key]=stringifyNumbers(obj[key])}
          else if (typeof obj[key]=== "number") {objNumAString[key]=obj[key].toString()}
          else {objNumAString[key]=obj[key]}
      }
      return objNumAString
  }


let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        www: [1,2,3],
        info: {
            isRight: true,
            random: 66
        }
    }
}
console.log("-------------stringifyNumbers----------------")
console.log(obj)
console.log(stringifyNumbers(obj))
//respuesta
// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }

//retornar un array de string con todos los string del obj
function collectStrings(obj) {
    var array = []
    for (var key in obj) {
        if (typeof obj[key]==="object") {array=array.concat(collectStrings(obj[key]))}
        else if (typeof obj[key]==="string") {array.push(obj[key])}
    }
    return array
}
//como lo hizo el profe
function collectStringsT(obj) {
    var stringsArr = [];
 
    function gatherStrings(o) {
        for(var key in o) {
            if(typeof o[key] === 'string') {
                stringsArr.push(o[key]);
            }
            else if(typeof o[key] === 'object') {
                return gatherStrings(o[key]);
            }
        }
    }
 
    gatherStrings(obj);
 
    return stringsArr;
}
const objDos = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

const objTres = {
    stuff: "foo",
    data: {
        val: "asd"
    }
}
console.log("-------------collectStrings----------------")
console.log(collectStrings(objDos)) // ["foo", "bar", "baz"])
console.log(collectStrings(objTres)) // ["foo", "asd"])

console.log("-------------collectStringsT----------------")
console.log(collectStringsT(objDos)) // ["foo", "bar", "baz"])
console.log(collectStringsT(objTres)) // ["foo", "asd"])