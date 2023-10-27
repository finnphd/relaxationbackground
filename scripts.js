let foregroundAudio = new Audio("Responsive Hypnosis Example.mp3");
let backgroundAudio = new Audio("background.mp3");
let playButton = document.getElementById('play');
let backgroundPlayButton = document.getElementById('backgroundPlayButton');
let volumeControls = document.getElementById('volumeControls');
let toggleVolumeButton = document.getElementById('toggleVolume');
let foregroundVolumeSlider = document.getElementById('foregroundVolume');
let backgroundVolumeSlider = document.getElementById('backgroundVolume');

foregroundAudio.volume = foregroundVolumeSlider.value;
backgroundAudio.volume = backgroundVolumeSlider.value;

foregroundVolumeSlider.addEventListener('input', function() {
    foregroundAudio.volume = this.value;
});

backgroundVolumeSlider.addEventListener('input', function() {
    backgroundAudio.volume = this.value;
});

toggleVolumeButton.addEventListener('click', function() {
    if (volumeControls.style.right === "-350px") {
        volumeControls.style.right = "0";
    } else {
        volumeControls.style.right = "-350px";
    }
});

playButton.addEventListener('mousedown', startForegroundAudio);
playButton.addEventListener('mouseup', stopForegroundAudio);
playButton.addEventListener('touchstart', startForegroundAudio);
playButton.addEventListener('touchend', stopForegroundAudio);
playButton.addEventListener('keydown', function(event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        startForegroundAudio(event);
    }
});
playButton.addEventListener('keyup', function(event) {
    if (event.key === ' ' || event.key === 'Spacebar') {
        stopForegroundAudio(event);
    }
});

backgroundPlayButton.addEventListener('click', toggleBackgroundAudio);

function startForegroundAudio(e) {
    e.preventDefault();
    foregroundAudio.play();
    playButton.style.transform = "scale(0.9)";
}

function stopForegroundAudio() {
    foregroundAudio.pause();
    playButton.style.transform = "scale(1)";
}

function toggleBackgroundAudio() {
    if (backgroundAudio.paused) {
        backgroundAudio.play();
        backgroundPlayButton.textContent = "□";
    } else {
        backgroundAudio.pause();
        backgroundPlayButton.textContent = "▶";
    }
}
