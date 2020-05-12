const hola = (nombre) => {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log('Hola, ' + nombre);
            resolve(nombre);
        },1000);
    });
}

const hablar = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Bla bla bla bla...');
            resolve(nombre);
            //reject('Mensaje de error'); para simular que la promeso devolvio un error
        }, 1000);
    })
}

const adios = (nombre) => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            console.log('Adios, ' + nombre);
            resolve();
        },1000);
    })
}

console.log('Iniciando el proceso...');
hola('Gary')
    .then(hablar)
    .then(hablar)
    .then(hablar)
    .then(adios)
    .then(() => {
        console.log('Terminado el proceso...');
    })
    .catch(error => { //Cuando cualquier then de error se ejecuta el catch
        console.log('Ha habido un error');
        console.log(error);
    })