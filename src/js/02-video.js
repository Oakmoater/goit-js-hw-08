import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const player = new Player('vimeo-player');
const currentTimeKey = 'videoplayer-current-time';

const onTimeUpdate = throttle((data) => {
  const currentTime = data.seconds;
  localStorage.setItem(currentTimeKey, currentTime);
}, 1000); 

player.on('timeupdate', onTimeUpdate);

const storedTime = localStorage.getItem(currentTimeKey);
if (storedTime) {
  player.setCurrentTime(storedTime);
}