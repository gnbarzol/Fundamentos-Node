/**
Los modulos globales son modulos del core
Son modulos que ya vienen incluidos de forma global, como console, error, timeout
**/ 

// console.log(global);

// console.log(setInterval);

let i=0;
let intervalo = setInterval(()=>{ //Util para conexion a db por si no quiere conectar que intente varias veces
    if(i++ === 3){
        clearInterval(intervalo);
    }
    console.log('Hola');
},1000);

setImmediate(()=>{
    console.log('Esto se ejecuto de inmediato');
})

// require('NOMBRE DEL MODULO'); //Nos permite acceder a cualquier modulo

console.log(__dirname); //Nos da el directorio donde estamos ubicados

console.log(__filename); //Ruta del archivo donde estoy

//Crear variables globales;
global.miVariable = 'Mi variable';
console.log(miVariable); //tambien se pueden llamar como global.miVariable