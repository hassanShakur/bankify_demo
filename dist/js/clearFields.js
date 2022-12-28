const inputUserName = document.querySelector('.user-name');
const inputPassword = document.querySelector('.password');

const transferAmount = document.querySelector('.transfer-amount');
const transferTo = document.querySelector('.transfer-to');
const inputAccountUser = document.querySelector('.close-acc-user');
const inputAccountPassword = document.querySelector('.close-acc-password');

function clearFields() {
  inputUserName.value =
    inputPassword.value =
    transferAmount.value =
    transferTo.value =
    inputAccountUser.value =
    inputAccountPassword.value =
      '';
}

export default clearFields;
