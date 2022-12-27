import getTrans from './getTransactions.js';
import getTotals from './getTotals.js';

const updateUI = (activeUser) => {
  // ? Populate the transactions
  getTrans(activeUser.transactions);

  // ! Get Balance, Ins and outs
  getTotals(activeUser.transactions, activeUser.interestRate);
};

export default updateUI;
