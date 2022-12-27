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

const loginBtn = get('.login-btn');
loginBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Login user and get user details
  currentUser = logUserIn(accounts);

  // * Update UI
  updateUI(currentUser);
});

// * Handle funds transfer

const transferBtn = get('.transfer-btn');

transferBtn.addEventListener('click', function (e) {
  e.preventDefault();

  // Transfer funds
  transferFunds(currentUser, accounts);

  // * Update UI
  updateUI(currentUser);
});
