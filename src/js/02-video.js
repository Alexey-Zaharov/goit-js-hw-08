import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const throttled = throttle(
  data => {
    localStorage.setItem(
      'videoplayer-current-time',
      JSON.stringify(data.seconds)
    );
  },
  1000,
  { trailing: true }
);

player.on('timeupdate', throttled);
player
  .setCurrentTime(JSON.parse(localStorage.getItem('videoplayer-current-time')))
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });

// const onPlay = function (data) {
//   localStorage.setItem(
//     'videoplayer-current-time',
//     JSON.stringify(data.seconds)
//   );
// };
// const throttled = throttle(onPlay, 1000, { leading: true });
