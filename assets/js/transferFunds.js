import get from './getElement.js';
import showNotification from './showNotification.js';
import getTransactions from './getTransactions.js';
import clearFields from './clearFields.js';
import startLogoutTimer from './logoutTimer.js';

const transferAmount = get('.transfer-amount');
const transferTo = get('.transfer-to');

const transferFunds = (currentUser, accounts) => {
  const amount = +transferAmount.value;
  const inputToAcc = transferTo.value.toLowerCase();

  const receiverAcc = accounts.find(
    (account) => account.userName === inputToAcc
  );

  if (!receiverAcc) {
    showNotification('danger', 'please recheck receiving account!');
    return;
  }
  if (currentUser.userName === receiverAcc.userName) {
    showNotification('danger', 'you cannot transfer funds to self!');
    return;
  }
  if (amount <= 0) {
    showNotification('danger', 'please check amount!');
    return;
  }
  if (currentUser.balance < amount) {
    showNotification('danger', 'insufficient funds!');
    return;
  }

  // If no errors
  currentUser.transactions.push(-amount);
  currentUser.transactionDate.push(new Date());
  receiverAcc.transactions.push(amount);
  receiverAcc.transactionDate.push(new Date());
  getTransactions(currentUser);

  showNotification(
    'success',
    `transfer of ${amount}£ to ${receiverAcc.owner} successful!`
  );

  // * Restart logout timer
  startLogoutTimer(1);

  // ! Reset transfer inputs
  clearFields();
  transferTo.blur();
};

export default transferFunds;
