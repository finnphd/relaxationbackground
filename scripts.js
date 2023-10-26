document.addEventListener('DOMContentLoaded', function() {
    let mainAudio = document.getElementById("mainAudio");
    let backgroundAudio = document.getElementById("backgroundAudio");
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
