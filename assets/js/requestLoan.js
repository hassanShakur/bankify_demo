import get from './getElement.js';
import updateUI from './updateUI.js';
import clearFields from './clearFields.js';
import startLogoutTimer from './logoutTimer.js';
import showNotification from './showNotification.js';

const loanAmount = get('.request-loan-amount');

const requestLoan = (currentUser) => {
  const amount = Math.floor(loanAmount.value);

  if (amount > 10000) {
    showNotification('danger', 'Loan must be less than 10000£!');
    return;
  }

  if (amount < 0 || !amount) {
    showNotification('danger', 'please enter valid amount!');
    return;
  }

  setTimeout(() => {
    currentUser.transactions.push(amount);
    currentUser.transactionDate.push(new Date());

    updateUI(currentUser);
    clearFields();
  }, 3200);

  showNotification('success', `processing... this might take a minute...`);

  // * Restart logout timer
  startLogoutTimer(1);
};

export default requestLoan;
