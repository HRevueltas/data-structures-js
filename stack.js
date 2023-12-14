// esta clase es para crear una pila de datos, es decir, una estructura de datos que se comporta como una pila, es decir, el ultimo elemento en entrar es el primero en salir
class Stack {

    // la pila tiene un array de elementos
    constructor() {
        this.items = [];
    }

    // agregar un elemento a la pila
    push(item) {
            this.items.push(item)
        }
        // sacar un elemento de la pila
    pop() {
            return this.items.pop()
        }
        // ver el ultimo elemento de la pila
    peek() {

        return this.items[this.items.length - 1]
    }
}
// crear una pila
const stack = new Stack()
    // agregar elementos a la pila
stack.push(1)
stack.push(2)
stack.push(4)
    // sacar un elemento de la pila
stack.pop()
    // ver el ultimo elemento de la pila
console.log(stack.peek())

//output: 2