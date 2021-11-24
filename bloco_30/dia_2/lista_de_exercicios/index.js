const express = require('express');
const app = express();
const port = 3000;

const controller = require('./controllers/booksController');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.get('/books', controller.getAll);
app.get('/books/:id', controller.getById);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
