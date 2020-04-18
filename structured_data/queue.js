class Nodo{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Queue{
    constructor(){
        this.size = 0
        this.first = this.last = null
    }
    enqueue(val){
        let newNodo = new Nodo(val)
        if(this.size===0){
            this.first = this.last = newNodo
        }else{
            this.last.next = newNodo
            this.last = newNodo
        }
        return ++this.size
    }
    dequeue(){
        if(this.size===0){return null}
        let nodoRemove = this.first
        if(this.size===1){
            this.last = null
        }
        this.first = nodoRemove.next
        this.size--
        return nodoRemove.val
    }
}

var queue = new Queue()

console.log(queue.enqueue("FIRST"))
console.log(queue.enqueue("SECOND"))
console.log(queue.enqueue("THIRD"))

console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
