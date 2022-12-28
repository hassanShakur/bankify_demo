import get from './getElement.js';
import logoutUser from './logoutUser.js';
import clearFields from './clearFields.js';
import showNotification from './showNotification.js';

const inputUserName = get('.close-acc-user');
const inputPassword = get('.close-acc-password');

const deleteAccount = (activeUser, accounts) => {
  const password = Number(inputPassword.value);
  const name = inputUserName.value.toLowerCase();

  if (password !== activeUser.pass || name !== activeUser.userName) {
    showNotification('error', 'wrong username or password!');
    return;
  }

  // Correct details
  const index = accounts.findIndex(
    (acc) => acc.userName === activeUser.userName
  );
  accounts.splice(index, 1);
  logoutUser();
  showNotification('error', 'Account closed! Regards.');

  clearFields();
};

export default deleteAccount;
