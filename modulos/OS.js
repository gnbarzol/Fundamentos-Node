const os = require('os');

//arch de arquitectura = x64
console.log(os.arch());

//Ver la plataforma donde estamos windows, linux, mac
console.log(os.platform());

//acceder a la info de la cpu
console.log(os.cpus());
console.log(`El procesador tiene ${os.cpus().length} nucleos`);

//Errores del sistema operativo
console.log(os.constants);

//Memoria libre que tenemos
const SIZE = 1024;
const kb = (bytes) => {
    return bytes / SIZE;
}
const mb = (bytes) => {
    return kb(bytes) / SIZE;
}
const gb = (bytes) => {
    return mb(bytes) / SIZE;
}
console.log('Memoria ram total: ' + gb(os.totalmem()));
console.log('Memoria ram libre: ' + gb(os.freemem()));

//Saber el directorio raiz del usuario
console.log('Tu directorio raiz es: ' + os.homedir());
console.log('Tu directorio temporal es: ' + os.tmpdir());

//Saber el nombre de tu maquina
console.log(os.hostname());

//Interfaces de red
console.log(os.networkInterfaces());









