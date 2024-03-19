const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { enable, initialize } = require('@electron/remote/main');
require('events').EventEmitter.defaultMaxListeners = 15;
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

    // Enable the remote module
    enable(mainWindow.webContents);
    mainWindow.webContents.openDevTools();

    // Load your application's HTML file
    mainWindow.loadFile('.\\renderer\\pages\\login.html');

    // Open the DevTools (optional)
    mainWindow.webContents.openDevTools();
}

// Event handlers for the login page
ipcMain.on('login', (event, data) => {
    // Perform login logic here using the provided username and password
    const { username, password } = data;
    console.log(`Received login event\nUsername: ${username}\nPassword: ${password}\n`);
    mainWindow.loadFile('.\\renderer\\pages\\main.html');
});

// Event handlers for opening the main page
ipcMain.on('open-main-page', (event) => {
    console.log('Opening main page');
    mainWindow.loadFile('.\\renderer\\pages\\main.html');
});

// Event handlers for opening the games page
ipcMain.on('open-games-page', (event) => {
    console.log('Opening games page');
    mainWindow.loadFile('.\\renderer\\pages\\games.html');
});

// App ready event
app.whenReady().then(createWindow);

// Hide the menu bar
app.on('browser-window-created', function (event, window) {
    window.setMenu(null);
});

