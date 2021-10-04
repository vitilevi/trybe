const express = require('express');
const loginRoutes = require('./routes');

const app = express();
app.use(express.json());

app.use('/user', loginRoutes);

app.listen(3000, () => console.log(`Rodando na porta 3000`));