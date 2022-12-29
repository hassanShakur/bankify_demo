import get from './getElement.js';
import updateUI from './updateUI.js';
import loginUser from './loginUser.js';
import logoutUser from './logoutUser.js';
import { acc1, acc2, acc3, acc4 } from './data.js';
import getUserName from './getInitials.js';
import transferFunds from './transferFunds.js';
import deleteAccount from './deleteAccount.js';
import requestLoan from './requestLoan.js';
import sortTransactions from './sortTransactions.js';

let currentUser;

// * Get name initials from accounts
const accounts = [acc1, acc2, acc3, acc4];
getUserName(accounts);

// ? Validate login credentials and display information
const loginBtn = get('.login-btn');
loginBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Login user and get user details
  currentUser = loginUser(accounts);

  
});

// * Handle funds transfer
const transferBtn = get('.transfer-btn');

transferBtn.addEventListener('click', (e) => {
  e.preventDefault();
  transferFunds(currentUser, accounts);

  // * Update UI
  updateUI(currentUser);
});

// ! Logout user
const logoutBtn = get('.logout');
logoutBtn.addEventListener('click', logoutUser);

// ! Close and delete user account
const closeAccountBtn = get('.close-acc-btn');

closeAccountBtn.addEventListener('click', (e) => {
  e.preventDefault();
  deleteAccount(currentUser, accounts);
});

// ? Request loan (Not greater than 10000)
const loanBtn = document.querySelector('.request-loan-btn');

loanBtn.addEventListener('click', (e) => {
  e.preventDefault();
  requestLoan(currentUser);
});

// ? Sort transactions

const sortBtn = get('.sort');

sortBtn.addEventListener('click', () => {
  sortTransactions(currentUser);
});



