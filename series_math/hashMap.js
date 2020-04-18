//hashMap
//intersion O(1)
//remover   O(1)
//busqueda  O(n)
//acceso    0(1)
let instructor = {
    primerNombre: "Guido",
    esInstructor: true,
    NumerosFavoritos: [1,2,3,4]
}

console.log(Object.keys(instructor)) //O(n)
console.log(Object.values(instructor)) //O(n)
console.log(Object.entries(instructor)) //O(n)
console.log(Object.hasOwnProperty(instructor)) //O(1)

//usar arrays cunado hay que ordenarlos 
//para un acceso rapido, insertar remover
//arrays
//intersion depende, si se quiere insertar en la posicion 0 del array, entonces hay que cambiar el indice de los elementos
//remover   depende, si se quiere remover la posicion 0 del array, entonces hay que cambiar el indice de los elementos
//busqueda  O(n)
//acceso    0(1)

let names = ["lucia","wendys","YAGAMI"]

function contarCadaChar(str) {
    if (!str) {return {} }
    let cantChars = {}
    for (var char of str) {
        char = char.toLowerCase()
        if (/[a-z0-9]/.test(char)) { //si el char esta en el conjunto ==> true
            cantChars[char] = ++cantChars[char] || 1
        }
        
    }
    return cantChars
}

console.log(Object.entries(contarCadaChar("ssss222222ss@@@@@@@@wwwdadsdwwasdadwdadawdawdaaca")))
