import get from './getElement.js';
import updateUI from './updateUI.js';

let activeUser;

const inputUserName = get('.user-name');
const inputPassword = get('.password');

const mainSection = get('.main');
const loginContainer = get('.login');
const greetings = get('.greetings');

const loginUser = (accounts) => {
  const password = Number(inputPassword.value);
  const name = inputUserName.value;
  activeUser = accounts.find((account) => account.userName === name);
  if (activeUser?.pass === password) {
    mainSection.classList.add('logged-in');
    loginContainer.classList.add('hide-login');

    // * Update UI
    updateUI(activeUser);

    // ? Greet user
    greetings.innerHTML = `good <span class="greet-time">afternoon, </span
          ><span class="name">${activeUser.owner.split(' ')[0]}</span>`;

    // ! Reset login inputs
    inputPassword.value = inputUserName.value = '';
    inputPassword.blur();
  } else {
    showNotification('error', 'wrong username or password');
  }

  return activeUser;
};

function showNotification(type, message) {
  const notifier = document.querySelector('.notification');
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'error' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 1400);
}

export default loginUser;
