const express = require('express');
const btcRoutes = require('./routes');

const app = express();
app.use(express.json());

app.use('/btc', btcRoutes);

app.listen(3000, () => console.log(`Rodando na porta 3000`));