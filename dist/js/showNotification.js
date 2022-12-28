import get from './getElement.js';

const notifier = get('.notification');

const showNotification = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'error' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 1800);
};

export default showNotification;
