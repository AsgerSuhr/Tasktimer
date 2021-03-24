const { app, BrowserWindow, ipcMain, dialog } = require('electron')
const path = require('path')
const fs = require('fs')
let win

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,            
            preload: path.join(__dirname, 'preload.js')
        }
    })
    // loading the window html
    win.loadFile('index.html')
    // removes the default menubar (File, Edit, View etc.)
    win.setMenuBarVisibility(false);
}

// when the content is loaded create the window
app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

ipcMain.on('save', (event, text)=>{
    // save text to a file
    dialog.showSaveDialog(win, {
        // can customize options here, if you want
        defaultPath:'filename.txt'

      }).then((result) => {

        console.log('Second Response: ', result) // you probably want result.filePath

        if (result.filePath !== '')
            fs.writeFile(result.filePath, text, (err) => {
                if (err)
                    console.log('There was an error: ', err)
                else
                    console.log('file has been saved')
            })
            
      }).catch((...args) => {

        console.warn('failed/rejected with', args)
      })

})