
let transactions = [];


const init = () => {
    transactions = []
}

const getTransactions = () => transactions;

const addTransaction = (transaction) => {
    transactions.push(transaction)

}

module.exports = {init, getTransactions, addTransaction};