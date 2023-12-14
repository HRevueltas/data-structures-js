class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// crear un árbol binario
const root = new BinaryTree(1);

// agregar nodos al árbol

root.left = new BinaryTree(2);
root.right = new BinaryTree(3);

root.left.left = new BinaryTree(4);
// salida en consola
console.log(root);
//output:
// BinaryTree {
//     value: 1,
//     left: BinaryTree { value: 2, left: BinaryTree { value: 4, left: null, right: null }, right: null },
//     right: BinaryTree { value: 3, left: null, right: null }
//   }