const { getCurrentWindow, closeCurrentWindow, minimize, isMaximized, maximize, unmaximize, send, showErrorBox } = window.electron;
let currentWindow = getCurrentWindow();
console.log('login.js loaded');

$(document).ready(function() {
    console.log('login.js ready');

    console.log($('#container'));
    $('#container').css('bottom', '-100%');
    $('#container').css('position', 'relative');
    $('#container').show();
    $('#container').animate({ bottom:'5%' }, 1000);


    // Check if username and password are "admin"
    $('#signIn').click(function(event) {

        var username = $('#user').val();
        var password = $('#pass').val();

        if (username === 'admin' && password === 'admin') {
            console.log('Sending login event', { username, password });
            send('login', { username, password });
        } else {
            showErrorBox('Invalid Credentials', 'Username and password do not match');
        }
    });

    // Event handler for pressing enter key
    document.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            $('#signIn').click();
        }
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