import get from './getElement.js';

const logoutUser = () => {
  const mainSection = get('.main');
  const loginContainer = get('.login');
  const greetings = get('.greetings');

  mainSection.classList.remove('logged-in');
  loginContainer.classList.remove('hide-login');
  greetings.innerHTML = '';
  greetings.textContent = 'login to continue';
};

export default logoutUser;
