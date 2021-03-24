// acces the IPC (Inter Process Connection) renderer to communicate with the main process
const electron = require('electron')
const { ipcRenderer } = electron

// select our textarea object
let textarea = document.querySelector('textarea');
let defaultFontSize = 20;

function increaseFont() {
    // add 1 to the default size and set the textarea to the new size
    textarea.style.fontSize = `${++defaultFontSize}px`
};

function decreaseFont() {
    // add 1 to the default size and set the textarea to the new size
    textarea.style.fontSize = `${--defaultFontSize}px`
};

function saveText(){
    let text = textarea.value
    console.log(text)
    ipcRenderer.send('save', text)
};