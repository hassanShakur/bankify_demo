import get from './getElement.js';
import getTimeDate from './getTimeDate.js';

const transactionsCont = get('.transactions');

const getTransactions = (currentUser, copyTrans = '') => {
  const transactions = copyTrans
    ? currentUser.copyTransactions
    : currentUser.transactions;
  let transHtml = transactions
    .map((trans, index) => {
      const transType = trans > 0 ? 'deposit' : 'withdrawal';

      let { year, month, dayDate, daysPassed } = getTimeDate(
        new Date(currentUser.transactionDate[index])
      );

      const transactionDate =
        typeof daysPassed !== 'object'
          ? daysPassed
          : `${dayDate}/${month}/${year}`;

      return `<!-- Single transaction -->
        <div class="transaction">
          <div class="transaction-type ${transType}">
            <span class="trans-index">${index + 1}</span>
            ${transType}
          </div>
          <div class="transaction-date">${transactionDate}</div>
          <div class="transaction-amount">${trans.toFixed(2)}£</div>
        </div>
        <!-- End single transaction -->`;
    })
    .reverse()
    .join('');

  transactionsCont.innerHTML = transHtml;
};

export default getTransactions;
