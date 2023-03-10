import get from './getElement.js';

const notifier = get('.notification');

const showNotification = (type, message) => {
  notifier.textContent = message;
  notifier.style.backgroundColor = type === 'danger' ? 'red' : 'green';
  notifier.classList.add('show-notification');
  setTimeout(() => {
    notifier.classList.remove('show-notification');
  }, 3000);
};

export default showNotification;
