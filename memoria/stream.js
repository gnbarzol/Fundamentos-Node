const fs = require('fs');
const stream = require('stream');
const util = require('util');

//Lectura
// let data = '';

// let readableStream = fs.createReadStream(__dirname + '/input.txt')
// readableStream.setEncoding('UTF8');
// readableStream.on('data', (chunk) => {
//     data += chunk;
// });

// readableStream.on('end', () => {
//     console.log(data);
// })

//Escritura
// process.stdout.write('hola');
// process.stdout.write('que');
// process.stdout.write('tal');

//Nos crea un stream de transformacion que al mismo tiempo puede leer y escribir
const Transform = stream.Transform;

function Mayus() {
    Transform.call(this);
}
util.inherits(Mayus, Transform);

Mayus.prototype._transform = function(chunk, codif, cb) {
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

let readableStream = fs.createReadStream(__dirname + '/input.txt')
readableStream.setEncoding('UTF8');
readableStream
    .pipe(mayus)
    .pipe(process.stdout);



/** 
Mi aporte de como lo veo:

** Stream**
Podría decirse que un Stream es el proceso de ir consumiendo datos al tiempo en que se reciben. Por ejemplo, cuando vemos un video en Youtube
 estamos consumiendo datos por medio de streaming (readable stream, porque solo podemos ver los videos mas no editarlos) ya que lo vemos al 
 mismo tiempo en que este se está descargando. de lo contrario habría que esperar a que se descargue el video por completo para poder verlo.

buffer
Si en el caso anterior, mientras vemos el video, fallara el internet, así sea por un segundo, la reproducción se pararía instantáneamente. 
Pero sabemos que en realidad no es así, el video continúa reproduciéndose por un tiempo mas. Esto es gracias a la implementación de un buffer 
el cuál es un espacio en memoria ram en donde la información proveniente del servidor llega por fragmentos (chunks), para luego ser consumido, 
y como ese almacenamiento de datos en el buffer se hace a bajo nivel, de forma binaria, el proceso es mucho mas rápido de lo que se consume. 
Es por eso que cuando reproducimos un video en Youtube vemos que este se carga mas rápido. (dependiendo del ancho de banda claro está)
*/