const express = require('express');
const { getSimpsons, setSimpsons } = require('./getAndSetSimpsons');
const fs = require('fs').promises;

const app = express();

app.use(express.json())

app.listen(3000, () => console.log('Node rodando na porta 3000'));

app.get('/simpsons', async (req, res) => {
  const simpsons = await getSimpsons();
  if(!simpsons) return res.status(500);
  res.status(400).json(simpsons);
});

app.get('/simpsons/:id', async (req, res) => {
  const { id } = req.params;
  const simpsons = await getSimpsons();
  const filtered = simpsons.find((el) => el.id === id);
  if(!filtered) {
    return res.status(404).json({ message: "simpson not found" });
  }
  res.status(200).json(filtered);
});

app.post('/simpsons', async (req, res) => {
  const { id, name } = req.body;
  const simpsons = await getSimpsons();
  if(simpsons.some((el) => Number(el.id) === id)) {
    return res.status(409).json({ message: "id already exists" })
  }

  await setSimpsons([...simpsons, { id: id.toString(), name }]);
  res.status(204).end();
})