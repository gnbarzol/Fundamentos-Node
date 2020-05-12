function hola(nombre, callback) {
    setTimeout(()=>{
        console.log('Hola, ' + nombre);
        callback(nombre);
    },1000);
}

function adios(nombre, callback) {
    setTimeout(()=>{
        console.log('Adios, ' + nombre);
        callback();
    },1000);
}

console.log('Iniciando procesoo...');
hola('Gary', (nombre)=>{
    adios(nombre, ()=>{
        console.log('Terminando procesoo...');
    })
});


//Esto es importante, ya que cuando no sabemos cuanto va demorar la ejecucuion de una funcion nos
//aseguramos que vayan en ese orden. Porque asi no importa el tiempo que se demore siempre se va esperar
//que por ejemplo primero se ejecute hola antes que un adios.