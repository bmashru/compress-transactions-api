const express = require('express');
const router  = express.Router(); 
const transactionsController = require('../controllers/transactionsHandler'); 


router.get('/transactions', transactionsController.getTransactions);

router.post('/transaction', transactionsController.addTransaction);

router.get('/compressTransaction', transactionsController.compressTransactions);

module.exports = router; 