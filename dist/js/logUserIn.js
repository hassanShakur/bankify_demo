import get from './getElement.js';

let activeUser;

const inputUserName = get('.user-name');
const inputPassword = get('.password');

const mainSection = get('.main');
const loginContainer = get('.login');
const greetings = get('.greetings');

const logUserIn = (accounts) => {
  const password = Number(inputPassword.value);
  const name = inputUserName.value;
  activeUser = accounts.find((account) => account.userName === name);
  if (activeUser?.pass === password) {
    mainSection.classList.add('logged-in');
    loginContainer.classList.add('hide-login');
  }

  // ! Reset login inputs
  inputPassword.value = inputUserName.value = '';
  inputPassword.blur();

  // ? Greet user
  greetings.innerHTML = `good <span class="greet-time">afternoon, </span
          ><span class="name">${activeUser.owner.split(' ')[0]}</span>`;

  return activeUser;
};

export default logUserIn;
