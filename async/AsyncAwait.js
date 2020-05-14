const hola = async (nombre) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Hola, ' + nombre);
            resolve(nombre);
        },1000);
    });
}

const hablar = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Bla bla bla bla...');
            resolve(nombre);
            //reject('Mensaje de error'); para simular que la promeso devolvio un error
        }, 1000);
    })
}

const adios = async (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Adios, ' + nombre);
            resolve();
        },1000);
    })
}

const main = async () => {
    let nombre = await hola('Gary');
    await hablar();
    await hablar(); 
    await hablar(); 
    await adios(nombre); 
    console.log('Termina el proceso');
}

console.log('Comienza el proceso');
main();