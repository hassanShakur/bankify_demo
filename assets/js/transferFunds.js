import get from './getElement.js';
import showNotification from './showNotification.js';
import clearFields from './clearFields.js';

const transferAmount = get('.transfer-amount');
const transferTo = get('.transfer-to');

const transferFunds = (currentUser, accounts) => {
  const amount = +transferAmount.value;
  const inputToAcc = transferTo.value.toLowerCase();

  const receiverAcc = accounts.find(
    (account) => account.userName === inputToAcc
  );

  if (!receiverAcc) {
    showNotification('error', 'please enter receiving account!');
    return;
  }
  if (currentUser.userName === receiverAcc.userName) {
    showNotification('error', 'you cannot transfer funds to self!');
    return;
  }
  if (amount <= 0) {
    showNotification('error', 'please check amount!');
    return;
  }
  if (currentUser.balance < amount) {
    showNotification('error', 'insufficient funds!');
    return;
  }

  // If no errors
  currentUser.transactions.push(-amount);
  receiverAcc.transactions.push(amount);
  showNotification(
    'success',
    `transfer of ${amount}£ to ${receiverAcc.owner} successful!`
  );

  // ! Reset transfer inputs
  clearFields();
  transferTo.blur();
};

export default transferFunds;
