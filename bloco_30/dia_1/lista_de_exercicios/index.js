const express = require('express');
const app = express();
const port = 3000;
const rescue = require('express-rescue');

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));

app
  .get('/plant/:id')
  .get('/plants')
  .delete('/plant/:id')
  .post('/plant/:id')
  .post('/plant')
  .get('/sunny/:id');


app.listen(port, () => console.log(`Example app listening on port ${port}!`));