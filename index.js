const express = require('express');
const dotenv = require('dotenv');
const routes = require('./src/routes/transactionsRoutes');
const transactionService = require('./src/services/transactionsService');

dotenv.config();
const port = process.env.PORT;

const app = express();
app.use(express.json());
transactionService.init();

app.use('/', [routes]);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});