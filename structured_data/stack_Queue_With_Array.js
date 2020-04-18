var stack = new Array()
//stack
stack.push("hola")
stack.push("como")
stack.push("estas")
stack.push("?")
console.log("stack")
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())
console.log(stack.pop())

//stack
console.log("stack")
stack.unshift("hola")
stack.unshift("como")
stack.unshift("estas")
stack.unshift("?")

console.log(stack.shift())
console.log(stack.shift())
console.log(stack.shift())
console.log(stack.shift())

var queue = new Array()

//queue
console.log("queue")
queue.push("hola")
queue.push("como")
queue.push("estas")
queue.push("?")

console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())
console.log(queue.shift())

//queue
console.log("queue")
queue.unshift("hola")
queue.unshift("como")
queue.unshift("estas")
queue.unshift("?")

console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())
console.log(queue.pop())