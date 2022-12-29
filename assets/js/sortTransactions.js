import getTransactions from './getTransactions.js';

let control = -1;

const sortTransactions = (activeUser) => {
  const transactions = activeUser.transactions;
  let copyTrans = transactions.slice();
  control++;
  if (control > 2) control = 0;

  if (control === 0) {
    copyTrans.sort((a, b) => a - b);
    getTransactions(copyTrans);
    return;
  }
  if (control === 1) {
    copyTrans.sort((a, b) => b - a);
    getTransactions(copyTrans);
    return;
  }
  if (control === 2) {
    getTransactions(transactions);
    return;
  }
};

export default sortTransactions;
