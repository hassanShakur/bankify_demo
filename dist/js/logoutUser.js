import get from './getElement.js';
import showNotification from './showNotification.js';
import clearFields from './clearFields.js';

const logoutUser = () => {
  const mainSection = get('.main');
  const loginContainer = get('.login');
  const greetings = get('.greetings');

  mainSection.classList.remove('logged-in');
  loginContainer.classList.remove('hide-login');
  greetings.innerHTML = '';
  greetings.textContent = 'login to continue';

  clearFields();

  showNotification('success', `fare thee well 😊`);
};

export default logoutUser;
