const fs = require('fs');

const leer = (ruta, callback) => {
    fs.readFile(ruta,(error, data) => {
        callback(data.toString());
    })
}

const escribir = (ruta, contenido, callback) => {
    fs.writeFile(ruta,contenido, (error) => {
        if(error){
            console.log('No he podido escribir ', error)
        }else{
            console.log('Se ha escrito correctamente')
        }
    })
}

const borrar = (ruta, cb) => {
    fs.unlink(ruta, cb);
}

// escribir(__dirname + '/archivo1.txt', 'Soy un archivo nuevo 2', console.log)
// leer(__dirname + '/archivo.txt', console.log);
borrar(__dirname + '/archivo1.txt', console.log);