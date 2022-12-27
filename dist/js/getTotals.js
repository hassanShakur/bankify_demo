import get from './getElement.js';

const balanceLabel = get('.balance');
const insLabel = get('.in-amount');
const outsLabel = get('.out-amount');
const interestLabel = get('.interest-amount');

const getTotals = (transactions, interestRate) => {
  let ins = 0;
  let outs = 0;

  // * Interest for every deposit
  let interest = transactions
    .filter((trans) => trans > 0)
    .map((deposit) => deposit * (interestRate / 100))
    .reduce((acc, int) => acc + int, 0);

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
  outsLabel.textContent = `${Math.abs(outs)}£`;
  interestLabel.textContent = `${
    Math.round((interest + Number.EPSILON) * 100) / 100
  }£`;
};

export default getTotals;
