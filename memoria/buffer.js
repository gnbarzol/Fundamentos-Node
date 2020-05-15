// let buffer = Buffer.alloc(4); //Me guarda 4 bytes de espacio en memoria

// let buffer = Buffer.from([1,2,3]);

let buffer = Buffer.from('Hola'); //me crea el espacio de memoria para esa cadena

// console.log(buffer); //con buffer.toString() puedo ver el contenido transformado de binario al objeto guardado

// Creamos el abecedario
let abc = Buffer.alloc(26);
console.log(abc);

for(let i=0; i<26; i++){
    abc[i] = i + 97; //Por el codigo ASCII
}

console.log(abc.toString());

