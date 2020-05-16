const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        // webPreferences: { Para precargar archivos
        //     preload: {

        //     }
        // }
    })

    mainWindow.loadFile('index.html');
}

app.on('ready', createWindow);


//Ir  a ñadir el script de start: electron .
// punto porque el index esta en la misma ruta, sino ../ o donde este el index

//Correr --> npm start
