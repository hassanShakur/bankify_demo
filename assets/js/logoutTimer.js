// Start logout timer
import get from './getElement.js';

const timerLabel = get('.logout-timer');
const logoutBtn = get('.logout');

let time = 300;

function startLogoutTimer() {
  const tick = () => {
    logoutBtn.addEventListener('click', () => {
      clearInterval(timer);
      time = 300;
      timerLabel.textContent = '';
    });
    let mins = `${Math.floor(time / 60)}`.padStart(2, 0);
    let secs = `${time % 60}`.padStart(2, 0);

    timerLabel.textContent = `you will be logged out in ${mins}:${secs}`;
    if (time === 0) {
      clearInterval(timer);
      logoutBtn.click();
    }
    time--;
  };

  tick();
  const timer = setInterval(tick, 1000);
}

export default startLogoutTimer;
