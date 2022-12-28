import get from './getElement.js';
import updateUI from './updateUI.js';
import clearFields from './clearFields.js';
import showNotification from './showNotification.js';

let activeUser;

const inputUserName = get('.user-name');
const inputPassword = get('.password');

const mainSection = get('.main');
const loginContainer = get('.login');
const greetings = get('.greetings');

const loginUser = (accounts) => {
  const password = +inputPassword.value;
  const name = inputUserName.value.toLowerCase();

  activeUser = accounts.find((account) => account.userName === name);
  if (activeUser?.pass === password) {
    mainSection.classList.add('logged-in');
    loginContainer.classList.add('hide-login');

    showNotification('success', `welcome back, ${activeUser.owner}!`);

    // * Update UI
    updateUI(activeUser);

    // ? Greet user
    greetings.innerHTML = `good <span class="greet-time">afternoon, </span
          ><span class="name">${activeUser.owner.split(' ')[0]}</span>`;

    // ! Reset login inputs
    clearFields();
    inputPassword.blur();
  } else {
    showNotification('error', 'wrong username or password!');
  }

  return activeUser;
};

export default loginUser;
