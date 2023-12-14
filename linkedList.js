// cada elemetno de la lista es un nodo

class Node {
    // cada nodo tiene un valor y un puntero al siguiente nodo
    constructor(value, next = null) {
        //
        this.value = value;
        this.next = next;
    }

}
// lista enlazada
class LinkedList {
    // la lista enlazada tiene un head y un tail
    constructor() {
            this.head = null;
            this.tail = null
        }
        // agregar un elemento al final de la lista
    append(value) {
        // crear un nuevo nodo
        const newNode = new Node(value)

        // si no hay head, asignar el nuevo nodo como head y tail
        if (!this.head) {
            this.head = newNode
                // si hay head, asignar el nuevo nodo como tail
        } else {
            this.tail.next = newNode
        }
        // asignar el nuevo nodo como tail
        this.tail = newNode

    }

    // recorrer la lista
    traverse(callback) {
        // si no hay head, retornar null
        let currentNode = this.head
            // si hay head, recorrer la lista
        while (currentNode != null) {
            // ejecutar el callback con el nodo actual
            callback(currentNode);
            // asignar el siguiente nodo como el actual
            currentNode = currentNode.next;
        }
    }

}

//  imprimir el valor de cada nodo
const printNode = (node) => {
    // si no hay nodo, retornar null 
    let nextValue = node.next ? node.next.value : 'No hay siguiente valor';
    // si hay nodo, imprimir el valor del nodo actual y el siguiente
    console.log(`valor actual: ${node.value} - - - valor siguiente: ${nextValue}`);
};

// crear una lista
const list = new LinkedList()

// agregar elementos a la lista
list.append(1)
list.append(2)
list.append(3)
list.append(4)
list.append(5)

// recorrer la lista
list.traverse(printNode)