// los grafos son utilizados en:
// redes sociales
// localizacion//cartografía (googleMap)
// Algoritmos de rutamiento
// jerarquia visual


//representacion de los grafos
//matriz de adyaciencia,

//        MATRIZ                      GRAFO
//     A   B   C   D                    A
// A   0   1   1   0                  /   \
// B   1   0   0   1                 /     \
// C   1   0   0   1                B       C
// D   0   1   1   0                 \     /
//                                    \   /
//                                      D
//lista de adyaciencia
// HASH TABLE        ARRAY                                GRAFO
// A: [B, C]     indice: A     [ [B, C],                    A
// B: [A, D]             B       [A, D],                  /   \
// C: [A, D]             C       [A, D],                 /     \
// D: [B, C]             D       [B, C] ]               B       C
//                                                       \     /
//                                                        \   /
//                                                          D

//lista de adyaciencia VS matriz de adyaciencia
// V: NUMEROS DE VERTICES
// E: NUMEROS DE BORDES
// OPERACION                LISTA              MATRIZ
// AGRAGAR VERTICE          O(1)               O(V^2)
// AGRAGAR BORDE            O(1)               O(1)
// REMOVER VERTICE          O(V+E)             O(V^2)
// REMOVER BORDE            O(E)               O(1)
// CONSULTA                 O(V+E)             O(1)
// ALMACENAMIENTO           O(V+E)             O(V^2)
//lista de adyaciencia 
// MENOR ESPACIO DE MEMORIA
// RAPIDO PARA ITERAR SOBRE TODOS LOS BORDE
// LENTO PARA IR AL BORDE ESPECIFICO 
// matriz de adyaciencia
// MAYOR ESPACIO DE MEMORIA
// LENTO PARA ITERAR SOBRE TODOS LOS BORDE
// RAPIDO PARA IR AL BORDE ESPECIFICO 
class Graph{
    constructor(){
        this.adjacencyList = {}
    }
    addVertex(val){
        if(!this.adjacencyList[val]){
            this.adjacencyList[val] = []
        }
    }
    addEdge(v1, v2){
        this.addVertex(v1)
        this.addVertex(v2)
        this.adjacencyList[v1].push(v2)
        this.adjacencyList[v2].push(v1)
    }
    removeEdge(v1, v2){
        const swap = (arr, ind1, ind2) => {[arr[ind1], arr[ind2]] = [arr[ind2], arr[ind1]]}
        let idxRemove =  this.adjacencyList[v1].findIndex(k => k===v2)
        if(idxRemove!==-1){
            let arr = this.adjacencyList[v1]
            swap(arr, idxRemove, arr.length-1)
            arr.pop()
        }
        idxRemove = this.adjacencyList[v2].findIndex(k => k===v1)
        if(idxRemove!==-1){
            let arr = this.adjacencyList[v2]
            swap(arr, idxRemove, arr.length-1)
            arr.pop()
        }
    }
    //CURSO
    removeEdgeCourse(v1, v2){
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(
            v => v !== v2
        );
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(
            v => v !== v1
        );
    }
    removeVertix(v){
        if(!this.adjacencyList[v]){return}
        while(this.adjacencyList[v].length){
            const vertixAdy = this.adjacencyList[v].pop()
            this.removeEdge(v, vertixAdy)
        }
    }
    DFSRecursive(vertexStart){
        const vertixVisited = {};
        const arrResul = [];
        const adjacencyList = this.adjacencyList;
        (function helper(v1){
                arrResul.push(v1)
                vertixVisited[v1] = true
                for (var vertixAdy of adjacencyList[v1]) {
                    if(!vertixVisited[vertixAdy]){helper(vertixAdy)}
                }
            }
        )(vertexStart);
        return arrResul
    }
    DFSIterative(vertexStart){
        const arrResul = []
        const vertexVisited = {}
        const stack = [vertexStart]
        let vertex
        while( (vertex = stack.pop()) ){
            if(!vertexVisited[vertex]){
                vertexVisited[vertex] = true
                arrResul.push(vertex)
                for (let vertexAdy of this.adjacencyList[vertex]) {
                    if(!vertexVisited[vertexAdy]){stack.push(vertexAdy)}
                }
            } 
        }
        return arrResul
    }
    BFSIterative(vertexStart){
        const arrResul = []
        const vertexVisited = {}
        const queue = [vertexStart]
        let vertex
        while( (vertex=queue.shift()) ){
            if(!vertexVisited[vertex]){
                vertexVisited[vertex] = true
                arrResul.push(vertex)
                for (let vertexAdy of this.adjacencyList[vertex]) {
                    if(!vertexVisited[vertexAdy]){queue.push(vertexAdy)}
                }
            }
        }
        return arrResul
    }
    //course
    depthFirstRecursive(start){
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function dfs(vertex){
            if(!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    return dfs(neighbor)
                }
            });
        })(start);
        return result;
    }
    //course
    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);

            this.adjacencyList[currentVertex].forEach(neighbor => {
               if(!visited[neighbor]){
                   visited[neighbor] = true;
                   stack.push(neighbor)
               } 
            });
        }
        return result;
    }
    //course
    breadthFirst(start){
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while(queue.length){
            currentVertex = queue.shift();
            result.push(currentVertex);
           

            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] = true;
                    queue.push(neighbor);
                }
            });
        }
        return result;
    }

}
var graph = new Graph()
let g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")


g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B","D")
g.addEdge("C","E")
g.addEdge("D","E")
g.addEdge("D","F")
g.addEdge("E","F")
console.log(g.depthFirstRecursive("A"))
console.log(g.DFSRecursive("A"))
console.log(g.depthFirstIterative("A"))
console.log(g.DFSIterative("A"))
console.log(g.breadthFirst("A"))
console.log(g.BFSIterative("A"))
//          A
//        /   \
//       B     C
//       |     |
//       D --- E
//        \   /
//          F

// var g = new Graph()
// g.addVertix("Catamarca")
// g.addVertix("Buenos Aires")
// g.addVertix("Santa Fe")
// g.addVertix("Córdoba")
// g.addVertix("Entre Ríos")
// g.addVertix("Mendoza")
// g.addVertix("Neuquen")
// g.addVertix("San Luis")
// g.addVertix("La Pampa")

// g.addEdge("Catamarca","Buenos Aires")
// g.addEdge("Santa Fe","Buenos Aires")
// g.addEdge("Córdoba","Buenos Aires")
// g.addEdge("La Pampa","Buenos Aires")
// g.addEdge("La Pampa","Mendoza")
// g.addEdge("La Pampa","Neuquen")

// console.log(g.adjacencyList)
// g.removeEdgeCourse("La Pampa","Buenos Aires")
// console.log(g.adjacencyList)
// g.removeVertix("La Pampa")
// console.log(g.adjacencyList)



