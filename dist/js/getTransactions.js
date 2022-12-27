import get from './getElement.js';

const transactionsCont = get('.transactions');

const getTransactions = function (transaction) {
  transaction.forEach((trans, index) => {
    const transType = trans > 0 ? 'deposit' : 'withdrawal';

    const transHtml = `<!-- Single transaction -->
        <div class="transaction">
          <div class="transaction-type ${transType}">
            <span class="trans-index">${index + 1}</span>
            ${transType}
          </div>
          <div class="transaction-date">23/2/2020</div>
          <div class="transaction-amount">${trans}£</div>
        </div>
        <!-- End single transaction -->`;

    transactionsCont.insertAdjacentHTML('afterbegin', transHtml);
  });
};

export default getTransactions;
