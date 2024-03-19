const { getCurrentWindow, closeCurrentWindow, minimize, isMaximized, maximize, unmaximize, send, showErrorBox } = window.electron;
let currentWindow = getCurrentWindow();
console.log('gamesPage.js loaded');

$(document).ready(function() {
    console.log('gamesPage.js ready');
    
    // Event for adding a game
    $('#addGames').click(function() {
        console.log('Opening add game modal')
        $('#addGamesModal').fadeIn(500);
    });








 // Event handlers for close, minimize, maximize, and back buttons
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

$('#back').click(function() {
    send('open-main-page');
});

});