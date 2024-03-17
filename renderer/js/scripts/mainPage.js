const { getCurrentWindow, closeCurrentWindow, minimize, isMaximized, maximize, unmaximize, send, showErrorBox } = window.electron;
let currentWindow = getCurrentWindow();
console.log('mainPage.js loaded');

$(document).ready(function() {
    console.log('mainPage.js ready');





    // Event handlers for close, minimize, and maximize buttons
    $('#close').click(function() {
        closeCurrentWindow();
    });


    $('#minimize').click(function() {
        minimize();
    });

    $('#maximize').click(function() {
        if (isMaximized()) {
            unmaximize();
        }else {
            maximize();
        }
    });

});