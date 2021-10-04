const express = require('express');
const postRoutes = require('./routes');
const handleErrors = require('./handleErrors');

const app = express();
app.use(express.json());

app.use('/posts', postRoutes);

app.use('*', (_req, _res, next) => {
  next({statusCode: 404, message: "Opsss, route not found!"})
});

app.use(handleErrors);

app.listen(3000, () => console.log(`Rodando na porta 3000`));