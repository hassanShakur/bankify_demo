import get from './getElement.js';

const transferAmount = get('.transfer-amount');
const transferTo = get('.transfer-to');

const transferFunds = (currentUser, accounts) => {
  const amount = Number(transferAmount.value);
  const inputToAcc = transferTo.value;
  const receiverAcc = accounts.find(
    (account) => account.userName === inputToAcc
  );

  if (
    amount > 0 &&
    currentUser.balance > amount &&
    receiverAcc &&
    currentUser.userName !== receiverAcc.userName
  ) {
    currentUser.transactions.push(-amount);
    receiverAcc.transactions.push(amount);

    // ! Reset transfer inputs
    transferAmount.value = transferTo.value = '';
    transferTo.blur();
  }
};

export default transferFunds;
