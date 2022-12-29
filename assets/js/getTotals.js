import get from './getElement.js';

const balanceLabel = get('.balance');
const insLabel = get('.in-amount');
const outsLabel = get('.out-amount');
const interestLabel = get('.interest-amount');
import internationalize from './numInternationalizing.js';

const getTotals = (acc) => {
  let ins = 0;
  let outs = 0;

  // * Interest for every deposit
  let interest = acc.transactions
    .filter((trans) => trans > 0)
    .map((deposit) => deposit * (acc.interestRate / 100))
    .reduce((acc, int) => acc + int, 0);

  const balance = acc.transactions.reduce((acc, cur) => {
    if (cur > 0) {
      ins += cur;
    } else {
      outs += cur;
    }
    return acc + cur;
  }, 0);

  acc.balance = balance;

  balanceLabel.textContent = internationalize(balance);
  insLabel.textContent = internationalize(ins);
  outsLabel.textContent = internationalize(outs).slice(1);
  interestLabel.textContent = internationalize(interest);
};

export default getTotals;
