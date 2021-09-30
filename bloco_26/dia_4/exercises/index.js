const express = require('express');

const app = express();

app.use(express.json())

app.listen(3002, () => console.log('Node rodando na porta 3002'));

app.get('/ping', (req, res) => {
  res.status(200).json({ message: 'pong' });
})

app.post('/hello', (req, res) => {
  const { name } = req.body;
  res.status(200).json({ message: `Hello, ${name}!` });
});

app.post('/greetings', (req, res) => {
  const { name, age } = req.body;
  if (age > 17) {
    return res.status(200).json({ message: `Hello, ${name}` });
  }
  res.status(401).json({ message: 'Unauthorized' });
})

app.put('/users/:name/:age', (req, res) => {
  const { name, age } = req.params;
  res.status(400).json({ message: `Seu nome é ${name} e você tem ${age} anos de idade` });
})