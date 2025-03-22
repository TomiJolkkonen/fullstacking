// app.js
const express = require('express');
const { sequelize, Kayttaja, Blogi } = require('./db');
const app = express();

app.use(express.json());

app.post('/kayttajat', async (req, res) => {
  const kayttaja = await Kayttaja.create(req.body);
  res.json(kayttaja);
});

app.post('/blogit', async (req, res) => {
  const blogi = await Blogi.create(req.body);
  res.json(blogi);
});

app.get('/kayttajat', async (req, res) => {
  const kayttajat = await Kayttaja.findAll({ include: Blogi });
  res.json(kayttajat);
});

const PORT = 3000;
app.listen(PORT, async () => {
  await sequelize.sync();
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
