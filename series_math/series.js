const {performance} = require('perf_hooks');


function sumGaussianaFor(n) {
    let total=0
    for (let i=1; i<=n; i++) {
        total+=i
    }
    return total;
}

function sumGaussianaFormula(n) {
    return n*(n+1)/2;
}

var t1 = performance.now()
console.log(sumGaussianaFor(100000000))
var t2 = performance.now()
console.log(`tiempo de espera sumatoria gaussiana con un for: ${(t2 - t1)/1000} segundos`)

t1 = performance.now()
console.log(sumGaussianaFormula(100000000))
t2 = performance.now()
console.log(`tiempo de espera sumatoria gaussiana con una formaula: ${(t2 - t1)/1000} segundos`)

//A tener encuenta para elegir un buen algoritmo:
//tiempo de respuesta
//Uso de la memoria
//legibilidad


