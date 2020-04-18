//BREADTH FIRST SEARCH (BFS) 
//DEPTH FIRST SEARCH   (DFS)  PREORDER  RAIZ-LEFT-RIGHT
//DEPTH FIRST SEARCH   (DFS)  POSTORDER LEFT-RIGHT-RAIZ
//DEPTH FIRST SEARCH   (DFS)  INORDER   LEFT-RAIZ-RIGHT te lo recorre ordenado
// Puede haber un arbol de la siguiente forma:
//                20
//                    25
//                        29
//                            30
//                                35
//                                    55
class Nodo{
    constructor(val){
        this.val = val
        this.right = null
        this.left = null
    }
}
class TreeBinary{
    constructor(){
        this.size = 0
        this.root = null
    }
    insert(val){
        var newNodo = new Nodo(val)
        if(this.size===0){
            this.root = newNodo
            this.size++
            return this
        }
        var nodoCurrent = this.root
        var prevCurrent 
        while(nodoCurrent){
            prevCurrent = nodoCurrent
            if(newNodo.val>nodoCurrent.val){
                nodoCurrent = nodoCurrent.right
            }else{
                nodoCurrent = nodoCurrent.left
            }
        }
        if(newNodo.val>prevCurrent.val){
            prevCurrent.right = newNodo
        }else{
            prevCurrent.left = newNodo
        }
        this.size++
        return this
    }
    find(val){
        if(this.size===0){return false}
        let currentNodo = this.root,
            found = false
        while(currentNodo && !found){
            if(currentNodo.val===val){
                found = true
            }else if(currentNodo.val<val){
                currentNodo = currentNodo.right
            }else{
                currentNodo = currentNodo.left
                
            }
        }
        return found
    }   
    traverse(node=this.root){
        if(!node){return}
        this.traverse(node.left)
        console.log(node.val)
        this.traverse(node.right)
    }
    BFS(){
        if(this.size===0){return null}
        let nodo = this.root,
        data = [],
        queue = []
        queue.push(this.root)
        while(queue.length){
            nodo = queue.shift()
            data.push(nodo.val)
            if(nodo.left){queue.push(nodo.left)}
            if(nodo.right){queue.push(nodo.right)}
        }
        return data
    }
    DFSPreOrder(){
        var data = []
        function traversePreOrder(nodo){
            if(!nodo){return}
            data.push(nodo.val)
            traversePreOrder(nodo.left)
            traversePreOrder(nodo.right)
        }
        traversePreOrder(this.root)
        return data
    }
    DFSPostOrder(){
        var data = []
        function traversePostOrder(nodo){
            if(!nodo){return}
            traversePostOrder(nodo.left)
            traversePostOrder(nodo.right)
            data.push(nodo.val)
        }
        traversePostOrder(this.root)
        return data
    }
    DFSInOrder(){
        var data = []
        function traverseInOrder(nodo){
            if(!nodo){return}
            traverseInOrder(nodo.left)
            data.push(nodo.val)
            traverseInOrder(nodo.right)
        }
        traverseInOrder(this.root)
        return data
    }
}

var treeBinary = new TreeBinary()
treeBinary.insert(1)
treeBinary.insert(1)
treeBinary.insert(2)
treeBinary.insert(4)
treeBinary.insert(10)
treeBinary.insert(7)
treeBinary.insert(3)
console.log(treeBinary.insert(0))
//                1
//            1       2
//         0              4
//                       3     10
//                           7 

treeBinary.traverse()
console.log("....................BFS...................")
console.log(treeBinary.BFS()) //salida: [ 1, 1, 2, 0, 4, 3, 10, 7 ]
console.log("....................DFSPreOrder...................")
console.log(treeBinary.DFSPreOrder()) //salida: [ 1, 1, 0, 2, 4, 3, 10, 7 ]
console.log("....................DFSPostOrder...................")
console.log(treeBinary.DFSPostOrder()) //salida: [ 0, 1, 3, 7, 10, 4, 2, 1 ]
console.log("....................DFSInOrder...................")
console.log(treeBinary.DFSInOrder()) //salida: [ 0, 1, 1, 2, 3, 4, 7, 10 ]

var treeBinary1 = new TreeBinary()
treeBinary1.insert(10)
treeBinary1.insert(6)
treeBinary1.insert(15)
treeBinary1.insert(2)
treeBinary1.insert(8)
treeBinary1.insert(20)
//            10
//        6       15
//      2   8        20

console.log("....................BFS...................")
console.log(treeBinary1.BFS()) // salida: [ 10, 6, 15, 2, 8, 20 ]
console.log("....................DFSPreOrder...................")
console.log(treeBinary1.DFSPreOrder()) // salida: [ 10, 6, 2, 8, 15, 20 ]
console.log("....................DFSPostOrder...................")
console.log(treeBinary1.DFSPostOrder()) // salida: [ 2, 8, 6, 20, 15, 10 ]
console.log("....................DFSInOrder...................")
console.log(treeBinary1.DFSInOrder()) // salida: [ 2, 6, 8, 10, 15, 20 ]