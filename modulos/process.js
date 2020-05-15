//No hace falta traerlo porque ya viene en los globales
// const process = require('process');

//Hacer algo antes de que terminte un proceso
process.on("beforeExit", () => {
    console.log('El proceso va a terminar.')
});

//Hacer algo despues de que acabe el proceso
//Cuando se ejecuta este ya estoy desconectado del event loop, por lo tanto
//todo lo que realice debe ser sincrono y se realizara en el hilo principal, un setTimeOut ejemplo no se ejecutara nunca
process.on('exit', () => {
    console.log('Bro, el proceso acabó.')
});

//Para capturar exceptions que se me pasaron por algo y no atrape
process.on('uncaughtException',(err, origen) => {
    console.log('Vaya, se te ha olvidado capturar un error')
    console.error(err.message);
    console.log(origen);
})

//Para capturar promesas que se han rechazado y no tenian un catch
process.on('unhandledRejection',(err, origen) => {
    console.log('Una promesa arrojo un error')
})

funcionquenoexite();

