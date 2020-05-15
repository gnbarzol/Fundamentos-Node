const sharp = require('sharp');

//Me crea un nuevo archivo llamado resized.png con tamaño 80x80
sharp('original.png')
    .resize(80)
    .grayscale() //para pasarlo a escala de grises
    .toFile('resized.png');


//Documentacion: https://www.npmjs.com/package/sharp