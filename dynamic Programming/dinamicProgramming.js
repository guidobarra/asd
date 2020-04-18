// La programacion dinamica: es un metodo para reduir el tiempo de ejecuccion de un algoritmo mediante
// la utilizacion de subproblemas superpuesto y substructuras optimas.
// subproblemas superpuesto: Un problema se dice que tiene subproblemas superpuesto si puede romper
// en subproblemas los cuales son reusados varias veces en el tiempo
// substructuras optimas: Un problema se dice que tiene substructuras optimas si una solucion optima
// puede ser construido de soliciones optimas de sus subproblemas

//complejidad computacional: O(2^n) muy mala
function fibonacci(n){
    if(n <= 2){return 1}
    return fibonacci(n-1) + fibonacci(n-2)
}
//complejidad computacional: O(n)
function fibonacciDim(n){
    //memoria para guardar los datos que se van reutilizar
    const valReused = {}
    valReused[1] = valReused[2] = 1
    function fibo(n){
        if(valReused[n]){return valReused[n]}
        valReused[n] = fibo(n-1) + fibo(n-2)
        return valReused[n]
    }
    return fibo(n)
}
//complejidad computacional: O(n)
function fibonacciDimIterate(n){
    //memoria para guardar los datos que se van reutilizar
    const valueReused = {}
    valueReused[1] = valueReused[2] = 1
    let num=3
    while(num<=n){
        valueReused[num] = valueReused[num-1] + valueReused[num-2]
        num++
    }
    return valueReused[n]
}
function calculateMethod(method, n, nameMethod){
    const {performance} = require('perf_hooks');
    var start = performance.now()//Date.now()//new Date().getTime()
    let result = method(n)
    var end = performance.now()//new Date().getTime()
    console.log(`time in miliSecond: ${(end - start)}   `, 
                `n: ${n}  `, 
                `nameMethod: ${method.name}  `,
                `result: ${result}`)
}
let value = 43
calculateMethod(fibonacciDimIterate, value,"fibonacciDimIterate")
calculateMethod(fibonacciDim, value,"fibonacciDim")
calculateMethod(fibonacci, value,"fibonacci")

