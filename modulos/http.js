const http = require('http');

const router = (req, res) => {
    console.log('Nueva peticion!');
    console.log(req.url);

    switch(req.url){
        case '/hola':
            res.write('Hola, que tal');
            res.end();
            break;
        default:
            res.write('Error 404: No se lo que buscas');
            res.end();
    }

    // //Crear un header para mandarle mas info al user
    // res.writeHead(201, {'Content-Type': 'text/plain'})

    // //Mnadar un mensaje de respuesta
    // res.write('Hola, ya se usar HTTP de NodeJS');
    // res.end();
}

//Servidor creado y escuchando en el puerto 3000
http.createServer(router).listen(3000);

console.log(`Escuchando en el puerto 3000`);