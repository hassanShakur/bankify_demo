import get from './getElement.js';
import logoutUser from './logoutUser.js';

const inputUserName = get('.close-acc-user');
const inputPassword = get('.close-acc-password');

const deleteAccount = (activeUser, accounts) => {
  const password = Number(inputPassword.value);
  const name = inputUserName.value;

  if (password === activeUser.pass && name == activeUser.userName) {
    const index = accounts.findIndex(
      (acc) => acc.userName === activeUser.userName
    );
    accounts.splice(index, 1);
    logoutUser();

    inputPassword.value = inputUserName.value = '';
  }
};

export default deleteAccount;
