import get from './getElement.js';

const balanceLabel = get('.balance');
const insLabel = get('.in-amount');
const outsLabel = get('.out-amount');

const getTotals = (transactions) => {
  let ins = 0;
  let outs = 0;
  const balance = transactions.reduce((acc, cur) => {
    if (cur > 0) {
      ins += cur;
    } else {
      outs += cur;
    }
    return acc + cur;
  }, 0);
  balanceLabel.textContent = `${balance}£`;
  insLabel.textContent = `${ins}£`;
  outsLabel.textContent = `${outs}£`;
};

export default getTotals;
