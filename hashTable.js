// Hash Table
class HashTable {

    // Constructor que recibe el tamaño de la tabla

    // el tamaño de la tabla es el numero de buckets que se refiere a la cantidad de elementos que puede almacenar la tabla
    constructor(size) {
        // Inicializar la tabla con el tamaño recibido 
        this.buckets = new Array(size);
        // Tamaño de la tabla
        this.numBuckets = this.buckets.length;
    }

    // Método para generar un número aleatorio que será el índice de la tabla
    hash(key) {

        // Convertir la llave en un string y obtener el código ASCII de cada caracter
        // inicializar la variable total que será la suma de los códigos ASCII
        let total = 0;
        // Recorrer el string
        for (let i = 0; i < key.length; i++) {

            // Sumar el código ASCII de cada caracter
            total += key.charCodeAt(i);

        }

        // Obtener el módulo del total entre el número de buckets

        // se obtiene el residuo de la division de total entre el numero de buckets
        let bucket = total % this.numBuckets;
        // esto seria algo asi como el indice de la tabla
        return bucket;
    }
    insert(key, value) {
        // obtener el índice de la tabla
        const index = this.hash(key);
        // si no hay nada en el bucket, inicializarlo con un array vacío
        if (!this.buckets[index]) {
            this.buckets[index] = [];
        }
        // agregar el elemento al bucket
        this.buckets[index].push([key, value]);

    }
    get(key) {
        // obtener el índice de la tabla
        const index = this.hash(key);
        // si no hay nada en el bucket, retornar null
        if (!this.buckets[index]) {
            return null;
        }
        // recorrer el bucket con for normal para poder retornar un valor
        for (let i = 0; i < this.buckets[index].length; i++) {
            // si el primer elemento del bucket es igual a la llave, retornar el segundo elemento
            if (this.buckets[index][i][0] === key) {
                return this.buckets[index][i][1];
            }
        }


    }

}

// crear una tabla de hash
const table = new HashTable(1);

// agregar elementos con diferentes llaves y valores
table.insert('sergio', { name: 'sergio', age: 22, email: 'sergio@gmail.com' })
table.insert('jorge', { name: 'jorge', age: 23, email: 'jorge@gmail.com' })
table.insert('maria', { name: 'maria', age: 24, email: 'maria@gmail.com' })
table.insert('carlos', { name: 'carlos', age: 25, email: 'carlos@gmail.com' })
table.insert('julio', { name: 'julio', age: 26, email: 'julios@gmail.com' })
table.insert('jose', { name: 'jose', age: 27, email: `jose@gmail.com` })

// obtener el valor de un elemento con una llave
console.log(table.get('sergio'));
console.log(table.get('jorge'));
console.log(table.get('maria'));

//output:
// { name: 'sergio', age: 22 }
// { name: 'jorge', age: 23 }
// { name: 'maria', age: 24 }