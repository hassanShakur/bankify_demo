import get from './getElement.js';
import updateUI from './updateUI.js';
import showNotification from './showNotification.js';

const loanAmount = get('.request-loan-amount');

const requestLoan = (currentUser) => {
  const amount = Number(loanAmount.value);

  if (amount > 10000) {
    showNotification('error', 'Loan must be less than 10000£!');
    return;
  }

  if (amount < 0 || !amount) {
    showNotification('error', 'please enter valid amount!');
    return;
  }

  currentUser.transactions.push(amount);
  updateUI(currentUser);
  clearFields();
  showNotification('error', `deposit of ${amount} successful`);
};

export default requestLoan;
