//es otra implementacion de arboles binario
//pueden ser minimo, es cuando el nodo padre es menor que los nodos hijos
//                 2
//            3         10
//         4    11    12  20
//       1
//pueden ser maximo, es cuando el nodo padre es mayor que los nodos hijos
//                 40
//            20         30
//         4    11    12  20
//       2
//son arboles casi completos, debido a esto se los puede implementar con array
//ademas debe complir que se insertara de manera que hara al arbol completo
//ejemplo: se inserto a la derecha del 4, tiene que complir la condicion de arbor maximo
//                 40
//            20         30
//         4    11    12  20
//       2  250
//salida: [250, 40, 30, 20, 11, 12, 20, 2 ,4]
//                 250
//            40         30
//         20    11    12  20
//       2  
//en los heap nos se puede tener representaciones de arboles como por ejemplo
//                20
//                    25
//                        29
//                            30
//                                35
//                                    55
// esto es por que tienen que ser casi completos.
//con los heaps (monticulo) se puede implementar otra estructura de datos 
//como por ejemplo las colas de prioridad.
class MaxBinaryHeap{
    constructor(){
        this.values = []
    }
    insert(val){
        this.values.push(val)
        let indexSon = this.values.length-1
        let indexFather
        while((indexFather = Math.floor((indexSon-1)/2))>=0){
            if(val<=this.values[indexFather]){break}
            //swap
            [this.values[indexFather],this.values[indexSon]] = [val,this.values[indexFather]]
            indexSon = indexFather
        }
    }
    extractMax(){
        if(this.values.length===0){return null}
        const swap = (arr, idx, idy) => {
            [arr[idx], arr[idy]] = [arr[idy], arr[idx]]
        }
        let idxRoot = 0,
            left =  2*idxRoot + 1,
            right =  2*idxRoot + 2,
            idxValueMax = this.values.length-1;
        swap(this.values,idxRoot,idxValueMax)
        while((this.values.length-1)>left){
            idxValueMax = this.values[right]<=this.values[left] || right===(this.values.length-1)?left:right;
            if(this.values[idxRoot] >= this.values[idxValueMax]){break}
            swap(this.values,idxRoot,idxValueMax)
            idxRoot = idxValueMax
            left =  2*idxRoot + 1
            right =  2*idxRoot + 2
        }
        return this.values.pop()
    }
    //pseudocodigo: extractMax
    //si no hay elemento retorno null
    //hacer el swaping entre el primer y el ultimo elemento
    //sacar al ultimo elemento del array y guardarlo en max
    //si hay mas de 1 elementos llamar a la funcion sinkDown:
        //swap: analisa si debe hacer el swaping, 
        //si lo hace retorna el indice del hijo mas grande
        //si no hace retorna -1, y finaliza el ciclo
        //pseudocodigo: swap
            //obtener al hijo mas grande
            //si el padre es menor al hijo mas grande, hacer el swaping entre padre e hijo, retornar el indice del hijo mas grande
            //return -1
    //retornar max
    extractMaxOpt(){
        if(this.values.length===0){return null}
        //swaping
        [ this.values[0], this.values[this.values.length-1] ] = 
            [ this.values[this.values.length-1], this.values[0] ]
        let max = this.values.pop()
        if(this.values.length>1){
            this.sinkDown()
        }
        return max
    }
    sinkDown(){
        const swap = (arr, idx) => {
            //left ==> 2*idxRoot + 1
            //right ==> 2*idxRoot + 2, o lo que es lo mismo left + 1
            let idxValueMax =  2*idx + 1
            //condicion: overflow del array, right no debe superar al mayor indice del array.
            if((idxValueMax+1)<arr.length){
                //rightChildren<=leftChildren?leftChildren:rightChildren
                //condicion: se elige el mas grande de los hijos.
                idxValueMax += arr[idxValueMax+1]<=arr[idxValueMax]?0:1;
            }

            if(idxValueMax<arr.length && arr[idx] < arr[idxValueMax]){
                [arr[idx], arr[idxValueMax]] = [arr[idxValueMax], arr[idx]]//swap
                return idxValueMax
            }
            return -1
        }
        let idxRoot = 0
        while((idxRoot=swap(this.values,idxRoot))!==-1){}
    }

    //como lo hizo en el curso
    extractMaxCourse(){
        const max = this.values[0]
        const end = this.values.pop()
        this.values[0] = end
        this.sinkDownCourse()
        return max
    }
    sinkDownCourse(){
        let idx = 0
        const length = this.values.length
        const element = this.values[0]
        while(true){
            let leftChildIdx = 2*idx + 1
            let rightChildIdx = 2*idx + 2
            let leftChild, rightChild;
            let swap = null
            if(leftChildIdx<length){
                leftChild = this.values[leftChildIdx]
                if(leftChild>element){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild>element) || 
                    (swap !== null && rightChild>leftChild)
                ){
                    swap = rightChildIdx
                }
            }
            if(swap===null){break}
            this.values[idx] = this.values[swap]
            this.values[swap] = element
            idx = swap
        }
    }

}
var heap = new MaxBinaryHeap()
// heap.insert(40)
// console.log(heap.values)
// heap.insert(11)
// console.log(heap.values)
// heap.insert(42)
// console.log(heap.values)
// heap.insert(2)
// console.log(heap.values)
// heap.insert(250)
// console.log(heap.values)//salida: [ 250, 42, 40, 2, 11 ]
// console.log("---------------------------")

// heap.values = [41, 39, 33, 18, 27, 12]
// heap.insert(55)
// console.log(heap.values)//salida: [ 55, 39, 41, 18, 27, 12, 33 ]
// heap.insert(1)
// console.log(heap.values)//salida: [ 55, 39, 41, 18, 27, 12, 33, 1 ]
// heap.insert(45)
// console.log(heap.values)//salida: [ 55, 45, 41, 39, 27, 12, 33, 1, 18 ]

// heap.values = [42, 40, 41 ,2]
// heap.values = [ 41, 40, 2 ]
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
// console.log(heap.extractMax())
// console.log(heap.values)
// console.log(heap.extractMax())

// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// heap.insert(41)
// heap.insert(39)
// heap.insert(33)
// heap.insert(18)
// heap.insert(27)
// heap.insert(12)
// heap.insert(55)
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)




//  heap.values = [42,41,40,19,18,17,16,15,14,13,12,11]

// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())


// heap.values = [4,4,4,1,1,2,3]

// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)
// console.log(heap.extractMaxOpt())
// console.log(heap.values)

heap.insert(5)
heap.insert(1)
heap.insert(4)
heap.insert(2)
heap.insert(3)
console.log(heap.values)

console.log(heap.extractMaxCourse())
console.log(heap.extractMaxCourse())
console.log(heap.extractMaxCourse())
console.log(heap.extractMaxCourse())
console.log(heap.extractMaxCourse())


