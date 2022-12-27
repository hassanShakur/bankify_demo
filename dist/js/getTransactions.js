import get from './getElement.js';

const transactionsCont = get('.transactions');

const getTransactions = (transaction) => {
  let transHtml = transaction
    .map((trans, index) => {
      const transType = trans > 0 ? 'deposit' : 'withdrawal';

      return `<!-- Single transaction -->
        <div class="transaction">
          <div class="transaction-type ${transType}">
            <span class="trans-index">${index + 1}</span>
            ${transType}
          </div>
          <div class="transaction-date">23/2/2020</div>
          <div class="transaction-amount">${trans}£</div>
        </div>
        <!-- End single transaction -->`;
    })
    .reverse()
    .join('');

  transactionsCont.innerHTML = transHtml;
};

export default getTransactions;
