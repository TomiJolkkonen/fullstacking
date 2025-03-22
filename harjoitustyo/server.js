// asenna riippuvuudet: npm init -y
// npm install express cors mongoose

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/tehtavat', { useNewUrlParser: true, useUnifiedTopology: true });

const tehtavaSchema = new mongoose.Schema({
  nimi: String,
  suoritettu: Boolean,
});

const Tehtava = mongoose.model('Tehtava', tehtavaSchema);

app.post('/api/tehtavat', async (req, res) => {
  const uusiTehtava = new Tehtava(req.body);
  const tallennettuTehtava = await uusiTehtava.save();
  res.json(tallennettuTehtava);
});

app.get('/api/tehtavat', async (req, res) => {
  const tehtavat = await Tehtava.find({});
  res.json(tehtavat);
});

app.put('/api/tehtavat/:id', async (req, res) => {
  const paivitettyTehtava = await Tehtava.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(paivitettyTehtava);
});

app.delete('/api/tehtavat/:id', async (req, res) => {
  await Tehtava.findByIdAndRemove(req.params.id);
  res.status(204).end();
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Palvelin käynnissä portissa ${PORT}`);
});
