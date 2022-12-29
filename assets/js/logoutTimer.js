// Start logout timer
import get from './getElement.js';

const timerLabel = get('.logout-timer');
const logoutBtn = get('.logout');

let time = 300;

function startLogoutTimer(indicator = null) {
  const timer = setInterval(tick, 1000);

  function tick() {
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
    if (indicator === 1) {
      clearInterval(timer);
      time = 300;
      indicator = null;
    } else {
      time--;
    }
  }

  tick();
}

export default startLogoutTimer;
