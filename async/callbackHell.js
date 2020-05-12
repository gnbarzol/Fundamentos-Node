function hola(nombre, callback) {
    setTimeout(()=>{
        console.log('Hola, ' + nombre);
        callback(nombre);
    },1000);
}

const hablar = (callback) => {
    setTimeout(()=>{
        console.log('Bla bla bla bla...');
        callback();
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(()=>{
        console.log('Adios, ' + nombre);
        callback();
    },1000);
}

//CallBack Hell

// console.log('Iniciando procesoo...');
// hola('Gary', (nombre)=>{
//     hablar(()=> {
//         hablar(()=>{
//             hablar(()=>{
//                 adios(nombre, ()=>{
//                     console.log('Terminando procesoo...');
//                 })
//             })
//         })
//     });
// });

//Refactorizacion para callbacks mas legibles
const conversacion = (nombre, veces, callback) => {
    if(veces === 0){
        callback(nombre);
        return;
    }
    hablar(()=> conversacion(nombre, --veces, callback))
}

console.log('Iniciando proceso');
hola('Gary',(nombre) => {
    conversacion(nombre, 3, (nombre) => {
        adios( nombre,()=> console.log('Terminado proceso...') )
    })
})