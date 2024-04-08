import express from 'express';
import Veiculo from './models/veiculo.mjs';


const app = express();
const port = 3000;

app.get('/veiculos', async (req, res) => {
  res.json(await Veiculo.findAll());
})

app.post('/veiculos', async (req, res) => {
    const created = await Veiculo.create({ fabricante: "GM", modelo: "Corsa"});
    res.send(created);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})