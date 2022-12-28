import get from './getElement.js';

const inputUserName = get('.user-name');
const inputPassword = get('.password');

const transferAmount = get('.transfer-amount');
const transferTo = get('.transfer-to');
const inputAccountUser = get('.close-acc-user');
const inputAccountPassword = get('.close-acc-password');
const loanAmount = get('.request-loan-amount');

function clearFields() {
  const inputs = [
    inputUserName,
    inputPassword,
    transferAmount,
    transferTo,
    loanAmount,
    inputAccountUser,
    inputAccountPassword,
  ];

  inputs.forEach((input) => {
    input.value = '';
    input.blur();
  });
}

export default clearFields;
