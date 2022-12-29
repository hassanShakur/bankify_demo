import get from './getElement.js';

const dateLabel = get('.date');
// const greetTime = get('greet-time');
// const { year, month, dayDate, hour, minutes, seconds } = getTimeDate();

function getTimeDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = `${now.getMonth() + 1}`.padStart(2, 0);
  const dayDate = `${now.getDate()}`.padStart(2, 0);
  const hour = `${now.getHours()}`.padStart(2, 0);
  const minutes = `${now.getMinutes()}`.padStart(2, 0);
  const seconds = `${now.getSeconds()}`.padStart(2, 0);

  let greetTime;

  if (hour < 3 && hour > 19) {
    greetTime = 'evining';
  } else if (hour > 12) {
    greetTime = 'afternoon';
  } else {
    greetTime = 'morning';
  }

  // Set current time and date
  dateLabel.textContent = `${year}/${month}/${dayDate}, ${hour}:${minutes}:${seconds}`;

  return { year, month, dayDate, hour, minutes, seconds, greetTime };
}

export default getTimeDate;
