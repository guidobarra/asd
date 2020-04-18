//en esta implementacion de cola de proridad cuando se inserta varias 
//veces un elemento con las misma prioridad, a la ahora de sacar todos los elementos
//de la cola de prioridad, se saca el elemento de mayor prioridad, en caos de que haya varios
//de la misma prioridad puede no respetar el orden de llegada para en cual se inserto
class Nodo{
    constructor(val, priority){
        this.val = val
        this.priority = priority
    }
}
class PriorityQueue{
    constructor(){
        this.values = []
    }
    enqueue(val, priority){
        let newNodo = new Nodo(val, priority)
        this.values.push(newNodo)
        let indexSon = this.values.length-1
        let indexFather
        while((indexFather = Math.floor((indexSon-1)/2))>=0){
            if(priority<=this.values[indexFather].priority){break}
            //swap
            [this.values[indexFather],this.values[indexSon]] = [newNodo,this.values[indexFather]]
            indexSon = indexFather
        }
    }
    dequeue(){
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
                idxValueMax += arr[idxValueMax+1].priority<=arr[idxValueMax].priority?0:1;
            }

            if(idxValueMax<arr.length && arr[idx].priority < arr[idxValueMax].priority){
                [arr[idx], arr[idxValueMax]] = [arr[idxValueMax], arr[idx]]//swap
                return idxValueMax
            }
            return -1
        }
        let idxRoot = 0
        while((idxRoot=swap(this.values,idxRoot))!==-1){}
    }
    dequeueCourse(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDownCourse();
        }
        return min;
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
                if(leftChild.priority>element.priority){
                    swap = leftChildIdx
                }
            }
            if(rightChildIdx<length){
                rightChild = this.values[rightChildIdx]
                if(
                    (swap === null && rightChild.priority>element.priority) || 
                    (swap !== null && rightChild.priority>leftChild.priority)
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

var priorityQueue = new PriorityQueue()
priorityQueue.enqueue("FIEBRE_UNO", 1)
priorityQueue.enqueue("VACUNA", 0)
priorityQueue.enqueue("FIEBRE_DOS", 1)
priorityQueue.enqueue("CONSULTA_UNO", -1)
priorityQueue.enqueue("QUEMADURA", 3)
priorityQueue.enqueue("CABEZA_ROTA", 5)
priorityQueue.enqueue("CONSULTA_DOS", -1)
priorityQueue.enqueue("HUESO_ROTO", 4)
priorityQueue.enqueue("FIEBRE_TRES", 1)

console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())
console.log(priorityQueue.dequeueCourse())

// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// console.log(priorityQueue.dequeue())
// let ER = new PriorityQueue();
// ER.enqueue("common cold",5)
// ER.enqueue("gunshot wound", 1)
// ER.enqueue("high fever",4)
// ER.enqueue("broken arm",2)
// ER.enqueue("glass in foot",3)
// console.log(ER.values)
// console.log(ER.dequeueCourse())
// console.log(ER.dequeueCourse())
// console.log(ER.dequeueCourse())
// console.log(ER.dequeueCourse())
// console.log(ER.dequeueCourse())
// console.log(ER.dequeueCourse())

// console.log(ER.dequeue())
// console.log(ER.dequeue())
// console.log(ER.dequeue())
// console.log(ER.dequeue())
// console.log(ER.dequeue())


