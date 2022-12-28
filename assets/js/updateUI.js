import getTrans from './getTransactions.js';
import getTotals from './getTotals.js';
import clearFields from './clearFields.js';

const updateUI = (activeUser) => {
  // ? Populate the transactions
  getTrans(activeUser.transactions);

  // ! Get Balance, Ins and outs
  getTotals(activeUser);

  // Clear fields
  clearFields();
};

export default updateUI;
