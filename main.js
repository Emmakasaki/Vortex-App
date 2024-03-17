const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { enable, initialize } = require('@electron/remote/main');
initialize();
let mainWindow;

function createWindow() {
    // Create the browser window
    mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: true,
            enableRemoteModule: true,
            preload: path.join(__dirname, 'preload.js')
        },
        frame: false,
        icon: 'yuu.jpg'
    });

    enable(mainWindow.webContents);
    mainWindow.webContents.openDevTools();
    // Load your application's HTML file
    mainWindow.loadFile('.\\renderer\\pages\\login.html');

    // Open the DevTools (optional)
    mainWindow.webContents.openDevTools();
}

ipcMain.on('login', (event, data) => {
    // Perform login logic here using the provided username and password
    const { username, password } = data;
    console.log(`Received login event\nUsername: ${username}\nPassword: ${password}\n`);
    mainWindow.loadFile('.\\renderer\\pages\\main.html');
});



app.whenReady().then(createWindow);

// Hide the menu bar
app.on('browser-window-created', function (event, window) {
    window.setMenu(null);
});

