import get from './getElement.js';

let activeUser;

const mainSection = get('.main');
const loginContainer = get('.login');
const greetings = get('.greetings');



const logUserIn = (name, password, accounts) => {
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
