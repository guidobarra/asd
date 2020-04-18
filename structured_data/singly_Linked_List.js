class Node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}
//forma mal de conectar los nodos, pero vamos a hacer metodos para menejar mejor la estructura de dato
var first = new Node("Hi")
first.next = new Node("there")
first.next.next = new Node("how")
first.next.next.next = new Node("are")
first.next.next.next.next = new Node("you")
console.log(first)
// 1) las lista simplemente enlasada son excelente alternativa a los arrays cuando 
// la insersion o eliminacion son requeridos frecuentemente
// 2) las lista simplemente enlasada no tiene indeces
// 3) la idea de la estructura de dato lista que contiene nodos es el fundamiento para otros
// estructura de datos como las colas y pilas
class SinglyLinkedList {
    constructor(){
        this.length = 0
        this.tail = null
        this.head = null
    }
    push(val) {
        let node = new Node(val)
        if(this.tail) {
            this.tail.next = node
        } else {
            this.head = node
        }
        this.tail = node
        this.length++
    }
    pop(){
        if (!this.head) {return undefined} 
      let newTail = this.head
      let nodeDelete = this.head
      while(nodeDelete.next){
        newTail = nodeDelete
        nodeDelete = nodeDelete.next
      }
      if (this.tail === this.head) {
        this.tail = this.head = null
      } else {
        this.tail = newTail
        this.tail.next = null
      }
      this.length--
      return nodeDelete
    }
    shift(){
        if(!this.head){return undefined}
        let nodeDelete = this.head
        this.head = nodeDelete.next
        this.length--
        if(this.length===0) {
            this.tail = null
        }
        return nodeDelete
    }
    unshift(val){
        let newNode = new Node(val) 
        if(!this.head){
            this.tail = newNode
        } 
        newNode.next = this.head
        this.head = newNode
        this.length++
        return this
    }
    get(index){
        if(index>=this.length || index<0){return null}
        let getNodo = this.head
        while(index-- && getNodo.next){
            getNodo = getNodo.next
        }
        return getNodo
    }
    set(index, val) {
        let nodo = this.get(index)
        if(nodo){
            nodo.val = val
            return true
        }
        return false
    }
    insert(index, val){
        if(index<0 || index>this.length){return false}
        if(index===0){return this.unshift(val)}
        if(index===this.length){return this.push(val)}
        let newNode = new Node(val)
        let antNode = this.get(index-1)
        newNode.next = antNode.next
        antNode.next = newNode
        this.length++
        return true
    }
    remove(index){
        if(index<0 || index>=this.length){return undefined}
        if(index===0){return this.shift()}
        if(index===this.length-1){return this.pop()}
        let antNodo = this.get(index-1)
        let nodoRemove = antNodo.next
        antNodo.next = nodoRemove.next
        this.length--
        return nodoRemove
    }
    reverse(){
        if(this.length<=1){return undefined}
        let currentNodo = this.head
        let nextNodo = null
        let prevNodo = null
        while(currentNodo){
            nextNodo = currentNodo.next
            currentNodo.next = prevNodo
            prevNodo = currentNodo
            currentNodo = nextNodo
        }
        [this.head, this.tail] = [this.tail, this.head]
    }
    traverse(){
        let headNode = this.head
        while(headNode) {
            console.log(headNode.val)
            headNode = headNode.next
        }
    }
}

let list = new SinglyLinkedList()
// list.push("a")
// list.push("b")
// list.push("c")
// list.push("d")
// list.traverse()
// console.log(list.pop())
// list.traverse()
// console.log(list.pop())
// list.traverse()
// console.log(list.pop())
// list.traverse()
// console.log(list.pop())
// list.traverse()
// console.log(list.pop())
// list.push("a")
// list.push("b")
// list.push("c")
// list.push("d")
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// console.log(list.shift())
// list.unshift("3")
// list.unshift("2")
// list.unshift("1")
// list.unshift("0")
// list.traverse()
// console.log(list.get(0).val)
// console.log(list.get(1).val)
// console.log(list.get(2).val)
// console.log(list.get(3).val)
// console.log(list.get(4))
list.insert(0,"a")
list.insert(1,"b")
list.insert(2,"c")
list.insert(3,"d")
// console.log(list.insert(12,"c"))
// list.traverse()
// console.log(list.remove(12))
// console.log(list.remove(2))
// console.log(list.remove(0))
list.traverse()
list.reverse()
list.traverse()



