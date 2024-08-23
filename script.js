
const video = document.getElementById('backgroundVideo');
const playPauseBtn = document.getElementById('playPauseBtn');
const muteBtn = document.getElementById('muteBtn');
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

volumeSlider.addEventListener('input', () => {
    video.volume = volumeSlider.value;
    if (video.volume == 0) {
        muteBtn.textContent = 'Unmute';
        video.muted = true;
    } else {
        muteBtn.textContent = 'Mute';
        video.muted = false;
    }
});


