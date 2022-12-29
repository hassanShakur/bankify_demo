import get from './getElement.js';
import clearFields from './clearFields.js';
import showNotification from './showNotification.js';

const inputUserName = get('.close-acc-user');
const inputPassword = get('.close-acc-password');
const logoutBtn = get('.logout');

const deleteAccount = (activeUser, accounts) => {
  const password = +inputPassword.value;
  const name = inputUserName.value.toLowerCase();

  if (password !== activeUser.pass || name !== activeUser.userName) {
    showNotification('error', 'wrong username or password!');
    return;
  }

  // Correct details
  const index = accounts.findIndex(
    (acc) => acc.userName === activeUser.userName
  );
  logoutBtn.click();
  accounts.splice(index, 1);
  showNotification('error', 'Account closed! Regards.');

  clearFields();
};

export default deleteAccount;
