const { exec, spawn } = require('child_process');

//Acceder a nuestro sistema a traves de la terminal
//El primer parametro es el comando a ejecutrar ej: dir o ls -al 
exec('node modulos/consola.js', (error, sdOut, StandarError) => {
    if(error){
        console.error(error.message);
        return false;
    }
    console.log(sdOut);
})

//Spawn nos permitira usar un nuevo proceso de node
//recibe el comando,si este tiene varios parametros de los debe pasar en un array
let proceso = spawn('ls',['-al']);

//Para cuando el proceso reciba algun dato
proceso.stdout.on('data',(dato)=>{
    console.log(dato.toString());
})

//Para cuando el proceso termine
proceso.on('exit',() => {
    console.log('El proceso termino')
})