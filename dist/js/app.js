import get from './getElement.js';
import updateUI from './updateUI.js';
import logUserIn from './logUserIn.js';
import { acc1, acc2, acc3 } from './data.js';
import getUserName from './getInitials.js';
import transferFunds from './transferFunds.js';

let currentUser;

// * Get name initials from accounts
const accounts = [acc1, acc2, acc3];
getUserName(accounts);

// ? Validate login credentials and display information
const inputUserName = get('.user-name');
const inputPassword = get('.password');

const loginBtn = get('.login-btn');
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const password = Number(inputPassword.value);
  const userName = inputUserName.value;
  currentUser = logUserIn(userName, password, accounts);

  // * Update UI
  updateUI(currentUser);
});

// * Handle funds transfer

const transferBtn = get('.transfer-btn');
const transferAmount = get('.transfer-amount');
const transferTo = get('.transfer-to');

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(transferAmount.value);
  const inputToAcc = transferTo.value;

  transferFunds(amount, inputToAcc, currentUser, accounts);

  // * Update UI
  updateUI(currentUser);
});
