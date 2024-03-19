const { getCurrentWindow, closeCurrentWindow, minimize, isMaximized, maximize, unmaximize, send, showErrorBox } = window.electron;
let currentWindow = getCurrentWindow();
console.log('mainPage.js loaded');

// Remove transition effect


$(document).ready(async function() {
    console.log('mainPage.js ready');

    $('#gamesFolder').css('transition', '0s'); 
    $('#gamesFolder').fadeIn(1500); // Fade in the games folder button
    console.log($('#gamesFolder').css('transition'));



    // Setting transition effect after the button has been faded in
    await $('gamesFolder').ready(function() {
        $('#gamesFolder').css('transition', '0.5s');
        console.log($('#gamesFolder').css('transition'));
    });
    

    


    // Event for games folder button
    $('#gamesFolder').click(function() {
        send('open-games-page');
    });




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