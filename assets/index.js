import MediaPlayer from './mediaPlayer.js';
import AutoPlay from './plugins/AutoPlay.js';

const video = document.querySelector('video');
const player = new MediaPlayer({ el: video, plugins: [
    //new AutoPlay()
] });
const buttonPlay = document.getElementById('buttonPlay');
const buttonUnmute = document.getElementById('buttonUnmute');

buttonPlay.onclick = () => player.togglePlay();
buttonUnmute.onclick = () => player.toggleMute();