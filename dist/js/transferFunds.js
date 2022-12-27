function transferFunds(amount, inputToAcc, currentUser, accounts) {
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
}

export default transferFunds;
