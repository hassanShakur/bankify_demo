import { acc1, acc2, acc3 } from './data.js';
import get from './getElement.js';
import getTrans from './getTransactions.js';
import getTotals from './getTotals.js';

const accounts = [acc1, acc2, acc3];

// * Get name initials from accounts

const getUserName = function (accs) {
  accs.forEach(function (acc) {
    acc.userName = acc.owner
      .toLowerCase()
      .split(' ')
      .map((name) => name[0])
      .join('');
  });
};

getUserName(accounts);

// ? Implement login information

// ? Populate the transactions
let transactions1 = acc1.transactions;
getTrans(transactions1);

// ! Get Balance, Ins and outs
getTotals(transactions1);

const loginBtn = document.querySelector('.login-btn');
const main = document.querySelector('.main');
const login = get('.login');

loginBtn.addEventListener('click', (e) => {
  e.preventDefault;
  console.log('hello');
  main.classList.add('logged-in');
  login.classList.add('hide-login');
});
