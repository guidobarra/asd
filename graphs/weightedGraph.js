class WeightedGraph {
    constructor() {
        this.adjacencyList = {};
        this.size = 0
    }
    addVertex(vertex){
        if(!this.adjacencyList[vertex]){
            this.size++
            this.adjacencyList[vertex] = [];
        }
    }
    addEdge(vertex1,vertex2, weight){
        this.addVertex(vertex1)
        this.addVertex(vertex2)
        this.adjacencyList[vertex1].push({node:vertex2,weight});
        this.adjacencyList[vertex2].push({node:vertex1, weight});
    }
    dijkstra(start, end){
        let previous = {}
        let distances = {}
        var pq = new PriorityQueue()

        for (let vertex in this.adjacencyList) {
            distances[vertex] = (start === vertex) ? 0:Infinity;
        }
        pq.enqueue(start, 0)
        while( pq.values.length ){
            let smallest = pq.dequeue().val
            for (let vertexAdy of this.adjacencyList[smallest]) {
                let distance = vertexAdy.weight + distances[smallest]
                if(distances[vertexAdy.node]>distance){
                    distances[vertexAdy.node] = distance
                    previous[vertexAdy.node] = smallest
                    pq.enqueue(vertexAdy.node, distance)
                }
            }    
        }
        let resul = []
        //armar el camino VERTICE_END  ======> VERTICE_START
        while(previous[end]){
            resul.push(end)
            end = previous[end]
        }
        //armar el camino VERTICE_START ======> VERTICE_END
        return resul.concat(start).reverse()
    }
    //course
    dijkstraCourse(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        for(let vertex in this.adjacencyList){
            if(vertex === start){
                distances[vertex] = 0;
                nodes.enqueue(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.enqueue(vertex, Infinity);
            }
            previous[vertex] = null;
        }
        // as long as there is something to visit
        while(nodes.values.length){
            smallest = nodes.dequeue().val;
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            } 
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this.adjacencyList[smallest]){
                    //find neighboring node
                    let nextNode = this.adjacencyList[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.enqueue(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();     
    }
}
class PriorityQueue {
    constructor(){
      this.values = [];
    }
    enqueue(val, priority) {
      this.values.push({val, priority});
      this.sort();
    };
    dequeue() {
      return this.values.shift();
    };
    sort() {
      this.values.sort((a, b) => a.priority - b.priority);
    };
}



// console.log(dijkstras.adjacencyList["A"][1].node)
// for(let neighbor of dijkstras.adjacencyList["A"]){
//     console.log(neighbor)
// }
// var dijkstras = new WeightedGraph()
// dijkstras.addVertex("A")
// dijkstras.addVertex("B")
// dijkstras.addVertex("C")
// dijkstras.addVertex("D")
// dijkstras.addEdge("A", "B", 1)
// dijkstras.addEdge("A", "D", 2)
// dijkstras.addEdge("B", "C", 1)
// dijkstras.addEdge("C", "D", 2)
// console.log(dijkstras.dijkstra("A","C"))

var graph = new WeightedGraph()
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");

graph.addEdge("A","B", 4);
graph.addEdge("A","C", 2);
graph.addEdge("B","E", 3);
graph.addEdge("C","D", 2);
graph.addEdge("C","F", 4);
graph.addEdge("D","E", 3);
graph.addEdge("D","F", 1);
graph.addEdge("E","F", 1);

console.log(graph.dijkstra("A", "E"));
console.log(graph.dijkstra("A", "AA"));

// ["A", "C", "D", "F", "E"]