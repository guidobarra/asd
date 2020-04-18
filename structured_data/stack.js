class Nodo{
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Stack{
    constructor(){
        this.size = 0
        this.first = null
        this.last = null
    }
    push(val){
        let newNodo = new Nodo(val)
        if(this.size===0){
            this.first = this.last = newNodo
        }else{
            newNodo.next = this.first
            this.first = newNodo
        }
        return ++this.size
    }
    pop(){
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

var stack = new Stack()

console.log(stack.push("FIRST"))
console.log(stack.push("SECOND"))
console.log(stack.push("THRID"))

console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

