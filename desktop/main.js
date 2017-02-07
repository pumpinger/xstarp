// Basic init
const electron = require('electron')
const {app, BrowserWindow} = electron
const {shell} = require('electron')
const path = require('path');
const fs = require('fs');

// Let electron reloads by itself when webpack watches changes in ./app/
require('electron-reload')(__dirname);

// To avoid being garbage collected
let mainWindow,fmWindow

function createMainWindow() {
    mainWindow = new BrowserWindow({
        width: 1160,
        height: 800,
        titleBarStyle: 'hidden-inset',
        // vibrancy: 'dark'
    })
        // `file://${__dirname}/app/index.html`
    mainWindow.loadURL(`file://${__dirname}/app/index.html`)

    mainWindow.webContents.openDevTools()

    mainWindow.on('closed', () => {
        mainWindow = null
    })
}

function createFmWindow() {
    fmWindow = new BrowserWindow({
        width: 1160,
        height: 800,
        titleBarStyle: 'hidden-inset',
        // vibrancy: 'dark'
    })
    // `file://${__dirname}/app/index.html`
    fmWindow.loadURL(`file://${__dirname}/app/fileManager.html`)

    fmWindow.webContents.openDevTools()

    fmWindow.on('closed', () => {
        mainWindow = null
    })
}


app.on('ready', () => {
    // createMainWindow()
    createFmWindow()
})


