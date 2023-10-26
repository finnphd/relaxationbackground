document.addEventListener('DOMContentLoaded', function() {
    let mainAudio = document.getElementById("mainAudio");
    let backgroundAudio = document.getElementById("backgroundAudio");
    let toggleButton = document.getElementById("backgroundToggleButton");
    let isBackgroundPlaying = false;

    function playMain() {
        mainAudio.play();
    }

    function stopMain() {
        mainAudio.pause();
        mainAudio.currentTime = 0;
    }

    function toggleBackground() {
        if (isBackgroundPlaying) {
            backgroundAudio.pause();
        } else {
            backgroundAudio.play();
        }
        isBackgroundPlaying = !isBackgroundPlaying;
    }

    // Main circle (play/stop main audio)
    document.getElementById("mainCircle").addEventListener("mousedown", playMain);
    document.getElementById("mainCircle").addEventListener("mouseup", stopMain);
    document.getElementById("mainCircle").addEventListener("touchstart", playMain);
    document.getElementById("mainCircle").addEventListener("touchend", stopMain);

    // Background audio toggle button event listener
    toggleButton.addEventListener("click", toggleBackground);

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
