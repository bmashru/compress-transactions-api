let transactions = [];

const getTransactions = () => transactions;

const addTransaction = (transaction) => {
  transactions.push(transaction);
};

const compressTransactions = () => {
  let tranSet = new Map();
  transactions.forEach((value) => {
    if (tranSet.has(value.tradingParty + value.counterParty)) {
      tranSet.set(value.tradingParty + value.counterParty, {
        ...value,
        amount:
          value.amount +
          tranSet.get(value.tradingParty + value.counterParty).amount,
      });
    } else {
      tranSet.set(value.tradingParty + value.counterParty, value);
    }
  });
  return [...tranSet.values()];
};

module.exports = { getTransactions, addTransaction, compressTransactions };
