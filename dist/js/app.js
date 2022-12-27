import get from './getElement.js';
import logUserIn from './logUserIn.js';

// ? Validate login credentials and display information
const loginBtn = get('.login-btn');
loginBtn.addEventListener('click', logUserIn);

import { acc1, acc2, acc3 } from './data.js';
const accounts = [acc1, acc2, acc3];



const transferBtn = document.querySelector('.transfer-btn');

const transferAmount = document.querySelector('.transfer-amount');
const transferTo = document.querySelector('.transfer-to');


transferBtn.addEventListener('click', transferFunds);

function transferFunds(e) {
  e.preventDefault();
  const amount = Number(transferAmount.value);
  const receiverAcc = accounts.find(
    (account) => account.userName === transferTo.value
  );

  if (amount > 0 && receiverAcc ) {

  }

}
