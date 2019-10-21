/* eslint-disable */
const path = require('path');
const { app, BrowserWindow, ipcMain } = require('electron');

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true';

require('electron-reload')(path.resolve(__dirname, '../dist'), {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
});

let win;

ipcMain.on('set.data', (e, args) => {
  win.webContents.send('get.data', args);
});

const createWindow = () => {
  win = new BrowserWindow({
    minWidth: 1016,
    minHeight: 639,
    width: 1016,
    height: 639,
    autoHideMenuBar: true,
    title: 'Área Administrativa | Studio Atual',
    webPreferences: {
      webSecurity: false,
      preload: path.resolve(__dirname, '..', 'preload.js'),
    },
  });
  win.setMenu(null);

  require('vue-devtools').install();

  win.loadFile(path.resolve(__dirname, '../dist/index.html'));

  win.webContents.openDevTools();

  win.on('closed', () => {
    win = null;
  });
};

app.disableHardwareAcceleration();

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (win === null) {
    createWindow();
  }
});
/* eslint-enable */
