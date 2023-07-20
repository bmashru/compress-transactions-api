const transactionService = require('../services/transactionsService');

const getTransactions = (req, res, next) => {
    let rows = transactionService.getTransactions();
    let response = {
        paying: [],
        receiving: [],
    };

    for (let i = 0; i < rows.length; i++) {
        if (rows[i].amount > 0) {
            response.receiving.push(rows[i])
        } else {
            response.paying.push({ ...rows[i], amount: rows[i].amount * -1 })
        }
    }

    res.json(response);
};

const addTransaction = (req, res, next) => {
    if(!req.body.tradingParty || !req.body.counterParty || !/^-[1-9]\d*$/.test(req.body.amount)) {
        return res.status(400).send('');
    }
    transactionService.addTransaction(req.body);
    res.send({ added: true });
};

const compressTransactions = (req, res, next) => res.send(transactionService.compressTransactions());;

module.exports = { getTransactions, addTransaction, compressTransactions };