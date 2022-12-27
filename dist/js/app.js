import { acc1, acc2, acc3 } from './data.js';
import get from './getElement.js';
import getTrans from './getTransactions.js';

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


// ? Populate the transactions
let transaction = acc1.transactions;
getTrans(transaction);
