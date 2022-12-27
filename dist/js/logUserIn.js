import getTrans from './getTransactions.js';
import getTotals from './getTotals.js';
import get from './getElement.js';
import { acc1, acc2, acc3 } from './data.js';
import getUserName from './getInitials.js';

let activeUser;

const mainSection = get('.main');
const loginContainer = get('.login');
const inputUserName = get('.user-name');
const inputPassword = document.querySelector('.password');
const greetings = get('.greetings');

// * Get name initials from accounts
const accounts = [acc1, acc2, acc3];
getUserName(accounts);

const logUserIn = (e) => {
  e.preventDefault();

  activeUser = accounts.find(
    (account) => account.userName === inputUserName.value
  );
  if (activeUser?.pass === Number(inputPassword.value)) {
    mainSection.classList.add('logged-in');
    loginContainer.classList.add('hide-login');
  }

  // ? Populate the transactions
  getTrans(activeUser.transactions);

  // ! Get Balance, Ins and outs
  getTotals(activeUser.transactions, activeUser.interestRate);

  // ? Greet use
  greetings.innerHTML = `good <span class="greet-time">afternoon, </span
          ><span class="name">${activeUser.owner.split(' ')[0]}</span>`;

  // ! Reset login inputs
  inputPassword.value = inputUserName.value = '';
  inputPassword.blur();
};

export default logUserIn;
