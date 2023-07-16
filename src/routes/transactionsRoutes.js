const express = require('express');
const router  = express.Router(); 
const transactionsController = require('../controllers/transactionsHandler'); 


router.get('/transactions', transactionsController.getTransactions);

router.post('/transaction', transactionsController.addTransaction);

module.exports = router; 