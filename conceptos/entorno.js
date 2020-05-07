//Crear una variable de entorno

let nombre = process.env.NOMBRE || 'Sin nombre';
let web = process.env.WEB || `'no hay web'`;

console.log('Hola ' + nombre);
console.log('Mi web es ' + web);
//Para darle un valor NOMBRE, ejecuto el codigo asi:
// NOMBRE=Gary node ruta-del-archivo.js en mac
//SET NOMBRE=GARY&&node conceptos/entorno.js en windows

//              NODEMON (Desarrollo)

//Nodemon es el gestor de node que crea un proceso que siempre esta a la escucho 
//de nuevos cambios en nuestro codigo para compilarlo de vuelta
//Instalacion -> npm install -g nodemon
//Para correrlo -> nodemon ruta-del-archivo.js



//              PM2 (Produccion)

//Es mas complejo de Nodemon, si algo se cae tratara de levantarlo
//tendra todo el codigo monitorizado, si ocurre un error sabra donde fue y porque
//No usarlo en desarrollo porque dara mas dolores de cabeza
//Instalacion -> npm install -g pm2
//Correr -> pm2 start ruta-del.archivo.js