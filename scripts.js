// Create audio context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var audioContext = new AudioContext();

// Create AudioBufferSourceNode for both audios
var sourceNodeMain = null;
var sourceNodeBackground = null;

// Load audio files into buffers
function loadAudio(url, callback) {
    var request = new XMLHttpRequest();
    request.open('GET', url, true);
    request.responseType = 'arraybuffer';
    request.onload = function() {
        audioContext.decodeAudioData(request.response, function(buffer) {
            callback(buffer);
        });
    };
    request.send();
}

var mainBuffer = null;
loadAudio('Responsive Hypnosis Example.mp3', function(buffer) {
    mainBuffer = buffer;
});

var backgroundBuffer = null;
loadAudio('background.mp3', function(buffer) {
    backgroundBuffer = buffer;
});

// Play function
function playAudio(buffer, loop = false) {
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.loop = loop;
    source.connect(audioContext.destination);
    source.start(0);
    return source;
}

document.getElementById("mainCircle").addEventListener("click", function() {
    // Play main audio on click
    if (sourceNodeMain) {
        sourceNodeMain.stop();
        sourceNodeMain = null;
    } else {
        sourceNodeMain = playAudio(mainBuffer);
    }
});

document.getElementById("bottomMiddleButton").addEventListener("click", function() {
    // Play or pause background audio
    if (sourceNodeBackground) {
        sourceNodeBackground.stop();
        sourceNodeBackground = null;
    } else {
        sourceNodeBackground = playAudio(backgroundBuffer, true);
    }
});
