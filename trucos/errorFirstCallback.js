//Es una convencion que en las mayoria de funciones el error siempre va primero antes que otros parametros

function asincrona(callback) {
    setTimeout(()=>{
        try{
            let a=3+z
            callback(null, a); //devolvemos el error,data = null, a
        }catch(error){
            callback(error, null);
        }
    }, 1000);
}

asincrona((error, data)=>{
    if(error){
        console.error(error);
        return false;
        //throw error NO FUNCIONA CON FUNCIONES ASINCRONAS
    }

    console.log('Todo esta bien, mi data es: '+ data);
})