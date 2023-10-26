document.addEventListener('DOMContentLoaded', function() {
    let mainAudio = document.getElementById("mainAudio");
    let backgroundAudio = document.getElementById("backgroundAudio");
    let toggleButton = document.getElementById("backgroundToggleButton");
    let isBackgroundPlaying = false;

    function playMain() {
        console.log("Play Main Audio");
        mainAudio.play();
    }

    function stopMain() {
        console.log("Stop Main Audio");
        mainAudio.pause();
        mainAudio.currentTime = 0;
    }

    function toggleBackground() {
        console.log("Toggle Background Audio");
        if (isBackgroundPlaying) {
            backgroundAudio.pause();
        } else {
            backgroundAudio.play();
        }
        isBackgroundPlaying = !isBackgroundPlaying;
    }

    // Main circle (play/stop main audio)
    let mainCircle = document.getElementById("mainCircle");
    if(mainCircle) {
        mainCircle.addEventListener("mousedown", playMain);
        mainCircle.addEventListener("mouseup", stopMain);
        mainCircle.addEventListener("touchstart", playMain);
        mainCircle.addEventListener("touchend", stopMain);
    } else {
        console.error("Main Circle element not found");
    }

    // Background audio toggle button event listener
    if(toggleButton) {
        toggleButton.addEventListener("click", toggleBackground);
    } else {
        console.error("Toggle Button element not found");
    }

    document.body.addEventListener("keydown", function (event) {
        if (event.code === "Space") {
            playMain();
        }
    });

    document.body.addEventListener("keyup", function (event) {
        if (event.code === "Space") {
            stopMain();
        }
    });
});
