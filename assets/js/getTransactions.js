import get from './getElement.js';
import getTimeDate from './getTimeDate.js';

const transactionsCont = get('.transactions');

const getTransactions = (currentUser) => {
  let transHtml = currentUser.transactions
    .map((trans, index) => {
      const transType = trans > 0 ? 'deposit' : 'withdrawal';

      const { year, month, dayDate } = getTimeDate(
        new Date(currentUser.transactionDate[index])
      );

      return `<!-- Single transaction -->
        <div class="transaction">
          <div class="transaction-type ${transType}">
            <span class="trans-index">${index + 1}</span>
            ${transType}
          </div>
          <div class="transaction-date">${dayDate}/${month}/${year}</div>
          <div class="transaction-amount">${trans.toFixed(2)}£</div>
        </div>
        <!-- End single transaction -->`;
    })
    .reverse()
    .join('');

  transactionsCont.innerHTML = transHtml;
};

export default getTransactions;
