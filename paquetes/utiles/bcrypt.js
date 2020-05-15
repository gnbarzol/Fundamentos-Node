const bcrypt = require('bcrypt');

const password = '123segura';

//Se usa con callback, promesas o async await.
bcrypt.hash(password, 10, function(err, hash) {
    console.log(hash) //mandamos el hash a la db

    bcrypt.compare(password, hash, function(err, result) {
        console.log(result);
        console.log(err);
    })
})

//Leer documentacion https://www.npmjs.com/package/bcrypt

