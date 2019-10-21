const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const { autoUpdater } = require('electron-updater')

autoUpdater.autoDownload = false

let win

ipcMain.on('set.data', (e, args) => {
  win.webContents.send('get.data', args)
})

const createWindow = () => {
  win = new BrowserWindow({
    minWidth: 1016,
    minHeight: 639,
    width: 1016,
    height: 639,
    autoHideMenuBar: true,
    title: "Área Administrativa | Studio Atual v" + autoUpdater.currentVersion,
    webPreferences: {
      webSecurity: false,
    }
  })
  win.setMenu(null)

  win.loadFile(path.resolve(__dirname, '../dist/index.html'))

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', () => {
  createWindow()

  // Check for new version
  autoUpdater.checkForUpdatesAndNotify()

  // Not available an update
  autoUpdater.on('update-not-available', updateNotAvailable)

  // Available an update
  autoUpdater.on('update-available', updateAvailable)

  // Track download progress on autoUpdater
  autoUpdater.on('download-progress', updateDownloadProgress)

  // Listen for completed update download
  autoUpdater.on('update-downloaded', updateDownloaded)
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

const updateNotAvailable = () => {
  setTimeout(() => {
    autoUpdater.checkForUpdatesAndNotify()
  }, 60000)
}

const updateAvailable = () => {
  win.webContents.send('update-new-version', true)
  ipcMain.on('update-confirm', (e, confirm) => {
    if (confirm) {
      autoUpdater.downloadUpdate()
    }
  })
}

const updateDownloadProgress = (progressObj) => {
  win.webContents.send('download-progress', progressObj.percent)
}

const updateDownloaded = () => {
  win.webContents.send('update-downloaded', true)
  ipcMain.on('update-install-confirm', (e, confirm) => {
    if (confirm) {
      autoUpdater.quitAndInstall()
    }
  })
}
