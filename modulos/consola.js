// console.log('Algo');
console.info('Info');
console.error('Error');
console.warn('Warning');

//Muestra datos en forma de tablas(modulos)
var tabla = [
    {
        nombre: 'Gary',
        apellido: 'Barzola',
    },{
        nombre: 'Juan',
        apellido: 'Navarez',
    }
]
console.table(tabla);

//Nos permite agrupar logs 
console.group('Conversacion');
console.log('Hola');
console.log('Bla bla bla');
console.log('Adios');
console.groupEnd('Conversacion');

//Hacer un contador, para saber cuantas veces se ejecuta una funcion
console.count('Veces');
console.count('Veces');
console.count('Veces');
console.countReset('Veces');
console.count('Veces');

