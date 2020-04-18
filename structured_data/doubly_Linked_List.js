class Nodo{
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class DoublyLinkedList{
    constructor(){
        this.length = 0
        this.tail = null
        this.head = null
    }
    push(val){
        let newNodo = new Nodo(val)
        if(!this.head){
            this.head = newNodo
        } else {
            newNodo.prev = this.tail
            this.tail.next = newNodo
        }
        this.tail = newNodo
        this.length++
        return this
    }
    pop(){
        if(this.length === 0){return undefined}
        let nodoRemove = this.tail
        if(this.length === 1){
            this.tail = this.head = null
        } else {
            this.tail = nodoRemove.prev
            this.tail.next = nodoRemove.prev = null
        }
        this.length--
        return nodoRemove
    }
    shift(){
        if(this.length === 0){return undefined}
        let nodeRemove = this.head
        if(this.length === 1){
            this.head = this.tail = null
        }else{
            this.head = nodeRemove.next
            this.head.prev = nodeRemove.next = null
        }
        this.length--
        return nodeRemove
    }
    unshift(val){
        let newNodo = new Nodo(val)
        if(this.length === 0){
            this.head = this.tail = newNodo
        }else{
            newNodo.next = this.head
            this.head.prev = newNodo
            this.head = newNodo
        }
        this.length++
        return this
    }
    get(index){
        if(index<0 || index>=this.length){return null}
        let nodoFound, count
        if(index>this.length/2){
            count = this.length - 1
            nodoFound = this.tail
            while(count!==index){
                nodoFound = nodoFound.prev
                count--
            }
        }else{
            count = 0
            nodoFound = this.head
            while(count!==index){
                nodoFound = nodoFound.next
                count++
            }
        }
        return nodoFound
    }
    set(index,val){
        let nodoFound = this.get(index)
        if(nodoFound){
            nodoFound.val = val
            return true
        }
        return false
    }
    insert(index,val){
        if(index<0 || index>this.length){return false}
        if(index===0){return this.unshift(val)}
        if(index===this.length){return this.push(val)}
        let prevNodo = this.get(index-1)
        let newNodo = new Nodo(val)
        let nextNodo = prevNodo.next
        newNodo.next = nextNodo
        newNodo.prev = prevNodo
        prevNodo.next = nextNodo.prev = newNodo
        this.length++
        return true
    }
    remove(index){
        if(index<0 || index>=this.length){return null}
        if(index===0){return this.shift()}
        if(index===this.length-1){return this.pop()}
        let prevNodo = this.get(index-1)
        let nodoRemove = prevNodo.next
        let nextNodo = nodoRemove.next
        prevNodo.next = nextNodo
        nextNodo.prev = prevNodo
        nodoRemove.next = nodoRemove.prev = null
        this.length--
        return nodoRemove
    }
    traverse(){
        let nodo = this.head
        while(nodo){
            console.log(nodo.val)
            nodo = nodo.next
        }
    }
}

let listDoubly = new DoublyLinkedList()
// console.log(listDoubly.push(1))
// console.log(listDoubly.push(2))
// console.log(listDoubly.push(3))
// console.log(listDoubly.push(4))

// console.log(listDoubly.pop())
// console.log(listDoubly.pop())
// console.log(listDoubly.pop())
// console.log(listDoubly.pop())
// console.log(listDoubly.pop())

// console.log(listDoubly.unshift("a"))
// console.log(listDoubly.unshift("b"))
// console.log(listDoubly.unshift("c"))
// console.log(listDoubly.unshift("d"))

// console.log(listDoubly.shift())
// console.log(listDoubly.shift())
// console.log(listDoubly.shift())
// console.log(listDoubly.shift())
// console.log(listDoubly.shift())
// console.log("asdasd")
// console.log(listDoubly.get(-1))
// console.log(listDoubly.get(0))
// console.log(listDoubly.get(1))
// console.log(listDoubly.get(2))
// console.log(listDoubly.get(3))
// console.log(listDoubly.get(4))

listDoubly.insert(0,"hola")
listDoubly.insert(1,"como estas")
listDoubly.insert(2,"GU")
listDoubly.insert(3,"BA")
// listDoubly.traverse()
// listDoubly.insert(2,"ATR")
// listDoubly.traverse()
console.log(listDoubly.remove(-1))
console.log(listDoubly.remove(2))
console.log(listDoubly.remove(1))
console.log(listDoubly.remove(0))
console.log(listDoubly.remove(0))
console.log(listDoubly.remove(4))
