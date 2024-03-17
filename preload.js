const { contextBridge, ipcRenderer } = require('electron');
const { BrowserWindow, dialog } = require('@electron/remote');

contextBridge.exposeInMainWorld('electron', {
    getCurrentWindow: () => BrowserWindow.getFocusedWindow(),
    closeCurrentWindow: () => BrowserWindow.getFocusedWindow().close(),
    minimize: () => BrowserWindow.getFocusedWindow().minimize(),
    isMaximized: () => BrowserWindow.getFocusedWindow().isMaximized(),
    maximize: () => BrowserWindow.getFocusedWindow().maximize(),
    unmaximize: () => BrowserWindow.getFocusedWindow().unmaximize(),
    send: (channel, data) => {
        console.log('Sending', channel, data);
        ipcRenderer.send(channel, data);
    },
    showErrorBox: (title, content) => dialog.showErrorBox(title, content)
});