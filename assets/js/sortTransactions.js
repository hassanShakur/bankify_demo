import getTransactions from './getTransactions.js';

let control = -1;

const sortTransactions = (activeUser) => {
  const transactions = activeUser.transactions;
  let copyTrans = transactions.slice();
  activeUser.copyTransactions = copyTrans;
  control++;
  if (control > 2) control = 0;

  if (control === 0) {
    copyTrans.sort((a, b) => a - b);
    getTransactions(activeUser, 1);
    return;
  }
  if (control === 1) {
    copyTrans.sort((a, b) => b - a);
    getTransactions(activeUser, 1);
    return;
  }
  if (control === 2) {
    getTransactions(activeUser);
    return;
  }
};

export default sortTransactions;
