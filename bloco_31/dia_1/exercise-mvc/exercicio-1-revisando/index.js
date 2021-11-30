const controller = require('./controllers/joke');
const express = require('express');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');
app.get('/', controller.listJokes);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
