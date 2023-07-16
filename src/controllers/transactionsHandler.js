const transactionService = require('../services/transactionsService');

const getTransactions = (req, res, next) => {
    let raw = transactionService.getTransactions();
    let response = {
        paying: [],
        receiving: [],
    };

    if (raw.length > 0) {
        response.paying = raw.filter((t) => t.amount < 0);
        response.receiving = raw.filter((t) => t.amount > 0)
    }

    res.json(response);
};

const addTransaction = (req, res, next) => {
    transactionService.addTransaction(req.body);
    res.send(200);
};

module.exports = { getTransactions, addTransaction };