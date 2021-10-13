require('dotenv').config('')
const express = require('express');
const app = express();
const cepRoutes = require('./routes/cepRoutes');
const port = 3000;

app.use(express.json());

app.use('/cep', cepRoutes);
app.get('/ping', (_req, res) => res.status(200).json({message: 'pong!'}));
app.listen(port, () => console.log(`Rodando na porta: ${port}!`));