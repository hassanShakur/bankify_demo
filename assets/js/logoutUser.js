import get from './getElement.js';
import showNotification from './showNotification.js';
import clearFields from './clearFields.js';

const mainSection = get('.main');
const loginContainer = get('.login');
const greetings = get('.greetings');

const logoutUser = () => {
  mainSection.classList.remove('logged-in');
  loginContainer.classList.remove('hide-login');
  greetings.innerHTML = '';
  greetings.textContent = 'login to continue';

  clearFields();

  showNotification('success', `fare thee well 😊`);

  // * Focus on username input
  const inputUserName = get('.user-name');
  inputUserName.focus();
};

export default logoutUser;
