
// Busca el valor pasado como parametro dentro del 
// array y retorna el indice de la ubicacion si lo 
// encontro. Si no lo encontro retorna -1.
// El array pasado como parametro puede estar ordenado 
// o no 
// complejidad computacional:
// maximo: O(n)
// promedio: O(n)
// minimo: O(1)

function lenealSearch(arr, val) {
    if (!arr || !arr.length) {return -1}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {return i}
    }
    return -1
}

var provienciasArg = [
"Capital Federal",
"Buenos Aires",
"Catamarca",
"Chaco",
"Chubut",
"Córdoba",
"Corrientes",
"Formosa",
"Jujuy",
"La Pampa",
"La Rioja",
"Mendoza",
"Misiones",
"Neuquén",
"Río Negro",
"Salta",
"San Juan",
"San Luis",
"Santa Cruz",
"Santa Fe",
"Santiago Del Estero",
"Tierra Del Fuego",
"Tucuman"
]
console.log(lenealSearch(provienciasArg, "Tucuman"))
console.log(lenealSearch(provienciasArg, "TucumaEn"))
