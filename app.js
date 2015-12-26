/*
    Date: 2015-12-25
*/

var app = {
    self : {},

    onDeviceReady : function () {
        //alert("device ready.");
        if (device.platform === "iOS") {
            alert("got iOS.");
            // hide Exit button. They don't have one on iOS devices.
            // http://www.mzcart.com/javascript-how-to-addremove-css-class-from-a-dom-element/
            document.getElementById('exitApp').classList.add("hidden");
            // deals with post-iOS-7 change that covers the status bar
            // http://coenraets.org/blog/2013/09/phonegap-and-cordova-with-ios-7/
            document.body.style.marginTop = "20px";
            // hide the Splash Screen for iOS only
            navigator.splashscreen.hide();
        } else if (device.platform == 'Android') {
            // Get rid of 300ms delay 
            document.addEventListener('DOMContentLoaded', function() { FastClick.attach(document.body); }, false);
            //
            document.getElementById('exitApp').addEventListener('click', function() {
                app.exit();
            });
        } else if (device.platform == 'browser') {
            document.getElementById('exitApp').addEventListener('click', function() {
                app.exit();
            });
        }
        plugin.test();
    },
    exit : function () {
        console.log('Called app.exit()');
        if ('app' in navigator) {
            navigator.app.exitApp();
        } else {
            alert('exit button hit.');
        }
    }
};

//
// Wait for PhoneGap to load
document.addEventListener("deviceready", app.onDeviceReady, false);

var plugin = {
    self : {},
    db   : {},

    // Is API available?
    test : function () {
        console.log("app.test");
        $('#isavailable').html(plugin.available('indexedDB'));
    },
    test2 : function (data) {
        $('#resultPlugin').html(data);
    },
    test3 : function () {
    },
    // See alternate method: http://code.tutsplus.com/tutorials/working-with-indexeddb--net-34673 under "Let's Get Started"
    available: function (type) {
        return (type in window) ?  true : false;
    }
};
