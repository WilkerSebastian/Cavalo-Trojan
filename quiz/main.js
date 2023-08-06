const { app, BrowserWindow } = require('electron');
const path = require('path');

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: true, 
    webPreferences: {
      nodeIntegration: true
    },
    icon: path.join(__dirname, './src/img/favicon.ico') 
  });

  win.loadFile('./src/index.html');
}

app.whenReady().then(createWindow);
