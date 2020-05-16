//Gulp --> Se usa mas en frontend para compilar preprosesadores, o pasar el codigo por babel,
// o crear una tarea que hago alguna config por mi

//installar gulp -> npm install gulp gulp-server-livereload

//añadir los scripts en el package.json
/**
 * "start": "gulp" correra el proceso de gulp por defecto
 *  "build": "gulp build" correra el proceso build de gulp
 *  "serve": "gulp serve" correra el proceso serve de gulp
 */

 //crearmos el archivo gulpfile.js
 /**
const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) =>{
    console.log('Construyendo el sitio');
    setTimeout(() => {
        callback();
    }, 1200);  
});

//Crear la carpeta www y dentro un index.html que es lo que va a mostrar el serve
gulp.task('serve', (callback) => {
    gulp.src('www')
        .pipe(server({
            livereload: true,
            open: true
        }));
})

gulp.task('default', gulp.series('build', 'serve'))
por defecto ejecutara en serie la de build y serve

*/