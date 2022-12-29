function calcDaysPassed(date) {
  const oneDay = 24 * 60 * 60 * 1000;
  const now = Date.now();
  const daysPassed = Math.floor(Math.abs((now - date) / oneDay));

  if (daysPassed === 0) return 'today';
  if (daysPassed === 1) return 'yesterday';
  if (daysPassed <= 10) return `${daysPassed} days ago`;
  return new Date(date);
}

export default calcDaysPassed;
