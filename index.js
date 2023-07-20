const express = require('express');
const routes = require('./src/routes/transactionsRoutes');
const transactionService = require('./src/services/transactionsService');
var cors = require('cors');

const port = 8000;

const app = express();
app.use(express.json());
app.use(cors());

var logger = function(req, res, next) {
  console.log('REQUEST:', req.url, req.method, req.body);
  next(); 
}

app.use(logger);
app.use('/', [routes]);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});