const mainAudio = new Audio('path_to_audio_file.mp3');
const playPauseBtn = document.querySelector('.play-pause');

// Play on mousedown or touchstart
function playAudio() {
    mainAudio.play();
}

// Pause on mouseup, touchend, or keyup (spacebar)
function pauseAudio() {
    mainAudio.pause();
}

playPauseBtn.addEventListener('mousedown', playAudio);
playPauseBtn.addEventListener('mouseup', pauseAudio);
playPauseBtn.addEventListener('touchstart', playAudio);
playPauseBtn.addEventListener('touchend', pauseAudio);

document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        playAudio();
    }
});

document.addEventListener('keyup', function(event) {
    if (event.code === 'Space') {
        pauseAudio();
    }
});

// Prevent default behavior of spacebar (page scrolling)
document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
    }
});

// Error handling for audio events
mainAudio.onerror = function() {
    console.error("Error loading the audio file.");
    // Additional user feedback or handling can go here
};
