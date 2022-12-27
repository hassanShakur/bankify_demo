import get from './getElement.js';
import logUserIn from './logUserIn.js';

// ? Implement login information
const loginBtn = get('.login-btn');

loginBtn.addEventListener('click', logUserIn);
