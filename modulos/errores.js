const seRompe = () => 3 + z;

//Cada vez que tenemos algo que se puede rompar hay que encapsularlo en un try/catch
try{
    seRompe();
}catch(error) {
    console.error(error.message);
}

//Los errores van escalando para arriba ejemplo
const otraFuncion = () => {
    seRompe();
}

try{
    otraFuncion();
}catch(error) {
    console.error(error.message);
}

/**  
    Cuando estamos trabajando con asincronismo recordemos que cada proceso se ejeuta en un thread aparte
    por ende debemos no podemos hacer que un error escale a su funcion superior y, debemos manejarlo independientemente.
**/
const seRompeAsincrona = () => {
    setTimeout(()=> {
        try{
            return 3+z;
        }catch(error){
            console.error(error.message);
        }
    }, 1000);
}

seRompeAsincrona();